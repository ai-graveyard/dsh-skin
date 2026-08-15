import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import vm from 'node:vm'

const root = resolve(import.meta.dirname, '..')
const skin = resolve(root, 'skins/braun-control')
const pkg = JSON.parse(await readFile(resolve(skin, 'package.json'), 'utf8'))
const patch = await readFile(resolve(skin, 'cordis.patch.yml'), 'utf8')
const css = await readFile(resolve(skin, 'skin.css'), 'utf8')
const preview = await readFile(resolve(skin, 'preview.html'), 'utf8')
const clientSource = await readFile(resolve(skin, 'client.js'), 'utf8')
const listing = JSON.parse(await readFile(resolve(skin, 'skin.json'), 'utf8'))

assert.equal(pkg.name, 'dsh-skin-braun-control')
assert.equal(pkg.dsh.bundle.patch, './cordis.patch.yml')
assert.equal(pkg.dsh.client.platform, 'web')
assert.equal(pkg.exports['./client'], './client.js')
assert.equal(listing.slug, 'braun-control')
assert.equal(listing.name, 'Braun Control')
assert.equal(listing.version, pkg.version)
assert.equal(listing.license, pkg.license)
assert.equal(listing.colors.length, 3)
assert.match(patch, /id: dsh-skin-braun-control/)
assert.match(patch, /name: dsh-skin-braun-control/)

for (const color of ['#f7f7f7', '#efefef', '#ececec', '#e8500a']) {
  assert.ok(css.toLowerCase().includes(color), `skin.css is missing ${color}`)
  assert.ok(preview.toLowerCase().includes(color), `preview.html is missing ${color}`)
}
assert.match(css, /--u:\s*8px/)
assert.match(css, /prefers-reduced-motion/)
assert.match(css, /_sidebarCol/)
assert.match(css, /_newSession/)
assert.match(css, /_composerStack/)
assert.match(css, /_card/)
assert.match(css, /_primary/)
assert.match(css, /BRAUN CONTROL \/ ACTIVE/)
assert.doesNotMatch(preview, /<script\b/i)

let registration
const styleTags = []
const document = {
  body: { dataset: {} },
  head: { appendChild(tag) { styleTags.push(tag) } },
  querySelector(selector) {
    if (!selector.startsWith('style[data-plugin-css=')) return null
    return styleTags.find(tag => selector.includes(JSON.stringify(tag.dataset.pluginCss))) ?? null
  },
  createElement(name) {
    assert.equal(name, 'style')
    const tag = {
      dataset: {},
      textContent: '',
      remove() {
        const index = styleTags.indexOf(tag)
        if (index >= 0) styleTags.splice(index, 1)
      },
    }
    return tag
  },
}

vm.runInNewContext(clientSource, {
  document,
  window: {
    __ModuleLoader__: {
      load(value) { registration = value },
    },
  },
}, { filename: 'client.js' })

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
assert.deepEqual(
  { ...overrideLayer.tokens['--dsw-alias-bg-base'] },
  { light: '#F7F7F7', dark: '#F7F7F7' },
)
assert.deepEqual(
  { ...overrideLayer.tokens['--dsw-alias-brand-primary'] },
  { light: '#1A1A1A', dark: '#1A1A1A' },
)
assert.equal(document.body.dataset.dshSkin, 'braun-control')
assert.equal(styleTags.length, 1)
assert.match(styleTags[0].textContent, /button\[type="submit"\]/)

for (const dispose of disposers.reverse()) dispose()
assert.equal(overrideLayer, undefined)
assert.equal(styleTags.length, 0)
assert.equal(document.body.dataset.dshSkin, undefined)

console.log('Validated Braun Control manifest, persistent token override lifecycle, CSS and preview.')
