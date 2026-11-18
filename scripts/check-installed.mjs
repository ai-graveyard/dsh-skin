import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve, join } from 'node:path'

const profile = process.argv[2]
assert.ok(profile, 'Usage: node scripts/check-installed.mjs <desktop-profile-directory>')
const source = resolve(import.meta.dirname, '../plugin')
const pkg = JSON.parse(await readFile(join(source, 'package.json'), 'utf8'))
const installed = resolve(profile, 'node_modules', pkg.name)
for (const file of ['package.json', 'index.js', 'client.js', 'cordis.patch.yml', 'icon.svg', 'locale/en.json', 'locale/zh.json']) {
  assert.deepEqual(
    await readFile(join(installed, file)),
    await readFile(join(source, file)),
    `${pkg.name}: installed ${file} differs; increment the package version after changing its contents`,
  )
}
console.log(`${pkg.name}@${pkg.version}: installed runtime and metadata match source`)
