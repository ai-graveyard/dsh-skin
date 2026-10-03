window.__ModuleLoader__.load({
  id: "dsh-skin-material-orchid",
  factory: () => {
    var module = { exports: {} };
    const PACKAGE_ID = "dsh-skin-material-orchid";
    const SKIN_ID = "material-orchid";
    const STYLE_ID = "dsh-skin-material-orchid/skin.css";
    const CSS = "/* Material Orchid · 兰序. Fixed palette; all rules scoped to the active plugin. */\nbody[data-dsh-skin=\"material-orchid\"] {\n  --primary: #6750A4;\n  --on-primary: #FFFFFF;\n  --primary-container: #EADDFF;\n  --on-primary-container: #21005D;\n  --secondary-container: #E8DEF8;\n  --on-secondary-container: #1D192B;\n  --tertiary-container: #FFD8E4;\n  --on-tertiary-container: #31111D;\n  --surface: #FEF7FF;\n  --surface-dim: #F8F1FA;\n  --surface-c-low: #F7F2FA;\n  --surface-c: #F3EDF7;\n  --surface-c-high: #ECE6F0;\n  --on-surface: #1C1B1F;\n  --on-surface-var: #49454F;\n  --outline: #79747E;\n  --outline-var: #CAC4D0;\n  --blue: #4285F4;\n  --green: #34A853;\n  --yellow: #FBBC05;\n  --red: #EA4335;\n  --grey: #5F6368;\n  --e1: 0 1px 2px rgba(0,0,0,.3), 0 1px 3px 1px rgba(0,0,0,.15);\n  --e2: 0 1px 2px rgba(0,0,0,.3), 0 2px 6px 2px rgba(0,0,0,.15);\n  --e3: 0 1px 3px rgba(0,0,0,.3), 0 4px 8px 3px rgba(0,0,0,.15);\n  --e4: 0 2px 3px rgba(0,0,0,.3), 0 6px 10px 4px rgba(0,0,0,.15);\n  --sans: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"PingFang SC\", \"Microsoft YaHei\", sans-serif;\n  --skin-bg: #FEF7FF; --skin-ink: #1C1B1F; --skin-accent: #6750A4;\n  --skin-surface: #FFFBFE; --skin-layer: #F3EDF7; --skin-line: #CAC4D0;\n  --skin-muted: #49454F; --skin-action: #6750A4; --skin-on-action: #FFFFFF;\n  --skin-focus: #6750A4;\n  --skin-radius: 16px; --skin-card-radius: 28px; --skin-shadow: 0 1px 2px #00000024, 0 2px 6px 2px #0000000d;\n  --dsw-font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif;\n  color-scheme: light;\n  background: var(--skin-bg); color: var(--skin-ink); font-family: var(--dsw-font-family);\n}\nbody[data-dsh-skin=\"material-orchid\"] :where(button, input, textarea, select, [role=\"button\"], [role=\"tab\"]) { font-family: inherit; border-radius: var(--skin-radius); }\nbody[data-dsh-skin=\"material-orchid\"] :where(code, pre, kbd, samp) { font-family: ui-monospace, \"SF Mono\", Menlo, Consolas, monospace; }\nbody[data-dsh-skin=\"material-orchid\"] :where(button, a, input, textarea, select, [role=\"button\"], [role=\"tab\"], [contenteditable=\"true\"]):focus-visible { outline: 2px solid var(--skin-focus) !important; outline-offset: 3px; }\nbody[data-dsh-skin=\"material-orchid\"] :where(button[type=\"submit\"]:not(:disabled)) { background: var(--skin-action) !important; color: var(--skin-on-action) !important; }\nbody[data-dsh-skin=\"material-orchid\"] :where([class*=\"_sidebarCol\"]) { background: var(--skin-layer) !important; border-right: 1px solid var(--skin-line); }\nbody[data-dsh-skin=\"material-orchid\"] :where([class*=\"_sidebarCol\"] button[class*=\"_brand\"]) { min-height: 48px; border-bottom: 1px solid var(--skin-line); }\nbody[data-dsh-skin=\"material-orchid\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]) { min-height: 40px; border: 1px solid var(--skin-line) !important; border-radius: var(--skin-radius) !important; background: var(--skin-surface) !important; color: var(--skin-ink) !important; font-weight: 600; }\nbody[data-dsh-skin=\"material-orchid\"] :where([class*=\"_sidebarCol\"] [class*=\"_sectionHeader\"]) { color: var(--skin-muted) !important; font-size: 11px; letter-spacing: .04em; }\nbody[data-dsh-skin=\"material-orchid\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"][aria-selected=\"true\"]) { box-shadow: inset 3px 0 var(--skin-action); color: var(--skin-ink) !important; }\nbody[data-dsh-skin=\"material-orchid\"] :where([class*=\"_heroGlow\"]) { display: none !important; }\nbody[data-dsh-skin=\"material-orchid\"] :where([class*=\"_composerStack\"] [class*=\"_root\"][class*=\"_hero\"]) { border: 0 !important; background: transparent !important; box-shadow: none !important; }\nbody[data-dsh-skin=\"material-orchid\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]) { border: 1px solid var(--skin-line) !important; border-radius: var(--skin-card-radius) !important; background: var(--skin-surface) !important; box-shadow: var(--skin-shadow) !important; }\nbody[data-dsh-skin=\"material-orchid\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]):focus-within { border-color: var(--skin-action) !important; box-shadow: 0 0 0 1px var(--skin-action), var(--skin-shadow) !important; }\nbody[data-dsh-skin=\"material-orchid\"] :where([class*=\"_composerStack\"] [contenteditable=\"true\"], [class*=\"_composerStack\"] textarea) { font-family: var(--dsw-font-family); caret-color: var(--skin-focus); }\nbody[data-dsh-skin=\"material-orchid\"] :where([class*=\"_composerStack\"] button[class*=\"_add\"]) { background: var(--skin-layer) !important; border: 1px solid var(--skin-line) !important; }\nbody[data-dsh-skin=\"material-orchid\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]) { width: 38px; height: 38px; border: 1px solid var(--skin-action) !important; border-radius: var(--skin-radius) !important; background: var(--skin-action) !important; color: var(--skin-on-action) !important; }\nbody[data-dsh-skin=\"material-orchid\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:disabled) { background: var(--skin-layer) !important; border-color: var(--skin-line) !important; color: var(--skin-muted) !important; opacity: .65; box-shadow: none !important; }\nbody[data-dsh-skin=\"material-orchid\"] :where([role=\"dialog\"]) { border: 1px solid var(--skin-line); border-radius: var(--skin-card-radius) !important; background: var(--skin-surface) !important; box-shadow: var(--skin-shadow); }\nbody[data-dsh-skin=\"material-orchid\"] :where([role=\"menu\"], [role=\"listbox\"]) { border: 1px solid var(--skin-line); background: var(--skin-surface); border-radius: var(--skin-radius); }\nbody[data-dsh-skin=\"material-orchid\"] :where(pre) { border: 1px solid var(--skin-line); border-radius: var(--skin-radius); background: var(--skin-surface) !important; }\nbody[data-dsh-skin=\"material-orchid\"] :where(blockquote) { border-left: 2px solid var(--skin-action); }\nbody[data-dsh-skin=\"material-orchid\"] ::selection { background: var(--skin-action); color: var(--skin-on-action); }\n@media (hover: hover) {\n  body[data-dsh-skin=\"material-orchid\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]:hover) { background: var(--skin-bg) !important; border-color: var(--skin-action) !important; }\n  body[data-dsh-skin=\"material-orchid\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:not(:disabled):hover) { filter: brightness(.92); }\n}\n\n/* Signature details: material */\nbody[data-dsh-skin=\"material-orchid\"] [class*=\"_sidebarCol\"] button[class*=\"_newSession\"] { background: #EADDFF !important; color: #21005D !important; border-color: transparent !important; border-radius: 16px !important; }\nbody[data-dsh-skin=\"material-orchid\"] [class*=\"_composerStack\"] button[class*=\"_primary\"] { border-radius: 50% !important; box-shadow: 0 1px 3px #00000033; }\nbody[data-dsh-skin=\"material-orchid\"] :where(button, [role=\"tab\"]) { transition: background-color 160ms ease, box-shadow 160ms ease; }\nbody[data-dsh-skin=\"material-orchid\"] :where(button:active:not(:disabled)) { box-shadow: inset 0 0 0 100px #6750a418; }\n\n@media (prefers-reduced-motion: reduce) {\n  body[data-dsh-skin=\"material-orchid\"] *, body[data-dsh-skin=\"material-orchid\"] *::before, body[data-dsh-skin=\"material-orchid\"] *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }\n}\n\n/* Preserve switch affordance and align selection geometry with the skin. */\nbody[data-dsh-skin=\"material-orchid\"] :where(button[role=\"switch\"]) { border-radius: 999px !important; }\nbody[data-dsh-skin=\"material-orchid\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"]) { border-radius: var(--skin-radius); }\n\n/* Focus must remain visible above every signature surface rule. */\nbody[data-dsh-skin=\"material-orchid\"] [class*=\"_composerStack\"] :is([class$=\"_card\"], [class*=\"_card \"]):focus-within {\n  border-color: var(--skin-focus) !important;\n  box-shadow: 0 0 0 1px var(--skin-focus), var(--skin-shadow) !important;\n}\n";
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
    "light": "#6750A4",
    "dark": "#6750A4"
  },
  "--dsw-alias-state-business-primary": {
    "light": "#6750A4",
    "dark": "#6750A4"
  },
  "--dsw-alias-state-business-tertiary": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-menu-icon": {
    "light": "#49454F",
    "dark": "#49454F"
  },
  "--dsw-alias-menu-group-header-fill": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-settings-card-fill": {
    "light": "#FFFBFE",
    "dark": "#FFFBFE"
  },
  "--dsw-alias-settings-card-stroke": {
    "light": "#CAC4D0",
    "dark": "#CAC4D0"
  },
  "--dsw-alias-bg-base": {
    "light": "#FEF7FF",
    "dark": "#FEF7FF"
  },
  "--dsw-alias-bg-layer-1": {
    "light": "#FFFBFE",
    "dark": "#FFFBFE"
  },
  "--dsw-alias-bg-layer-2": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-bg-layer-3": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-bg-module-platform": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-bg-multi-select": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-bg-overlay": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-bg-skeleton": {
    "light": "#CAC4D0",
    "dark": "#CAC4D0"
  },
  "--dsw-alias-border-inverted2": {
    "light": "#CAC4D0",
    "dark": "#CAC4D0"
  },
  "--dsw-alias-border-inverted": {
    "light": "#CAC4D0",
    "dark": "#CAC4D0"
  },
  "--dsw-alias-border-l1": {
    "light": "#CAC4D0",
    "dark": "#CAC4D0"
  },
  "--dsw-alias-border-l2-darkmode-thin": {
    "light": "#CAC4D0",
    "dark": "#CAC4D0"
  },
  "--dsw-alias-border-l2": {
    "light": "#CAC4D0",
    "dark": "#CAC4D0"
  },
  "--dsw-alias-border-l3": {
    "light": "#CAC4D0",
    "dark": "#CAC4D0"
  },
  "--dsw-alias-border-l4": {
    "light": "#CAC4D0",
    "dark": "#CAC4D0"
  },
  "--dsw-alias-brand-primary-invert": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-brand-primary-new-colorprimary-new-color": {
    "light": "#6750A4",
    "dark": "#6750A4"
  },
  "--dsw-alias-brand-primary": {
    "light": "#6750A4",
    "dark": "#6750A4"
  },
  "--dsw-alias-brand-text": {
    "light": "#6750A4",
    "dark": "#6750A4"
  },
  "--dsw-alias-button-contrast-fill": {
    "light": "#1C1B1F",
    "dark": "#1C1B1F"
  },
  "--dsw-alias-button-elevated-fill": {
    "light": "#FFFBFE",
    "dark": "#FFFBFE"
  },
  "--dsw-alias-button-floating-fill": {
    "light": "#FFFBFE",
    "dark": "#FFFBFE"
  },
  "--dsw-alias-button-floating-hover": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-button-ghost-active-border": {
    "light": "#CAC4D0",
    "dark": "#CAC4D0"
  },
  "--dsw-alias-button-ghost-active-fill": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-button-ghost-active-hover": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-button-info-fill": {
    "light": "#6750A4",
    "dark": "#6750A4"
  },
  "--dsw-alias-button-info-hover": {
    "light": "#6750A4",
    "dark": "#6750A4"
  },
  "--dsw-alias-button-primary-dimmed": {
    "light": "#CAC4D0",
    "dark": "#CAC4D0"
  },
  "--dsw-alias-button-primary-fill": {
    "light": "#6750A4",
    "dark": "#6750A4"
  },
  "--dsw-alias-button-primary-hover": {
    "light": "#6750A4",
    "dark": "#6750A4"
  },
  "--dsw-alias-interactive-bg-active": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-interactive-bg-hover-accent": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-interactive-bg-hover-solid": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-interactive-bg-hover": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-label-caption": {
    "light": "#49454F",
    "dark": "#49454F"
  },
  "--dsw-alias-label-dimmed": {
    "light": "#49454F",
    "dark": "#49454F"
  },
  "--dsw-alias-label-primary-bluish": {
    "light": "#1C1B1F",
    "dark": "#1C1B1F"
  },
  "--dsw-alias-label-primary-dimmed": {
    "light": "#49454F",
    "dark": "#49454F"
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
    "light": "#1C1B1F",
    "dark": "#1C1B1F"
  },
  "--dsw-alias-label-secondary": {
    "light": "#49454F",
    "dark": "#49454F"
  },
  "--dsw-alias-label-tertiary": {
    "light": "#49454F",
    "dark": "#49454F"
  },
  "--dsw-alias-markdown-citation": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-markdown-code-block-banner": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-markdown-code-block": {
    "light": "#FFFBFE",
    "dark": "#FFFBFE"
  },
  "--dsw-alias-markdown-code-segment-selected": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-markdown-code-segment-unselected": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-markdown-inline-code": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-markdown-placeholder": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-markdown-tag": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-alias-scrollbar-bg-l1": {
    "light": "#CAC4D0",
    "dark": "#CAC4D0"
  },
  "--dsw-alias-scrollbar-bg-l2": {
    "light": "#CAC4D0",
    "dark": "#CAC4D0"
  },
  "--dsw-alias-scrollbar-hover-l1": {
    "light": "#49454F",
    "dark": "#49454F"
  },
  "--dsw-alias-scrollbar-hover-l2": {
    "light": "#49454F",
    "dark": "#49454F"
  },
  "--dsw-specific-bubble-highlight": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-specific-bubble": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-specific-input-major": {
    "light": "#FFFBFE",
    "dark": "#FFFBFE"
  },
  "--dsw-specific-login-input": {
    "light": "#FEF7FF",
    "dark": "#FEF7FF"
  },
  "--dsw-specific-menu": {
    "light": "#FFFBFE",
    "dark": "#FFFBFE"
  },
  "--dsw-specific-selector": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-specific-sidebar-fill": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-specific-sidebar-nav-item-active-accent": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-specific-sidebar-nav-item-active": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-specific-sidebar-nav-item-hover": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
  },
  "--dsw-specific-tip": {
    "light": "#F3EDF7",
    "dark": "#F3EDF7"
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
