import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const PACKAGE_ID = 'dsh-skin-frosted-tide'
const SKIN_ID = 'frosted-tide'
const STYLE_ID = 'dsh-skin-frosted-tide/skin.css'
const directory = dirname(fileURLToPath(import.meta.url))
const css = await readFile(join(directory, 'skin.css'), 'utf8')

const tokenValues = JSON.parse(await readFile(join(directory, 'tokens.json'), 'utf8'))

const tokenOverrides = Object.fromEntries(
  Object.entries(tokenValues).map(([name, value]) => [name, { light: value, dark: value }]),
)

const client = `window.__ModuleLoader__.load({
  id: ${JSON.stringify(PACKAGE_ID)},
  factory: () => {
    var module = { exports: {} };
    const PACKAGE_ID = ${JSON.stringify(PACKAGE_ID)};
    const SKIN_ID = ${JSON.stringify(SKIN_ID)};
    const STYLE_ID = ${JSON.stringify(STYLE_ID)};
    const CSS = ${JSON.stringify(css)};
    const TOKEN_OVERRIDES = Object.freeze(${JSON.stringify(tokenOverrides, null, 2)});
    const inject = ['theme'];
    function apply(ctx) {
      ctx.effect(
        () => ctx.theme.overrideTokens(PACKAGE_ID, TOKEN_OVERRIDES),
        PACKAGE_ID + ': override theme tokens',
      );
      ctx.effect(() => {
        if (typeof document === 'undefined') return;
        // A shared stack keeps the DOM marker aligned with token-layer order,
        // including when an older skin is disabled before the newest one.
        const key = Symbol.for('dsh-skin.active-layers.v1');
        const state = document[key] || (document[key] = {
          previous: document.body.dataset.dshSkin,
          layers: [],
        });
        const layer = { id: SKIN_ID };
        state.layers.push(layer);
        document.body.dataset.dshSkin = SKIN_ID;
        const tag = document.createElement('style');
        tag.dataset.plugin = PACKAGE_ID;
        tag.dataset.pluginCss = STYLE_ID;
        tag.textContent = CSS;
        document.head.appendChild(tag);
        return () => {
          tag.remove();
          const index = state.layers.indexOf(layer);
          if (index < 0) return;
          state.layers.splice(index, 1);
          const active = state.layers.at(-1)?.id ?? state.previous;
          if (active === undefined) delete document.body.dataset.dshSkin;
          else document.body.dataset.dshSkin = active;
          if (state.layers.length === 0) delete document[key];
        };
      }, PACKAGE_ID + ': install structural CSS');
    }
    module.exports = { name: PACKAGE_ID, inject, apply };
    return module.exports;
  }
});
`

const target = join(directory, 'client.js')
if (process.argv.includes('--check')) {
  const current = await readFile(target, 'utf8').catch(() => '')
  if (current !== client) {
    console.error('client.js is stale; run `pnpm run build`.')
    process.exitCode = 1
  }
} else {
  await writeFile(target, client)
  console.log(`Built ${target}`)
}
