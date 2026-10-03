import { createHash } from 'node:crypto'
import { spawn } from 'node:child_process'
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises'
import { join, resolve, sep } from 'node:path'
import { tmpdir } from 'node:os'
import { getSkinDirectories } from './discover-skins.mjs'

const root = resolve(import.meta.dirname, '..')
const skinsRoot = join(root, 'skins')
const releaseRoot = join(root, 'dist', 'releases')
const allowedRoot = `${join(root, 'dist')}${sep}`

if (!releaseRoot.startsWith(allowedRoot)) {
  throw new Error(`Refusing to clean unexpected release path: ${releaseRoot}`)
}

function run(command, args, options = {}) {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(command, args, {
      cwd: root,
      env: process.env,
      stdio: ['ignore', 'pipe', 'inherit'],
      ...options,
    })
    let stdout = ''
    child.stdout.on('data', (chunk) => { stdout += chunk })
    child.on('error', rejectRun)
    child.on('exit', (code, signal) => {
      if (code === 0) resolveRun(stdout)
      else rejectRun(new Error(`${command} exited with ${signal ?? code}`))
    })
  })
}

// Keep older versioned tarballs: desktop profiles can retain file: references
// to them while the package manager resolves an upgrade.
await mkdir(releaseRoot, { recursive: true })

const skinDirectories = await getSkinDirectories(skinsRoot)
if (skinDirectories.length === 0) {
  console.error("No skin directories found.")
  process.exit(1)
}

const artifacts = []

for (const directory of skinDirectories) {
  const output = await run('npm', ['pack', '--json', '--pack-destination', releaseRoot, directory], {
    env: {
      ...process.env,
      npm_config_cache: process.env.npm_config_cache ?? join(tmpdir(), 'dsh-skin-npm-cache'),
    },
  })
  const json = /\[\s*\{[\s\S]*\}\s*\]\s*$/.exec(output)?.[0]
  if (json === undefined) throw new Error(`Could not parse npm pack output for ${directory}`)
  const [packed] = JSON.parse(json)
  const filename = packed.filename
  const file = join(releaseRoot, filename)
  const bytes = await readFile(file)
  const checksum = createHash('sha256').update(bytes).digest('hex')
  const fileStat = await stat(file)

  artifacts.push({
    package: packed.name,
    version: packed.version,
    filename,
    size: fileStat.size,
    sha256: checksum,
  })

  console.log(`Packed ${packed.name}@${packed.version} -> ${filename}`)
}

const checksums = artifacts.map((artifact) => `${artifact.sha256}  ${artifact.filename}`).join('\n') + '\n'
await writeFile(join(releaseRoot, 'SHA256SUMS'), checksums)
await writeFile(join(releaseRoot, 'release-manifest.json'), `${JSON.stringify({ artifacts }, null, 2)}\n`)

console.log(`Wrote ${artifacts.length} release artifact(s) to ${releaseRoot}`)
