import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import vm from 'node:vm'
import { getSkinDirectories } from './discover-skins.mjs'
import { join, resolve } from 'node:path'

// Exercise independently packaged skins sharing one client document, including
// non-LIFO plugin disposal and duplicate activation during hot reload.
const directories = await getSkinDirectories(resolve(import.meta.dirname, '../skins'))
const styles = new Set()
const tokens = new Map()
const document = {
  body: { dataset: { dshSkin: 'previous' } },
  head: { appendChild(tag) { styles.add(tag) } },
  createElement() { return { dataset: {}, remove() { styles.delete(this) } } },
}
const plugins = []
for (const dir of directories) {
  let registration
  vm.runInNewContext(await readFile(join(dir, 'client.js'), 'utf8'), {
    document,
    window: { __ModuleLoader__: { load(value) { registration = value } } },
  })
  plugins.push(registration.factory())
  const css = await readFile(join(dir, 'skin.css'), 'utf8')
  assert.doesNotMatch(css, /(^|\n):root\s*\{/, 'skin variables must not leak outside the active skin')
  assert.match(css, /contenteditable="true"/, 'support the desktop rich-text composer')
  assert.match(css, /_primary.*:disabled/, 'send must retain an explicit disabled appearance')
}
function activate(plugin) {
  const effects = []
  plugin.apply({
    effect(setup) { const dispose = setup(); if (dispose) effects.push(dispose) },
    theme: { overrideTokens(source, values) {
      const layer = { values }
      tokens.set(source, layer)
      return () => { if (tokens.get(source) === layer) tokens.delete(source) }
    } },
  })
  let disposed = false
  return () => { if (!disposed) { disposed = true; effects.reverse().forEach(fn => fn()) } }
}
for (const reverse of [false, true]) {
  const disposers = plugins.map(activate)
  const ids = plugins.map(plugin => plugin.name.replace(/^dsh-skin-/, ''))
  assert.equal(document.body.dataset.dshSkin, ids.at(-1))
  const order = reverse ? disposers.map((_, i) => i).reverse() : disposers.map((_, i) => i)
  const remaining = new Set(order)
  for (const i of order) {
    disposers[i]()
    remaining.delete(i)
    assert.equal(document.body.dataset.dshSkin, remaining.size ? ids[Math.max(...remaining)] : 'previous')
    assert.equal(styles.size, remaining.size)
    assert.equal(tokens.size, remaining.size)
  }
}
const first = activate(plugins[0])
const replacement = activate(plugins[0])
first()
assert.equal(styles.size, 1)
assert.equal(tokens.size, 1)
replacement()
assert.equal(styles.size, 0)
assert.equal(tokens.size, 0)
assert.equal(document.body.dataset.dshSkin, 'previous')
console.log('Skin overlap, reverse disposal, hot reload and CSS scope checks passed.')
