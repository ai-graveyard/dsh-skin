import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import { basename, join, resolve } from 'node:path'
import vm from 'node:vm'
import { getSkinDirectories } from './discover-skins.mjs'

const root = resolve(import.meta.dirname, '..')
const skinsRoot = join(root, 'skins')
const requiredFiles = [
  'LICENSE',
  'README.md',
  'build.mjs',
  'client.js',
  'cordis.patch.yml',
  'index.js',
  'package.json',
  'preview.html',
  'skin.css',
  'skin.json',
]

const directories = await getSkinDirectories(skinsRoot)
const seenSlugs = new Set()
const seenPackages = new Set()
const seenOrders = new Set()
let featuredCount = 0

assert.ok(directories.length > 0, 'At least one skin is required')

for (const directory of directories) {
  const directoryName = basename(directory)
  const read = (file) => readFile(join(directory, file), 'utf8')

  for (const file of requiredFiles) {
    await access(join(directory, file))
  }

  const pkg = JSON.parse(await read('package.json'))
  const patch = await read('cordis.patch.yml')
  const css = await read('skin.css')
  const preview = await read('preview.html')
  const clientSource = await read('client.js')
  const listing = JSON.parse(await read('skin.json'))

  assert.equal(listing.slug, directoryName, `${directoryName}: slug must match its directory`)
  assert.match(listing.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `${directoryName}: slug must be kebab-case`)
  assert.equal(listing.packageName, pkg.name, `${directoryName}: packageName must match package.json`)
  assert.equal(pkg.name, `dsh-skin-${listing.slug}`, `${directoryName}: package name must follow dsh-skin-<slug>`)
  assert.equal(listing.version, pkg.version, `${directoryName}: listing and package versions differ`)
  assert.equal(listing.license, pkg.license, `${directoryName}: listing and package licenses differ`)
  assert.equal(pkg.dsh.bundle.patch, './cordis.patch.yml')
  assert.equal(pkg.dsh.client.platform, 'web')
  assert.equal(pkg.exports['./client'], './client.js')
  assert.equal(pkg.scripts.prepack, 'node build.mjs --check')
  assert.ok(pkg.repository?.url, `${directoryName}: repository URL is required`)
  assert.ok(pkg.homepage, `${directoryName}: homepage is required`)
  assert.ok(pkg.bugs?.url, `${directoryName}: bugs URL is required`)
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
  assert.ok(!seenPackages.has(pkg.name), `Duplicate package name: ${pkg.name}`)
  assert.ok(!seenOrders.has(listing.order), `Duplicate skin order: ${listing.order}`)
  seenSlugs.add(listing.slug)
  seenPackages.add(pkg.name)
  seenOrders.add(listing.order)
  if (listing.featured) featuredCount += 1

  assert.match(patch, new RegExp(`id:\\s*${pkg.name}`))
  assert.match(patch, new RegExp(`name:\\s*${pkg.name}`))
  assert.match(css, new RegExp(`body\\[data-dsh-skin=["']${listing.slug}["']\\]`))
  assert.match(css, /prefers-reduced-motion/)
  for (const selector of ['_sidebarCol', '_composerStack', '_card', '_primary']) {
    assert.ok(css.includes(selector), `${directoryName}: skin.css is missing ${selector}`)
  }
  assert.doesNotMatch(css, /url\s*\(\s*['"]?https?:/i, `${directoryName}: remote CSS assets are not allowed`)
  assert.doesNotMatch(preview, /<script\b/i, `${directoryName}: preview must remain script-free`)
  for (const color of listing.colors) {
    assert.ok(css.toLowerCase().includes(color.toLowerCase()), `${directoryName}: skin.css is missing ${color}`)
    assert.ok(preview.toLowerCase().includes(color.toLowerCase()), `${directoryName}: preview is missing ${color}`)
  }

  let registration
  const styleTags = []
  const document = {
    body: { dataset: {} },
    head: { appendChild(tag) { styleTags.push(tag) } },
    querySelector(selector) {
      if (!selector.startsWith('style[data-plugin-css=')) return null
      return styleTags.find((tag) => selector.includes(JSON.stringify(tag.dataset.pluginCss))) ?? null
    },
    createElement(name) {
      assert.equal(name, 'style')
      return {
        dataset: {},
        textContent: '',
        remove() {
          const index = styleTags.indexOf(this)
          if (index >= 0) styleTags.splice(index, 1)
        },
      }
    },
  }

  vm.runInNewContext(clientSource, {
    document,
    window: { __ModuleLoader__: { load(value) { registration = value } } },
  }, { filename: `${listing.slug}/client.js` })

  assert.equal(registration.id, pkg.name)
  const plugin = registration.factory()
  assert.equal(plugin.name, pkg.name)
  assert.deepEqual([...plugin.inject], ['theme'])

  const disposers = []
  let overrideLayer
  const ctx = {
    effect(setup) {
      const disposer = setup()
      if (typeof disposer === 'function') disposers.push(disposer)
    },
    theme: {
      overrideTokens(source, tokens) {
        overrideLayer = { source, tokens }
        return () => { overrideLayer = undefined }
      },
    },
  }

  plugin.apply(ctx)
  assert.equal(overrideLayer.source, pkg.name)
  assert.deepEqual(Object.keys(overrideLayer.tokens['--dsw-alias-bg-base']).sort(), ['dark', 'light'])
  assert.deepEqual(
    { ...overrideLayer.tokens['--dsw-alias-bg-base'] },
    { light: listing.colors[0], dark: listing.colors[0] },
  )
  assert.equal(document.body.dataset.dshSkin, listing.slug)
  assert.equal(styleTags.length, 1)
  assert.match(styleTags[0].textContent, /button\[type="submit"\]/)

  for (const dispose of disposers.reverse()) dispose()
  assert.equal(overrideLayer, undefined)
  assert.equal(styleTags.length, 0)
  assert.equal(document.body.dataset.dshSkin, undefined)

  console.log(`Validated ${listing.name} (${pkg.name}@${pkg.version}).`)
}

assert.ok(featuredCount <= 1, 'Only one skin may be featured')
console.log(`Validated ${directories.length} skin manifest(s), bundles, previews and lifecycles.`)
