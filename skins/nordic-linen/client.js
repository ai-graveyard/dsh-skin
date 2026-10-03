window.__ModuleLoader__.load({
  id: "dsh-skin-nordic-linen",
  factory: () => {
    var module = { exports: {} };
    const PACKAGE_ID = "dsh-skin-nordic-linen";
    const SKIN_ID = "nordic-linen";
    const STYLE_ID = "dsh-skin-nordic-linen/skin.css";
    const CSS = "/* Nordic Linen · 北欧亚麻. Fixed palette; all rules scoped to the active plugin. */\nbody[data-dsh-skin=\"nordic-linen\"] {\n  --cream: #f6f3ed;\n  --card: #ffffff;\n  --linen: #e8dcc4;\n  --wood: #d4c4b7;\n  --wood-deep: #b3987d;\n  --sage: #8b9a7c;\n  --sage-soft: #a9b5a3;\n  --ink: #3e3a33;\n  --ink-soft: #7d766a;\n  --glow: rgba(255,222,160,.55);\n  --sans: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"PingFang SC\",\"Microsoft YaHei\",sans-serif;\n  --serif: Georgia,\"Palatino Linotype\",\"Songti SC\",serif;\n  --r: 28px;\n  --skin-bg: #F6F3ED; --skin-ink: #3E3A33; --skin-accent: #8B9A7C;\n  --skin-surface: #FFFFFF; --skin-layer: #E8DCC4; --skin-line: #C9BBA4;\n  --skin-muted: #655E52; --skin-action: #506345; --skin-on-action: #FFFFFF;\n  --skin-focus: #506345;\n  --skin-radius: 12px; --skin-card-radius: 20px; --skin-shadow: 0 8px 24px #5c493d0d;\n  --dsw-font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif;\n  color-scheme: light;\n  background: var(--skin-bg); color: var(--skin-ink); font-family: var(--dsw-font-family);\n}\nbody[data-dsh-skin=\"nordic-linen\"] :where(button, input, textarea, select, [role=\"button\"], [role=\"tab\"]) { font-family: inherit; border-radius: var(--skin-radius); }\nbody[data-dsh-skin=\"nordic-linen\"] :where(code, pre, kbd, samp) { font-family: ui-monospace, \"SF Mono\", Menlo, Consolas, monospace; }\nbody[data-dsh-skin=\"nordic-linen\"] :where(button, a, input, textarea, select, [role=\"button\"], [role=\"tab\"], [contenteditable=\"true\"]):focus-visible { outline: 2px solid var(--skin-focus) !important; outline-offset: 3px; }\nbody[data-dsh-skin=\"nordic-linen\"] :where(button[type=\"submit\"]:not(:disabled)) { background: var(--skin-action) !important; color: var(--skin-on-action) !important; }\nbody[data-dsh-skin=\"nordic-linen\"] :where([class*=\"_sidebarCol\"]) { background: var(--skin-layer) !important; border-right: 1px solid var(--skin-line); }\nbody[data-dsh-skin=\"nordic-linen\"] :where([class*=\"_sidebarCol\"] button[class*=\"_brand\"]) { min-height: 48px; border-bottom: 1px solid var(--skin-line); }\nbody[data-dsh-skin=\"nordic-linen\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]) { min-height: 40px; border: 1px solid var(--skin-line) !important; border-radius: var(--skin-radius) !important; background: var(--skin-surface) !important; color: var(--skin-ink) !important; font-weight: 600; }\nbody[data-dsh-skin=\"nordic-linen\"] :where([class*=\"_sidebarCol\"] [class*=\"_sectionHeader\"]) { color: var(--skin-muted) !important; font-size: 11px; letter-spacing: .04em; }\nbody[data-dsh-skin=\"nordic-linen\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"][aria-selected=\"true\"]) { box-shadow: inset 3px 0 var(--skin-action); color: var(--skin-ink) !important; }\nbody[data-dsh-skin=\"nordic-linen\"] :where([class*=\"_heroGlow\"]) { display: none !important; }\nbody[data-dsh-skin=\"nordic-linen\"] :where([class*=\"_composerStack\"] [class*=\"_root\"][class*=\"_hero\"]) { border: 0 !important; background: transparent !important; box-shadow: none !important; }\nbody[data-dsh-skin=\"nordic-linen\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]) { border: 1px solid var(--skin-line) !important; border-radius: var(--skin-card-radius) !important; background: var(--skin-surface) !important; box-shadow: var(--skin-shadow) !important; }\nbody[data-dsh-skin=\"nordic-linen\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]):focus-within { border-color: var(--skin-action) !important; box-shadow: 0 0 0 1px var(--skin-action), var(--skin-shadow) !important; }\nbody[data-dsh-skin=\"nordic-linen\"] :where([class*=\"_composerStack\"] [contenteditable=\"true\"], [class*=\"_composerStack\"] textarea) { font-family: var(--dsw-font-family); caret-color: var(--skin-focus); }\nbody[data-dsh-skin=\"nordic-linen\"] :where([class*=\"_composerStack\"] button[class*=\"_add\"]) { background: var(--skin-layer) !important; border: 1px solid var(--skin-line) !important; }\nbody[data-dsh-skin=\"nordic-linen\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]) { width: 38px; height: 38px; border: 1px solid var(--skin-action) !important; border-radius: var(--skin-radius) !important; background: var(--skin-action) !important; color: var(--skin-on-action) !important; }\nbody[data-dsh-skin=\"nordic-linen\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:disabled) { background: var(--skin-layer) !important; border-color: var(--skin-line) !important; color: var(--skin-muted) !important; opacity: .65; box-shadow: none !important; }\nbody[data-dsh-skin=\"nordic-linen\"] :where([role=\"dialog\"]) { border: 1px solid var(--skin-line); border-radius: var(--skin-card-radius) !important; background: var(--skin-surface) !important; box-shadow: var(--skin-shadow); }\nbody[data-dsh-skin=\"nordic-linen\"] :where([role=\"menu\"], [role=\"listbox\"]) { border: 1px solid var(--skin-line); background: var(--skin-surface); border-radius: var(--skin-radius); }\nbody[data-dsh-skin=\"nordic-linen\"] :where(pre) { border: 1px solid var(--skin-line); border-radius: var(--skin-radius); background: var(--skin-surface) !important; }\nbody[data-dsh-skin=\"nordic-linen\"] :where(blockquote) { border-left: 2px solid var(--skin-action); }\nbody[data-dsh-skin=\"nordic-linen\"] ::selection { background: var(--skin-action); color: var(--skin-on-action); }\n@media (hover: hover) {\n  body[data-dsh-skin=\"nordic-linen\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]:hover) { background: var(--skin-bg) !important; border-color: var(--skin-action) !important; }\n  body[data-dsh-skin=\"nordic-linen\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:not(:disabled):hover) { filter: brightness(.92); }\n}\n\n/* Signature details: scandinavian */\nbody[data-dsh-skin=\"nordic-linen\"] [class*=\"_sidebarCol\"] button[class*=\"_newSession\"] { background: #506345 !important; color: #FFFFFF !important; border-color: #506345 !important; }\nbody[data-dsh-skin=\"nordic-linen\"] :where(h1, h2) { font-family: var(--serif); font-weight: 400; }\nbody[data-dsh-skin=\"nordic-linen\"] [class*=\"_composerStack\"] [class$=\"_card\"] { border-radius: 20px 20px 16px 20px !important; }\n\n@media (prefers-reduced-motion: reduce) {\n  body[data-dsh-skin=\"nordic-linen\"] *, body[data-dsh-skin=\"nordic-linen\"] *::before, body[data-dsh-skin=\"nordic-linen\"] *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }\n}\n\n/* Preserve switch affordance and align selection geometry with the skin. */\nbody[data-dsh-skin=\"nordic-linen\"] :where(button[role=\"switch\"]) { border-radius: 999px !important; }\nbody[data-dsh-skin=\"nordic-linen\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"]) { border-radius: var(--skin-radius); }\n\n/* Focus must remain visible above every signature surface rule. */\nbody[data-dsh-skin=\"nordic-linen\"] [class*=\"_composerStack\"] :is([class$=\"_card\"], [class*=\"_card \"]):focus-within {\n  border-color: var(--skin-focus) !important;\n  box-shadow: 0 0 0 1px var(--skin-focus), var(--skin-shadow) !important;\n}\nbody[data-dsh-skin=\"nordic-linen\"] [class*=\"_composerStack\"] [class*=\"_titleGroup\"] > span:first-child { font-family: var(--serif); font-weight: 500; letter-spacing: .01em; }\n";
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
    "light": "#506345",
    "dark": "#506345"
  },
  "--dsw-alias-state-business-primary": {
    "light": "#506345",
    "dark": "#506345"
  },
  "--dsw-alias-state-business-tertiary": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-menu-icon": {
    "light": "#655E52",
    "dark": "#655E52"
  },
  "--dsw-alias-menu-group-header-fill": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-settings-card-fill": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-settings-card-stroke": {
    "light": "#C9BBA4",
    "dark": "#C9BBA4"
  },
  "--dsw-alias-bg-base": {
    "light": "#F6F3ED",
    "dark": "#F6F3ED"
  },
  "--dsw-alias-bg-layer-1": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-bg-layer-2": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-bg-layer-3": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-bg-module-platform": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-bg-multi-select": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-bg-overlay": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-bg-skeleton": {
    "light": "#C9BBA4",
    "dark": "#C9BBA4"
  },
  "--dsw-alias-border-inverted2": {
    "light": "#C9BBA4",
    "dark": "#C9BBA4"
  },
  "--dsw-alias-border-inverted": {
    "light": "#C9BBA4",
    "dark": "#C9BBA4"
  },
  "--dsw-alias-border-l1": {
    "light": "#C9BBA4",
    "dark": "#C9BBA4"
  },
  "--dsw-alias-border-l2-darkmode-thin": {
    "light": "#C9BBA4",
    "dark": "#C9BBA4"
  },
  "--dsw-alias-border-l2": {
    "light": "#C9BBA4",
    "dark": "#C9BBA4"
  },
  "--dsw-alias-border-l3": {
    "light": "#C9BBA4",
    "dark": "#C9BBA4"
  },
  "--dsw-alias-border-l4": {
    "light": "#C9BBA4",
    "dark": "#C9BBA4"
  },
  "--dsw-alias-brand-primary-invert": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-brand-primary-new-colorprimary-new-color": {
    "light": "#506345",
    "dark": "#506345"
  },
  "--dsw-alias-brand-primary": {
    "light": "#506345",
    "dark": "#506345"
  },
  "--dsw-alias-brand-text": {
    "light": "#506345",
    "dark": "#506345"
  },
  "--dsw-alias-button-contrast-fill": {
    "light": "#3E3A33",
    "dark": "#3E3A33"
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
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-button-ghost-active-border": {
    "light": "#C9BBA4",
    "dark": "#C9BBA4"
  },
  "--dsw-alias-button-ghost-active-fill": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-button-ghost-active-hover": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-button-info-fill": {
    "light": "#506345",
    "dark": "#506345"
  },
  "--dsw-alias-button-info-hover": {
    "light": "#506345",
    "dark": "#506345"
  },
  "--dsw-alias-button-primary-dimmed": {
    "light": "#C9BBA4",
    "dark": "#C9BBA4"
  },
  "--dsw-alias-button-primary-fill": {
    "light": "#506345",
    "dark": "#506345"
  },
  "--dsw-alias-button-primary-hover": {
    "light": "#506345",
    "dark": "#506345"
  },
  "--dsw-alias-interactive-bg-active": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-interactive-bg-hover-accent": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-interactive-bg-hover-solid": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-interactive-bg-hover": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-label-caption": {
    "light": "#655E52",
    "dark": "#655E52"
  },
  "--dsw-alias-label-dimmed": {
    "light": "#655E52",
    "dark": "#655E52"
  },
  "--dsw-alias-label-primary-bluish": {
    "light": "#3E3A33",
    "dark": "#3E3A33"
  },
  "--dsw-alias-label-primary-dimmed": {
    "light": "#655E52",
    "dark": "#655E52"
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
    "light": "#3E3A33",
    "dark": "#3E3A33"
  },
  "--dsw-alias-label-secondary": {
    "light": "#655E52",
    "dark": "#655E52"
  },
  "--dsw-alias-label-tertiary": {
    "light": "#655E52",
    "dark": "#655E52"
  },
  "--dsw-alias-markdown-citation": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-markdown-code-block-banner": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-markdown-code-block": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-markdown-code-segment-selected": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-markdown-code-segment-unselected": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-markdown-inline-code": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-markdown-placeholder": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-markdown-tag": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-alias-scrollbar-bg-l1": {
    "light": "#C9BBA4",
    "dark": "#C9BBA4"
  },
  "--dsw-alias-scrollbar-bg-l2": {
    "light": "#C9BBA4",
    "dark": "#C9BBA4"
  },
  "--dsw-alias-scrollbar-hover-l1": {
    "light": "#655E52",
    "dark": "#655E52"
  },
  "--dsw-alias-scrollbar-hover-l2": {
    "light": "#655E52",
    "dark": "#655E52"
  },
  "--dsw-specific-bubble-highlight": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-specific-bubble": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-specific-input-major": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-specific-login-input": {
    "light": "#F6F3ED",
    "dark": "#F6F3ED"
  },
  "--dsw-specific-menu": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-specific-selector": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-specific-sidebar-fill": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-specific-sidebar-nav-item-active-accent": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-specific-sidebar-nav-item-active": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-specific-sidebar-nav-item-hover": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
  },
  "--dsw-specific-tip": {
    "light": "#E8DCC4",
    "dark": "#E8DCC4"
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
