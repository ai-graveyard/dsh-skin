window.__ModuleLoader__.load({
  id: "dsh-skin-swiss-grid",
  factory: () => {
    var module = { exports: {} };
    const PACKAGE_ID = "dsh-skin-swiss-grid";
    const SKIN_ID = "swiss-grid";
    const STYLE_ID = "dsh-skin-swiss-grid/skin.css";
    const CSS = "/* Swiss Grid · 瑞士网格. Fixed palette; all rules scoped to the active plugin. */\nbody[data-dsh-skin=\"swiss-grid\"] {\n  --bg: #FFFFFF;\n  --fg: #000000;\n  --accent: #FF0000;\n  --gold: #FFD700;\n  --blue: #0000FF;\n  --hair: #000000;\n  --sans: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"PingFang SC\",\"Microsoft YaHei\",sans-serif;\n  --mono: ui-monospace,\"SF Mono\",Menlo,Consolas,monospace;\n  --skin-bg: #FFFFFF; --skin-ink: #000000; --skin-accent: #FF0000;\n  --skin-surface: #FFFFFF; --skin-layer: #F4F4F4; --skin-line: #B8B8B8;\n  --skin-muted: #595959; --skin-action: #CC0000; --skin-on-action: #FFFFFF;\n  --skin-focus: #CC0000;\n  --skin-radius: 0px; --skin-card-radius: 0px; --skin-shadow: none;\n  --dsw-font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif;\n  color-scheme: light;\n  background: var(--skin-bg); color: var(--skin-ink); font-family: var(--dsw-font-family);\n}\nbody[data-dsh-skin=\"swiss-grid\"] :where(button, input, textarea, select, [role=\"button\"], [role=\"tab\"]) { font-family: inherit; border-radius: var(--skin-radius); }\nbody[data-dsh-skin=\"swiss-grid\"] :where(code, pre, kbd, samp) { font-family: ui-monospace, \"SF Mono\", Menlo, Consolas, monospace; }\nbody[data-dsh-skin=\"swiss-grid\"] :where(button, a, input, textarea, select, [role=\"button\"], [role=\"tab\"], [contenteditable=\"true\"]):focus-visible { outline: 2px solid var(--skin-focus) !important; outline-offset: 3px; }\nbody[data-dsh-skin=\"swiss-grid\"] :where(button[type=\"submit\"]:not(:disabled)) { background: var(--skin-action) !important; color: var(--skin-on-action) !important; }\nbody[data-dsh-skin=\"swiss-grid\"] :where([class*=\"_sidebarCol\"]) { background: var(--skin-layer) !important; border-right: 1px solid var(--skin-line); }\nbody[data-dsh-skin=\"swiss-grid\"] :where([class*=\"_sidebarCol\"] button[class*=\"_brand\"]) { min-height: 48px; border-bottom: 1px solid var(--skin-line); }\nbody[data-dsh-skin=\"swiss-grid\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]) { min-height: 40px; border: 1px solid var(--skin-line) !important; border-radius: var(--skin-radius) !important; background: var(--skin-surface) !important; color: var(--skin-ink) !important; font-weight: 600; }\nbody[data-dsh-skin=\"swiss-grid\"] :where([class*=\"_sidebarCol\"] [class*=\"_sectionHeader\"]) { color: var(--skin-muted) !important; font-size: 11px; letter-spacing: .04em; }\nbody[data-dsh-skin=\"swiss-grid\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"][aria-selected=\"true\"]) { box-shadow: inset 3px 0 var(--skin-action); color: var(--skin-ink) !important; }\nbody[data-dsh-skin=\"swiss-grid\"] :where([class*=\"_heroGlow\"]) { display: none !important; }\nbody[data-dsh-skin=\"swiss-grid\"] :where([class*=\"_composerStack\"] [class*=\"_root\"][class*=\"_hero\"]) { border: 0 !important; background: transparent !important; box-shadow: none !important; }\nbody[data-dsh-skin=\"swiss-grid\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]) { border: 1px solid var(--skin-line) !important; border-radius: var(--skin-card-radius) !important; background: var(--skin-surface) !important; box-shadow: var(--skin-shadow) !important; }\nbody[data-dsh-skin=\"swiss-grid\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]):focus-within { border-color: var(--skin-action) !important; box-shadow: 0 0 0 1px var(--skin-action), var(--skin-shadow) !important; }\nbody[data-dsh-skin=\"swiss-grid\"] :where([class*=\"_composerStack\"] [contenteditable=\"true\"], [class*=\"_composerStack\"] textarea) { font-family: var(--dsw-font-family); caret-color: var(--skin-focus); }\nbody[data-dsh-skin=\"swiss-grid\"] :where([class*=\"_composerStack\"] button[class*=\"_add\"]) { background: var(--skin-layer) !important; border: 1px solid var(--skin-line) !important; }\nbody[data-dsh-skin=\"swiss-grid\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]) { width: 38px; height: 38px; border: 1px solid var(--skin-action) !important; border-radius: var(--skin-radius) !important; background: var(--skin-action) !important; color: var(--skin-on-action) !important; }\nbody[data-dsh-skin=\"swiss-grid\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:disabled) { background: var(--skin-layer) !important; border-color: var(--skin-line) !important; color: var(--skin-muted) !important; opacity: .65; box-shadow: none !important; }\nbody[data-dsh-skin=\"swiss-grid\"] :where([role=\"dialog\"]) { border: 1px solid var(--skin-line); border-radius: var(--skin-card-radius) !important; background: var(--skin-surface) !important; box-shadow: var(--skin-shadow); }\nbody[data-dsh-skin=\"swiss-grid\"] :where([role=\"menu\"], [role=\"listbox\"]) { border: 1px solid var(--skin-line); background: var(--skin-surface); border-radius: var(--skin-radius); }\nbody[data-dsh-skin=\"swiss-grid\"] :where(pre) { border: 1px solid var(--skin-line); border-radius: var(--skin-radius); background: var(--skin-surface) !important; }\nbody[data-dsh-skin=\"swiss-grid\"] :where(blockquote) { border-left: 2px solid var(--skin-action); }\nbody[data-dsh-skin=\"swiss-grid\"] ::selection { background: var(--skin-action); color: var(--skin-on-action); }\n@media (hover: hover) {\n  body[data-dsh-skin=\"swiss-grid\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]:hover) { background: var(--skin-bg) !important; border-color: var(--skin-action) !important; }\n  body[data-dsh-skin=\"swiss-grid\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:not(:disabled):hover) { filter: brightness(.92); }\n}\n\n/* Signature details: swiss */\nbody[data-dsh-skin=\"swiss-grid\"] [class*=\"_sidebarCol\"] button[class*=\"_newSession\"] { background: #000000 !important; color: #FFFFFF !important; border-color: #000000 !important; }\nbody[data-dsh-skin=\"swiss-grid\"] :where(button, [role=\"dialog\"], [role=\"menu\"], [role=\"tab\"], pre) { border-radius: 0 !important; }\nbody[data-dsh-skin=\"swiss-grid\"] [class*=\"_composerStack\"] [class$=\"_card\"] { border-top: 3px solid #000000 !important; }\nbody[data-dsh-skin=\"swiss-grid\"] :where(h1,h2,h3) { font-weight: 700; letter-spacing: -.035em; }\nbody[data-dsh-skin=\"swiss-grid\"] [class*=\"_sectionHeader\"] { font-family: var(--mono); text-transform: uppercase; }\n\n@media (prefers-reduced-motion: reduce) {\n  body[data-dsh-skin=\"swiss-grid\"] *, body[data-dsh-skin=\"swiss-grid\"] *::before, body[data-dsh-skin=\"swiss-grid\"] *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }\n}\n\n/* Preserve switch affordance and align selection geometry with the skin. */\nbody[data-dsh-skin=\"swiss-grid\"] :where(button[role=\"switch\"]) { border-radius: 999px !important; }\nbody[data-dsh-skin=\"swiss-grid\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"]) { border-radius: var(--skin-radius); }\n\n/* Focus must remain visible above every signature surface rule. */\nbody[data-dsh-skin=\"swiss-grid\"] [class*=\"_composerStack\"] :is([class$=\"_card\"], [class*=\"_card \"]):focus-within {\n  border-color: var(--skin-focus) !important;\n  box-shadow: 0 0 0 1px var(--skin-focus), var(--skin-shadow) !important;\n}\n";
    const TOKEN_OVERRIDES = Object.freeze({
  "--shiki-token-constant": {
    "light": "#1969AA",
    "dark": "#1969AA"
  },
  "--shiki-token-string": {
    "light": "#237B36",
    "dark": "#237B36"
  },
  "--shiki-token-comment": {
    "light": "#636B73",
    "dark": "#636B73"
  },
  "--shiki-token-keyword": {
    "light": "#B42658",
    "dark": "#B42658"
  },
  "--shiki-token-parameter": {
    "light": "#994008",
    "dark": "#994008"
  },
  "--shiki-token-function": {
    "light": "#6741D9",
    "dark": "#6741D9"
  },
  "--shiki-token-string-expression": {
    "light": "#237B36",
    "dark": "#237B36"
  },
  "--shiki-token-punctuation": {
    "light": "#495057",
    "dark": "#495057"
  },
  "--shiki-token-link": {
    "light": "#1971C2",
    "dark": "#1971C2"
  },
  "--dsw-alias-link": {
    "light": "#CC0000",
    "dark": "#CC0000"
  },
  "--dsw-alias-state-business-primary": {
    "light": "#CC0000",
    "dark": "#CC0000"
  },
  "--dsw-alias-state-business-tertiary": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-menu-icon": {
    "light": "#595959",
    "dark": "#595959"
  },
  "--dsw-alias-menu-group-header-fill": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-settings-card-fill": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-settings-card-stroke": {
    "light": "#B8B8B8",
    "dark": "#B8B8B8"
  },
  "--dsw-alias-bg-base": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-bg-layer-1": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-bg-layer-2": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-bg-layer-3": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-bg-module-platform": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-bg-multi-select": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-bg-overlay": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-bg-skeleton": {
    "light": "#B8B8B8",
    "dark": "#B8B8B8"
  },
  "--dsw-alias-border-inverted2": {
    "light": "#B8B8B8",
    "dark": "#B8B8B8"
  },
  "--dsw-alias-border-inverted": {
    "light": "#B8B8B8",
    "dark": "#B8B8B8"
  },
  "--dsw-alias-border-l1": {
    "light": "#B8B8B8",
    "dark": "#B8B8B8"
  },
  "--dsw-alias-border-l2-darkmode-thin": {
    "light": "#B8B8B8",
    "dark": "#B8B8B8"
  },
  "--dsw-alias-border-l2": {
    "light": "#B8B8B8",
    "dark": "#B8B8B8"
  },
  "--dsw-alias-border-l3": {
    "light": "#B8B8B8",
    "dark": "#B8B8B8"
  },
  "--dsw-alias-border-l4": {
    "light": "#B8B8B8",
    "dark": "#B8B8B8"
  },
  "--dsw-alias-brand-primary-invert": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-brand-primary-new-colorprimary-new-color": {
    "light": "#CC0000",
    "dark": "#CC0000"
  },
  "--dsw-alias-brand-primary": {
    "light": "#CC0000",
    "dark": "#CC0000"
  },
  "--dsw-alias-brand-text": {
    "light": "#CC0000",
    "dark": "#CC0000"
  },
  "--dsw-alias-button-contrast-fill": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-button-elevated-fill": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-button-floating-fill": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-button-floating-hover": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-button-ghost-active-border": {
    "light": "#B8B8B8",
    "dark": "#B8B8B8"
  },
  "--dsw-alias-button-ghost-active-fill": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-button-ghost-active-hover": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-button-info-fill": {
    "light": "#CC0000",
    "dark": "#CC0000"
  },
  "--dsw-alias-button-info-hover": {
    "light": "#CC0000",
    "dark": "#CC0000"
  },
  "--dsw-alias-button-primary-dimmed": {
    "light": "#B8B8B8",
    "dark": "#B8B8B8"
  },
  "--dsw-alias-button-primary-fill": {
    "light": "#CC0000",
    "dark": "#CC0000"
  },
  "--dsw-alias-button-primary-hover": {
    "light": "#CC0000",
    "dark": "#CC0000"
  },
  "--dsw-alias-interactive-bg-active": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-interactive-bg-hover-accent": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-interactive-bg-hover-solid": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-interactive-bg-hover": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-label-caption": {
    "light": "#595959",
    "dark": "#595959"
  },
  "--dsw-alias-label-dimmed": {
    "light": "#595959",
    "dark": "#595959"
  },
  "--dsw-alias-label-primary-bluish": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-label-primary-dimmed": {
    "light": "#595959",
    "dark": "#595959"
  },
  "--dsw-alias-label-primary-foreground": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-label-primary-inverted": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-label-primary": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-label-secondary": {
    "light": "#595959",
    "dark": "#595959"
  },
  "--dsw-alias-label-tertiary": {
    "light": "#595959",
    "dark": "#595959"
  },
  "--dsw-alias-markdown-citation": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-markdown-code-block-banner": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-markdown-code-block": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-markdown-code-segment-selected": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-markdown-code-segment-unselected": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-markdown-inline-code": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-markdown-placeholder": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-markdown-tag": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-alias-scrollbar-bg-l1": {
    "light": "#B8B8B8",
    "dark": "#B8B8B8"
  },
  "--dsw-alias-scrollbar-bg-l2": {
    "light": "#B8B8B8",
    "dark": "#B8B8B8"
  },
  "--dsw-alias-scrollbar-hover-l1": {
    "light": "#595959",
    "dark": "#595959"
  },
  "--dsw-alias-scrollbar-hover-l2": {
    "light": "#595959",
    "dark": "#595959"
  },
  "--dsw-specific-bubble-highlight": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-specific-bubble": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-specific-input-major": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-specific-login-input": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-specific-menu": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-specific-selector": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-specific-sidebar-fill": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-specific-sidebar-nav-item-active-accent": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-specific-sidebar-nav-item-active": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-specific-sidebar-nav-item-hover": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  },
  "--dsw-specific-tip": {
    "light": "#F4F4F4",
    "dark": "#F4F4F4"
  }
});
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
