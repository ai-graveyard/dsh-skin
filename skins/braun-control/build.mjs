import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const PACKAGE_ID = 'dsh-skin-braun-control'
const SKIN_ID = 'braun-control'
const STYLE_ID = 'dsh-skin-braun-control/skin.css'
const directory = dirname(fileURLToPath(import.meta.url))
const css = await readFile(join(directory, 'skin.css'), 'utf8')

const tokenValues = {
  '--dsw-alias-bg-base': '#F7F7F7',
  '--dsw-alias-bg-layer-1': '#FFFFFF',
  '--dsw-alias-bg-layer-2': '#EFEFEF',
  '--dsw-alias-bg-layer-3': '#ECECEC',
  '--dsw-alias-bg-module-platform': '#EFEFEF',
  '--dsw-alias-bg-multi-select': '#ECECEC',
  '--dsw-alias-bg-overlay': '#ECECEC',
  '--dsw-alias-bg-skeleton': 'rgba(26, 26, 26, 0.06)',
  '--dsw-alias-border-inverted2': '#C9C9C9',
  '--dsw-alias-border-inverted': '#C9C9C9',
  '--dsw-alias-border-l1': '#DCDCDC',
  '--dsw-alias-border-l2-darkmode-thin': '#C9C9C9',
  '--dsw-alias-border-l2': '#C9C9C9',
  '--dsw-alias-border-l3': '#AFAFAF',
  '--dsw-alias-border-l4': '#808080',
  '--dsw-alias-brand-primary-invert': '#F7F7F7',
  '--dsw-alias-brand-primary-new-colorprimary-new-color': '#1A1A1A',
  '--dsw-alias-brand-primary': '#1A1A1A',
  '--dsw-alias-brand-text': '#1A1A1A',
  '--dsw-alias-button-contrast-fill': '#1A1A1A',
  '--dsw-alias-button-elevated-fill': '#FFFFFF',
  '--dsw-alias-button-floating-fill': '#FFFFFF',
  '--dsw-alias-button-floating-hover': '#ECECEC',
  '--dsw-alias-button-ghost-active-border': '#808080',
  '--dsw-alias-button-ghost-active-fill': '#ECECEC',
  '--dsw-alias-button-ghost-active-hover': '#E2E2E2',
  '--dsw-alias-button-info-fill': '#1A1A1A',
  '--dsw-alias-button-info-hover': '#333333',
  '--dsw-alias-button-primary-dimmed': '#DCDCDC',
  '--dsw-alias-button-primary-fill': '#1A1A1A',
  '--dsw-alias-button-primary-hover': '#333333',
  '--dsw-alias-interactive-bg-active': '#DCDCDC',
  '--dsw-alias-interactive-bg-hover-accent': '#E2E2E2',
  '--dsw-alias-interactive-bg-hover-solid': '#ECECEC',
  '--dsw-alias-interactive-bg-hover': 'rgba(26, 26, 26, 0.055)',
  '--dsw-alias-label-caption': '#808080',
  '--dsw-alias-label-dimmed': '#AFAFAF',
  '--dsw-alias-label-primary-bluish': '#1A1A1A',
  '--dsw-alias-label-primary-dimmed': '#555555',
  '--dsw-alias-label-primary-foreground': '#FFFFFF',
  '--dsw-alias-label-primary-inverted': '#FFFFFF',
  '--dsw-alias-label-primary': '#1A1A1A',
  '--dsw-alias-label-secondary': '#5F5F5F',
  '--dsw-alias-label-tertiary': '#808080',
  '--dsw-alias-markdown-citation': '#ECECEC',
  '--dsw-alias-markdown-code-block-banner': '#ECECEC',
  '--dsw-alias-markdown-code-block': '#F1F1F1',
  '--dsw-alias-markdown-code-segment-selected': '#FFFFFF',
  '--dsw-alias-markdown-code-segment-unselected': '#E2E2E2',
  '--dsw-alias-markdown-inline-code': '#ECECEC',
  '--dsw-alias-markdown-placeholder': '#EFEFEF',
  '--dsw-alias-markdown-tag': '#ECECEC',
  '--dsw-alias-scrollbar-bg-l1': '#C9C9C9',
  '--dsw-alias-scrollbar-bg-l2': '#C9C9C9',
  '--dsw-alias-scrollbar-hover-l1': '#808080',
  '--dsw-alias-scrollbar-hover-l2': '#808080',
  '--dsw-specific-bubble-highlight': '#E2E2E2',
  '--dsw-specific-bubble': '#EFEFEF',
  '--dsw-specific-input-major': '#FFFFFF',
  '--dsw-specific-login-input': '#F7F7F7',
  '--dsw-specific-menu': '#FFFFFF',
  '--dsw-specific-selector': '#ECECEC',
  '--dsw-specific-sidebar-fill': '#EFEFEF',
  '--dsw-specific-sidebar-nav-item-active-accent': '#DCDCDC',
  '--dsw-specific-sidebar-nav-item-active': '#E2E2E2',
  '--dsw-specific-sidebar-nav-item-hover': '#E7E7E7',
  '--dsw-specific-tip': '#ECECEC',
}

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
        const previousSkin = document.body.dataset.dshSkin;
        document.body.dataset.dshSkin = SKIN_ID;
        let tag = document.querySelector('style[data-plugin-css=' + JSON.stringify(STYLE_ID) + ']');
        const ownsTag = tag === null;
        if (ownsTag) {
          tag = document.createElement('style');
          tag.dataset.plugin = PACKAGE_ID;
          tag.dataset.pluginCss = STYLE_ID;
          tag.textContent = CSS;
          document.head.appendChild(tag);
        }
        return () => {
          if (ownsTag) tag.remove();
          if (previousSkin === undefined) delete document.body.dataset.dshSkin;
          else document.body.dataset.dshSkin = previousSkin;
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
