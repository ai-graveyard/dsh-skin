import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import vm from 'node:vm'
import { getSkinDirectories } from '../plugin/discover-skins.mjs'

const source = await readFile(new URL('../plugin/client.js', import.meta.url), 'utf8')
const catalog = await Promise.all((await getSkinDirectories()).map(async (dir) => ({
  listing: JSON.parse(await readFile(join(dir, 'skin.json'), 'utf8')),
  css: await readFile(join(dir, 'skin.css'), 'utf8'),
})))
catalog.sort((a, b) => a.listing.order - b.listing.order)

const styles = new Set()
const layers = new Map()
const storage = new Map()
const storageListeners = new Set()
const document = {
  body: { dataset: {} },
  head: { appendChild(tag) { styles.add(tag) } },
  createElement(name) {
    assert.equal(name, 'style')
    return { dataset: {}, remove() { styles.delete(this) } }
  },
}
let registration
vm.runInNewContext(source, {
  document,
  window: {
    __ModuleLoader__: { load(value) { registration = value } },
    localStorage: {
      getItem(key) { return storage.get(key) ?? null },
      setItem(key, value) { storage.set(key, value) },
    },
    addEventListener(name, fn) { assert.equal(name, 'storage'); storageListeners.add(fn) },
    removeEventListener(name, fn) { assert.equal(name, 'storage'); storageListeners.delete(fn) },
  },
}, { filename: 'plugin/client.js' })
assert.equal(registration.id, 'dsh-skin')
const plugin = registration.factory((name) => {
  assert.equal(name, 'react')
  return {
    createElement(type, props, ...children) { return { type, props, children } },
    useSyncExternalStore(_subscribe, snapshot) { return snapshot() },
  }
})
assert.equal(plugin.name, 'dsh-skin')
assert.deepEqual([...plugin.inject], ['theme', 'slots', 'locale'])

function activate(locale = 'zh-CN') {
  const disposers = []
  let picker
  plugin.apply({
    effect(setup) { disposers.push(setup()) },
    slots: {
      inject(slot, setup) { assert.equal(slot, 'plugins.bundle.config'); setup() },
      register(options, component) {
        assert.equal(options.name, 'plugins.bundle.config')
        assert.equal(options.key, 'dsh-skin')
        picker = component
      },
    },
    locale: { getSnapshot: () => ({ active: locale }) },
    theme: {
      overrideTokens(source, tokens) {
        layers.set(source, tokens)
        return () => { if (layers.get(source) === tokens) layers.delete(source) }
      },
    },
  })
  const cards = () => {
    const grid = picker().children[2]
    assert.equal(grid.props.role, 'group')
    assert.ok(grid.children.every((card) => card.type === 'button'))
    return grid.children
  }
  return {
    names() { return cards().map((card) => card.children[1].children[0].children[0]) },
    selected() {
      const pressed = cards().filter((card) => card.props['aria-pressed'])
      assert.equal(pressed.length, 1)
      return pressed[0].props['data-theme']
    },
    choose(value) { cards().find((card) => card.props['data-theme'] === value).props.onClick() },
    close() { for (const dispose of disposers.reverse()) dispose() },
  }
}

function checkOriginal(marker) {
  assert.equal(document.body.dataset.dshSkin, marker)
  assert.equal(styles.size, 0)
  assert.equal(layers.size, 0)
}

function checkTheme({ listing, css }) {
  assert.equal(document.body.dataset.dshSkin, listing.slug)
  assert.equal(styles.size, 1)
  assert.equal([...styles][0].textContent, css)
  assert.equal(layers.size, 1)
  const base = layers.get('dsh-skin')['--dsw-alias-bg-base']
  assert.deepEqual({ ...base }, { light: listing.colors[0], dark: listing.colors[0] })
}

let active = activate()
checkOriginal()
assert.equal(active.selected(), '')
assert.deepEqual(
  active.names(),
  ['原生外观', ...catalog.map(({ listing }) => listing.nameZh)],
)

for (const theme of catalog) {
  active.choose(theme.listing.slug)
  assert.equal(active.selected(), theme.listing.slug)
  checkTheme(theme)
}

active.close()
checkOriginal()
assert.equal(storageListeners.size, 0)

active = activate('en')
checkTheme(catalog.at(-1))
assert.equal(active.selected(), catalog.at(-1).listing.slug)
assert.deepEqual(
  active.names(),
  ['Original appearance', ...catalog.map(({ listing }) => listing.name)],
)

storage.set('dsh-skin.theme', catalog[0].listing.slug)
for (const listener of storageListeners) listener({ key: 'dsh-skin.theme' })
checkTheme(catalog[0])
assert.equal(active.selected(), catalog[0].listing.slug)
active.choose('')
checkOriginal()
assert.equal(active.selected(), '')
active.close()

storage.set('dsh-skin.theme', 'missing-theme')
document.body.dataset.dshSkin = 'existing-theme'
active = activate()
checkOriginal('existing-theme')
active.choose(catalog[0].listing.slug)
active.close()
checkOriginal('existing-theme')

console.log('Theme selection, appearance cleanup, localization and persisted preferences passed.')
