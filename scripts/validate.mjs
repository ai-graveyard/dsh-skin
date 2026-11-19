import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { basename, join, resolve } from 'node:path'
import { getSkinDirectories } from '../plugin/discover-skins.mjs'

const root = resolve(import.meta.dirname, '..')
const plugin = join(root, 'plugin')
const readPlugin = (file) => readFile(join(plugin, file), 'utf8')
const pkg = JSON.parse(await readPlugin('package.json'))
assert.equal(pkg.name, 'dsh-skin')
assert.equal(pkg.dsh.bundle.patch, './cordis.patch.yml')
assert.equal(pkg.dsh.client.platform, 'web')
assert.equal(pkg.exports['./client'], './client.js')
assert.equal(pkg.exports['./locale/*'], './locale/*')
assert.equal(pkg.scripts.prepack, 'node build.mjs --check')
assert.equal(pkg.icon, './icon.svg')
const pluginIcon = await readPlugin('icon.svg')
assert.match(pluginIcon, /viewBox="0 0 ([1-9]\d*) \1"/, 'The desktop plugin icon must fit a square slot')
assert.doesNotMatch(pluginIcon, /<script|(?:href|src)=/i, 'The desktop plugin icon must be self-contained')
assert.ok(pkg.repository?.url && pkg.homepage && pkg.bugs?.url)
assert.match(await readPlugin('cordis.patch.yml'), /id: dsh-skin\s+name: dsh-skin/)
for (const [locale, title] of [['en', 'Skin Collection'], ['zh', '皮肤大全']]) {
  const { meta } = JSON.parse(await readPlugin(`locale/${locale}.json`))
  assert.equal(meta.title, title, `${locale}: plugin display name`)
  assert.ok(meta.description.length > 5)
}
const requiredFiles = ['README.md', 'preview.html', 'skin.css', 'skin.json', 'tokens.json', 'icon.svg', 'locale/en.json', 'locale/zh.json']

const directories = await getSkinDirectories()
const seenSlugs = new Set()
const seenOrders = new Set()
let featuredCount = 0

assert.ok(directories.length > 0, 'At least one skin is required')

for (const directory of directories) {
  const directoryName = basename(directory)
  const read = (file) => readFile(join(directory, file), 'utf8')

  for (const file of requiredFiles) {
    await access(join(directory, file))
  }

  const css = await read('skin.css')
  const preview = await read('preview.html')
  const listing = JSON.parse(await read('skin.json'))

  assert.equal(listing.slug, directoryName, `${directoryName}: slug must match its directory`)
  assert.match(listing.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `${directoryName}: slug must be kebab-case`)
  assert.equal(listing.license, pkg.license)
  const english = JSON.parse(await read('locale/en.json'))
  const chinese = JSON.parse(await read('locale/zh.json'))
  assert.equal(english.meta.title, listing.name)
  assert.ok(chinese.meta.title.includes(listing.nameZh))
  assert.ok(chinese.meta.description.length > 5)
  const icon = await read('icon.svg')
  assert.match(icon, /<svg/)
  assert.doesNotMatch(icon, /<script|(?:href|src)=/i)
  assert.ok(Buffer.byteLength(icon) < 262144)

  assert.ok(Number.isInteger(listing.order) && listing.order > 0, `${directoryName}: order must be a positive integer`)
  assert.match(listing.verifiedAt, /^\d{4}-\d{2}-\d{2}$/)
  assert.ok(Array.isArray(listing.verifiedStates) && listing.verifiedStates.length > 0, `${directoryName}: verifiedStates are required`)
  assert.ok(listing.verifiedStates.every((state) => typeof state === 'string' && state.length > 0), `${directoryName}: verifiedStates must be non-empty strings`)
  assert.equal(listing.colors.length, 3, `${directoryName}: exactly three signature colors are required`)
  assert.ok(listing.preview?.label, `${directoryName}: preview label is required`)
  for (const field of ['surface', 'layer', 'line', 'muted']) {
    assert.match(listing.preview[field], /^#[\dA-F]{6}$/i, `${directoryName}: preview.${field} must be a hex color`)
  }
  for (const screenshot of listing.screenshots ?? []) {
    assert.ok(['desktop', 'mobile'].includes(screenshot.viewport), `${directoryName}: invalid screenshot viewport`)
    assert.ok(screenshot.alt && screenshot.label, `${directoryName}: screenshots require alt and label text`)
    assert.ok(Number.isInteger(screenshot.width) && screenshot.width > 0, `${directoryName}: screenshot width must be a positive integer`)
    assert.ok(Number.isInteger(screenshot.height) && screenshot.height > 0, `${directoryName}: screenshot height must be a positive integer`)
    assert.ok(screenshot.src.startsWith(`/skins/${listing.slug}/`), `${directoryName}: screenshot must stay under its public skin directory`)
    const screenshotFile = join(root, 'public', screenshot.src.slice(1))
    await access(screenshotFile)
    const screenshotBytes = await readFile(screenshotFile)
    assert.equal(screenshotBytes.subarray(1, 4).toString('ascii'), 'PNG', `${directoryName}: screenshots must be PNG files`)
    assert.equal(screenshotBytes.readUInt32BE(16), screenshot.width, `${directoryName}: screenshot width metadata differs from the PNG`)
    assert.equal(screenshotBytes.readUInt32BE(20), screenshot.height, `${directoryName}: screenshot height metadata differs from the PNG`)
  }

  assert.ok(!seenSlugs.has(listing.slug), `Duplicate skin slug: ${listing.slug}`)
  assert.ok(!seenOrders.has(listing.order), `Duplicate skin order: ${listing.order}`)
  seenSlugs.add(listing.slug)
  seenOrders.add(listing.order)
  if (listing.featured) featuredCount += 1

  assert.match(css, new RegExp(`body\\[data-dsh-skin=["']${listing.slug}["']\\]`))
  assert.match(css, /prefers-reduced-motion/)
  for (const selector of ['_sidebarCol', '_composerStack', '_card', '_primary']) {
    assert.ok(css.includes(selector), `${directoryName}: skin.css is missing ${selector}`)
  }
  assert.doesNotMatch(css, /url\s*\(\s*['"]?https?:/i, `${directoryName}: remote CSS assets are not allowed`)
  assert.doesNotMatch(preview, /<script\b/i, `${directoryName}: preview must remain script-free`)
  for (const color of listing.colors) {
    assert.ok(css.toLowerCase().includes(color.toLowerCase()), `${directoryName}: skin.css is missing ${color}`)
  }
  if (listing.dark) {
    const darkTokens = await read('tokens.dark.json')
    for (const color of listing.dark.colors) {
      assert.ok(
        css.toLowerCase().includes(color.toLowerCase()) || darkTokens.toLowerCase().includes(color.toLowerCase()),
        `${directoryName}: dark palette is missing ${color}`,
      )
    }
  }
  const sample = listing.style.includes('Dark') && listing.dark ? listing.dark : listing
  for (const color of sample.colors) {
    assert.ok(preview.toLowerCase().includes(color.toLowerCase()), `${directoryName}: preview is missing ${color}`)
  }

  assert.doesNotMatch(css, /(^|\n):root\s*\{/, 'skin variables must stay scoped')
  assert.match(css, /contenteditable="true"/, 'support the desktop rich-text composer')
  assert.match(css, /_primary.*:disabled/, 'send must retain an explicit disabled appearance')
  console.log(`Validated ${listing.name}.`)
}

assert.ok(featuredCount <= 1, 'Only one skin may be featured')
console.log(`Validated ${directories.length} theme manifests and previews.`)
