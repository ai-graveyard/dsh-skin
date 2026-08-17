import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const PACKAGE_ID = 'dsh-skin-night-signal'
const SKIN_ID = 'night-signal'
const STYLE_ID = 'dsh-skin-night-signal/skin.css'
const directory = dirname(fileURLToPath(import.meta.url))
const css = await readFile(join(directory, 'skin.css'), 'utf8')

const tokenValues = {
  '--dsw-alias-bg-base': '#0C0F14',
  '--dsw-alias-bg-layer-1': '#141922',
  '--dsw-alias-bg-layer-2': '#10151C',
  '--dsw-alias-bg-layer-3': '#171E28',
  '--dsw-alias-bg-module-platform': '#10151C',
  '--dsw-alias-bg-multi-select': '#171E28',
  '--dsw-alias-bg-overlay': '#171E28',
  '--dsw-alias-bg-skeleton': 'rgba(232, 237, 242, 0.08)',
  '--dsw-alias-border-inverted2': '#293240',
  '--dsw-alias-border-inverted': '#293240',
  '--dsw-alias-border-l1': '#222A36',
  '--dsw-alias-border-l2-darkmode-thin': '#293240',
  '--dsw-alias-border-l2': '#293240',
  '--dsw-alias-border-l3': '#3A4657',
  '--dsw-alias-border-l4': '#8B96A5',
  '--dsw-alias-brand-primary-invert': '#0C0F14',
  '--dsw-alias-brand-primary-new-colorprimary-new-color': '#5EE1B3',
  '--dsw-alias-brand-primary': '#5EE1B3',
  '--dsw-alias-brand-text': '#5EE1B3',
  '--dsw-alias-button-contrast-fill': '#E8EDF2',
  '--dsw-alias-button-elevated-fill': '#171E28',
  '--dsw-alias-button-floating-fill': '#171E28',
  '--dsw-alias-button-floating-hover': '#222A36',
  '--dsw-alias-button-primary-dimmed': '#293240',
  '--dsw-alias-button-primary-fill': '#5EE1B3',
  '--dsw-alias-button-primary-hover': '#7BE9C4',
  '--dsw-alias-interactive-bg-active': '#222A36',
  '--dsw-alias-interactive-bg-hover-accent': '#1B3B34',
  '--dsw-alias-interactive-bg-hover-solid': '#171E28',
  '--dsw-alias-interactive-bg-hover': 'rgba(94, 225, 179, 0.08)',
  '--dsw-alias-label-caption': '#8B96A5',
  '--dsw-alias-label-dimmed': '#657182',
  '--dsw-alias-label-primary-bluish': '#E8EDF2',
  '--dsw-alias-label-primary-dimmed': '#AEB8C4',
  '--dsw-alias-label-primary-foreground': '#0C0F14',
  '--dsw-alias-label-primary-inverted': '#0C0F14',
  '--dsw-alias-label-primary': '#E8EDF2',
  '--dsw-alias-label-secondary': '#AEB8C4',
  '--dsw-alias-label-tertiary': '#8B96A5',
  '--dsw-alias-markdown-citation': '#171E28',
  '--dsw-alias-markdown-code-block-banner': '#10151C',
  '--dsw-alias-markdown-code-block': '#090C10',
  '--dsw-alias-markdown-code-segment-selected': '#222A36',
  '--dsw-alias-markdown-code-segment-unselected': '#10151C',
  '--dsw-alias-markdown-inline-code': '#171E28',
  '--dsw-alias-markdown-placeholder': '#10151C',
  '--dsw-alias-markdown-tag': '#171E28',
  '--dsw-alias-scrollbar-bg-l1': '#293240',
  '--dsw-alias-scrollbar-bg-l2': '#293240',
  '--dsw-alias-scrollbar-hover-l1': '#5EE1B3',
  '--dsw-alias-scrollbar-hover-l2': '#5EE1B3',
  '--dsw-specific-bubble-highlight': '#1B3B34',
  '--dsw-specific-bubble': '#141922',
  '--dsw-specific-input-major': '#141922',
  '--dsw-specific-login-input': '#10151C',
  '--dsw-specific-menu': '#141922',
  '--dsw-specific-selector': '#171E28',
  '--dsw-specific-sidebar-fill': '#10151C',
  '--dsw-specific-sidebar-nav-item-active-accent': '#5EE1B3',
  '--dsw-specific-sidebar-nav-item-active': '#1B3B34',
  '--dsw-specific-sidebar-nav-item-hover': '#171E28',
  '--dsw-specific-tip': '#171E28',
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
    console.error('client.js is stale; run `pnpm run build:skins`.')
    process.exitCode = 1
  }
} else {
  await writeFile(target, client)
  console.log(`Built ${target}`)
}
