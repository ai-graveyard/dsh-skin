import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { basename, join, resolve } from 'node:path'
import { tmpdir } from 'node:os'
import { getSkinDirectories } from '../plugin/discover-skins.mjs'

const root = resolve(import.meta.dirname, '..')
const releaseRoot = join(root, 'dist', 'releases')
const dryRun = process.argv.includes('--dry-run')
const run = promisify(execFile)
const packOptions = dryRun ? ['--dry-run'] : ['--pack-destination', releaseRoot]

// Existing desktop installations can still refer to older versioned archives.
if (!dryRun) await mkdir(releaseRoot, { recursive: true })

const { stdout } = await run('npm', ['pack', './plugin', '--json', ...packOptions], {
  cwd: root,
  env: {
    ...process.env,
    npm_config_cache: process.env.npm_config_cache ?? join(tmpdir(), 'dsh-skin-npm-cache'),
  },
})
const [packed] = JSON.parse(stdout)
assert.equal(packed.name, 'dsh-skin')

const packedFiles = new Set(packed.files.map((file) => file.path))
const expectedFiles = ['package.json', 'index.js', 'client.js', 'picker.css', 'surfaces.css', 'cordis.patch.yml', 'icon.svg', 'locale/zh.json', 'locale/en.json']
for (const directory of await getSkinDirectories()) {
  const slug = basename(directory)
  const listing = JSON.parse(await readFile(join(directory, 'skin.json'), 'utf8'))
  for (const file of ['skin.css', 'tokens.json', 'skin.json']) {
    expectedFiles.push(`skins/${slug}/${file}`)
  }
  if (listing.dark) expectedFiles.push(`skins/${slug}/tokens.dark.json`)
  for (const artwork of [listing.artwork, listing.sidebarArtwork].filter(Boolean)) {
    expectedFiles.push(`skins/${slug}/${artwork}`)
  }
}
for (const file of expectedFiles) assert.ok(packedFiles.has(file), `Package is missing ${file}`)
assert.ok([...packedFiles].filter((file) => file.endsWith('package.json')).length === 1, 'Only the root plugin may be packaged')

if (dryRun) {
  console.log(`Verified ${packed.name}@${packed.version}: ${packed.files.length} files.`)
} else {
  const { filename } = packed
  const bytes = await readFile(join(releaseRoot, filename))
  const sha256 = createHash('sha256').update(bytes).digest('hex')
  const artifacts = [{ package: packed.name, version: packed.version, filename, size: bytes.length, sha256 }]
  await writeFile(join(releaseRoot, 'SHA256SUMS'), `${sha256}  ${filename}\n`)
  await writeFile(join(releaseRoot, 'release-manifest.json'), `${JSON.stringify({ artifacts }, null, 2)}\n`)
  console.log(`Packed ${filename} into ${releaseRoot}`)
}
