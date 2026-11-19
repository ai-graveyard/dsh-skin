import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { getSkinDirectories } from '../plugin/discover-skins.mjs'
const luminance = hex => {
  const rgb = hex.slice(1).match(/../g).map(x => parseInt(x, 16) / 255).map(x => x <= .04045 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4)
  return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722
}
const ratio = (a, b) => (Math.max(luminance(a), luminance(b)) + .05) / (Math.min(luminance(a), luminance(b)) + .05)
function checkPalette(name, { colors, preview }, tokens, focus) {
  const pairs = [
    ['body', colors[1], colors[0]],
    ['secondary on canvas', preview.muted, colors[0]],
    ['secondary on sidebar', preview.muted, preview.layer],
    ['secondary on panel', preview.muted, preview.surface],
    ['inverted label', tokens['--dsw-alias-label-primary-inverted'], tokens['--dsw-alias-button-contrast-fill']],
    ['action', tokens['--dsw-alias-label-primary-foreground'], tokens['--dsw-alias-button-primary-fill']],
    ['link', tokens['--dsw-alias-link'], colors[0]],
    ...Object.entries(tokens).filter(([key]) => key.startsWith('--shiki')).map(([key, value]) => [key, value, tokens['--dsw-alias-markdown-code-block']]),
  ]
  assert.ok(focus, `${name}: explicit focus colour is required`)
  for (const surface of [colors[0], preview.surface, preview.layer]) assert.ok(ratio(focus, surface) >= 3, `${name}: focus contrast below 3:1`)
  for (const [role, fg, bg] of pairs) assert.ok(ratio(fg, bg) >= 4.5, `${name}: ${role} ${ratio(fg, bg).toFixed(2)}:1 < 4.5:1 (${fg} / ${bg})`)
  console.log(`${name}: ${pairs.length} text contrast pairs passed`)
}

for (const dir of await getSkinDirectories()) {
  const skin = JSON.parse(await readFile(join(dir, 'skin.json'), 'utf8'))
  const tokens = JSON.parse(await readFile(join(dir, 'tokens.json'), 'utf8'))
  const css = await readFile(join(dir, 'skin.css'), 'utf8')
  const focusColors = [...css.matchAll(/--skin-focus: (#[0-9A-Fa-f]{6})/g)].map((match) => match[1])
  checkPalette(skin.name, skin, tokens, focusColors[0])
  if (skin.dark) {
    const darkTokens = JSON.parse(await readFile(join(dir, 'tokens.dark.json'), 'utf8'))
    checkPalette(`${skin.name} (dark)`, skin.dark, darkTokens, focusColors[1])
  }
}
