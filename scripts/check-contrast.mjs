import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { getSkinDirectories } from './discover-skins.mjs'
const luminance = hex => {
  const rgb = hex.slice(1).match(/../g).map(x => parseInt(x, 16) / 255).map(x => x <= .04045 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4)
  return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722
}
const ratio = (a, b) => (Math.max(luminance(a), luminance(b)) + .05) / (Math.min(luminance(a), luminance(b)) + .05)
for (const dir of await getSkinDirectories(new URL('../skins', import.meta.url).pathname)) {
  const skin = JSON.parse(await readFile(join(dir, 'skin.json'), 'utf8'))
  const tokens = JSON.parse(await readFile(join(dir, 'tokens.json'), 'utf8'))
  const pairs = [
    ['body', skin.colors[1], skin.colors[0]],
    ['secondary on canvas', skin.preview.muted, skin.colors[0]],
    ['secondary on sidebar', skin.preview.muted, skin.preview.layer],
    ['secondary on panel', skin.preview.muted, skin.preview.surface],
    ['inverted label', tokens['--dsw-alias-label-primary-inverted'], tokens['--dsw-alias-button-contrast-fill']],
    ['action', tokens['--dsw-alias-label-primary-foreground'], tokens['--dsw-alias-button-primary-fill']],
    ['link', tokens['--dsw-alias-link'], skin.colors[0]],
    ...Object.entries(tokens).filter(([key]) => key.startsWith('--shiki')).map(([key, value]) => [key, value, tokens['--dsw-alias-markdown-code-block']]),
  ]
  const css = await readFile(join(dir, 'skin.css'), 'utf8')
  const focus = /--skin-focus: (#[0-9A-Fa-f]{6})/.exec(css)?.[1]
  assert.ok(focus, `${skin.slug}: explicit focus colour is required`)
  for (const surface of [skin.colors[0], skin.preview.surface, skin.preview.layer]) assert.ok(ratio(focus, surface) >= 3, `${skin.slug}: focus contrast below 3:1`)
  for (const [name, fg, bg] of pairs) assert.ok(ratio(fg, bg) >= 4.5, `${skin.slug}: ${name} ${ratio(fg, bg).toFixed(2)}:1 < 4.5:1 (${fg} / ${bg})`)
  console.log(`${skin.name}: ${pairs.length} text contrast pairs passed`)
}
