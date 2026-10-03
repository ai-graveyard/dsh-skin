import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import { getSkinDirectories } from './discover-skins.mjs'
const profile = process.argv[2]
assert.ok(profile, 'Usage: node scripts/check-installed.mjs <desktop-profile-directory>')
const directories = await getSkinDirectories(resolve(import.meta.dirname, '../skins'))
for (const dir of directories) {
  const pkg = JSON.parse(await readFile(join(dir, 'package.json'), 'utf8'))
  const installed = resolve(profile, 'node_modules', pkg.name)
  for (const file of ['package.json', 'client.js', 'skin.css', 'tokens.json', 'icon.svg', 'locale/en.json', 'locale/zh.json']) {
    assert.deepEqual(await readFile(join(installed, file)), await readFile(join(dir, file)), `${pkg.name}: installed ${file} differs; do not reuse a tarball version after changing its contents`)
  }
  console.log(`${pkg.name}@${pkg.version}: installed runtime and metadata match source`)
}
