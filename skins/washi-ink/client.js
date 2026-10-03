window.__ModuleLoader__.load({
  id: "dsh-skin-washi-ink",
  factory: () => {
    var module = { exports: {} };
    const PACKAGE_ID = "dsh-skin-washi-ink";
    const SKIN_ID = "washi-ink";
    const STYLE_ID = "dsh-skin-washi-ink/skin.css";
    const CSS = "/* Washi Ink · 和纸墨. Fixed palette; all rules scoped to the active plugin. */\nbody[data-dsh-skin=\"washi-ink\"] {\n  --paper: #f6f2e6;\n  --paper-deep: #efe9d8;\n  --ink: #2f3b38;\n  --ink-soft: #6f6a5b;\n  --clay: #8b7355;\n  --sand: #c4a77d;\n  --gold: #b08d3f;\n  --seal: #a63a2b;\n  --hair: rgba(139,115,85,.35);\n  --serif: Georgia,\"Palatino Linotype\",\"Songti SC\",serif;\n  --sans: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"PingFang SC\",\"Microsoft YaHei\",sans-serif;\n  --skin-bg: #F6F2E6; --skin-ink: #2F3B38; --skin-accent: #A63A2B;\n  --skin-surface: #FBF8F0; --skin-layer: #EFE9D8; --skin-line: #C4B69B;\n  --skin-muted: #6B6658; --skin-action: #A63A2B; --skin-on-action: #FFFFFF;\n  --skin-focus: #A63A2B;\n  --skin-radius: 2px; --skin-card-radius: 2px; --skin-shadow: 0 4px 16px #a63a2b08;\n  --dsw-font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif;\n  color-scheme: light;\n  background: var(--skin-bg); color: var(--skin-ink); font-family: var(--dsw-font-family);\n}\nbody[data-dsh-skin=\"washi-ink\"] :where(button, input, textarea, select, [role=\"button\"], [role=\"tab\"]) { font-family: inherit; border-radius: var(--skin-radius); }\nbody[data-dsh-skin=\"washi-ink\"] :where(code, pre, kbd, samp) { font-family: ui-monospace, \"SF Mono\", Menlo, Consolas, monospace; }\nbody[data-dsh-skin=\"washi-ink\"] :where(button, a, input, textarea, select, [role=\"button\"], [role=\"tab\"], [contenteditable=\"true\"]):focus-visible { outline: 2px solid var(--skin-focus) !important; outline-offset: 3px; }\nbody[data-dsh-skin=\"washi-ink\"] :where(button[type=\"submit\"]:not(:disabled)) { background: var(--skin-action) !important; color: var(--skin-on-action) !important; }\nbody[data-dsh-skin=\"washi-ink\"] :where([class*=\"_sidebarCol\"]) { background: var(--skin-layer) !important; border-right: 1px solid var(--skin-line); }\nbody[data-dsh-skin=\"washi-ink\"] :where([class*=\"_sidebarCol\"] button[class*=\"_brand\"]) { min-height: 48px; border-bottom: 1px solid var(--skin-line); }\nbody[data-dsh-skin=\"washi-ink\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]) { min-height: 40px; border: 1px solid var(--skin-line) !important; border-radius: var(--skin-radius) !important; background: var(--skin-surface) !important; color: var(--skin-ink) !important; font-weight: 600; }\nbody[data-dsh-skin=\"washi-ink\"] :where([class*=\"_sidebarCol\"] [class*=\"_sectionHeader\"]) { color: var(--skin-muted) !important; font-size: 11px; letter-spacing: .04em; }\nbody[data-dsh-skin=\"washi-ink\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"][aria-selected=\"true\"]) { box-shadow: inset 3px 0 var(--skin-action); color: var(--skin-ink) !important; }\nbody[data-dsh-skin=\"washi-ink\"] :where([class*=\"_heroGlow\"]) { display: none !important; }\nbody[data-dsh-skin=\"washi-ink\"] :where([class*=\"_composerStack\"] [class*=\"_root\"][class*=\"_hero\"]) { border: 0 !important; background: transparent !important; box-shadow: none !important; }\nbody[data-dsh-skin=\"washi-ink\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]) { border: 1px solid var(--skin-line) !important; border-radius: var(--skin-card-radius) !important; background: var(--skin-surface) !important; box-shadow: var(--skin-shadow) !important; }\nbody[data-dsh-skin=\"washi-ink\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]):focus-within { border-color: var(--skin-action) !important; box-shadow: 0 0 0 1px var(--skin-action), var(--skin-shadow) !important; }\nbody[data-dsh-skin=\"washi-ink\"] :where([class*=\"_composerStack\"] [contenteditable=\"true\"], [class*=\"_composerStack\"] textarea) { font-family: var(--dsw-font-family); caret-color: var(--skin-focus); }\nbody[data-dsh-skin=\"washi-ink\"] :where([class*=\"_composerStack\"] button[class*=\"_add\"]) { background: var(--skin-layer) !important; border: 1px solid var(--skin-line) !important; }\nbody[data-dsh-skin=\"washi-ink\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]) { width: 38px; height: 38px; border: 1px solid var(--skin-action) !important; border-radius: var(--skin-radius) !important; background: var(--skin-action) !important; color: var(--skin-on-action) !important; }\nbody[data-dsh-skin=\"washi-ink\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:disabled) { background: var(--skin-layer) !important; border-color: var(--skin-line) !important; color: var(--skin-muted) !important; opacity: .65; box-shadow: none !important; }\nbody[data-dsh-skin=\"washi-ink\"] :where([role=\"dialog\"]) { border: 1px solid var(--skin-line); border-radius: var(--skin-card-radius) !important; background: var(--skin-surface) !important; box-shadow: var(--skin-shadow); }\nbody[data-dsh-skin=\"washi-ink\"] :where([role=\"menu\"], [role=\"listbox\"]) { border: 1px solid var(--skin-line); background: var(--skin-surface); border-radius: var(--skin-radius); }\nbody[data-dsh-skin=\"washi-ink\"] :where(pre) { border: 1px solid var(--skin-line); border-radius: var(--skin-radius); background: var(--skin-surface) !important; }\nbody[data-dsh-skin=\"washi-ink\"] :where(blockquote) { border-left: 2px solid var(--skin-action); }\nbody[data-dsh-skin=\"washi-ink\"] ::selection { background: var(--skin-action); color: var(--skin-on-action); }\n@media (hover: hover) {\n  body[data-dsh-skin=\"washi-ink\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]:hover) { background: var(--skin-bg) !important; border-color: var(--skin-action) !important; }\n  body[data-dsh-skin=\"washi-ink\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:not(:disabled):hover) { filter: brightness(.92); }\n}\n\n/* Signature details: japanese */\nbody[data-dsh-skin=\"washi-ink\"] [class*=\"_sidebarCol\"] button[class*=\"_newSession\"] { border-color: #A63A2B !important; color: #A63A2B !important; background: transparent !important; }\nbody[data-dsh-skin=\"washi-ink\"] :where(h1,h2,h3) { font-family: var(--serif); font-weight: 400; letter-spacing: .02em; }\nbody[data-dsh-skin=\"washi-ink\"] [class*=\"_sectionHeader\"] { letter-spacing: .08em; }\nbody[data-dsh-skin=\"washi-ink\"] [class*=\"_composerStack\"] button[class*=\"_primary\"] { border-radius: 2px !important; }\n\n@media (prefers-reduced-motion: reduce) {\n  body[data-dsh-skin=\"washi-ink\"] *, body[data-dsh-skin=\"washi-ink\"] *::before, body[data-dsh-skin=\"washi-ink\"] *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }\n}\n\n/* Preserve switch affordance and align selection geometry with the skin. */\nbody[data-dsh-skin=\"washi-ink\"] :where(button[role=\"switch\"]) { border-radius: 999px !important; }\nbody[data-dsh-skin=\"washi-ink\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"]) { border-radius: var(--skin-radius); }\n\n/* Focus must remain visible above every signature surface rule. */\nbody[data-dsh-skin=\"washi-ink\"] [class*=\"_composerStack\"] :is([class$=\"_card\"], [class*=\"_card \"]):focus-within {\n  border-color: var(--skin-focus) !important;\n  box-shadow: 0 0 0 1px var(--skin-focus), var(--skin-shadow) !important;\n}\nbody[data-dsh-skin=\"washi-ink\"] [class*=\"_composerStack\"] [class*=\"_titleGroup\"] > span:first-child { font-family: var(--serif); font-weight: 500; letter-spacing: .01em; }\n";
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
    "light": "#A63A2B",
    "dark": "#A63A2B"
  },
  "--dsw-alias-state-business-primary": {
    "light": "#A63A2B",
    "dark": "#A63A2B"
  },
  "--dsw-alias-state-business-tertiary": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-menu-icon": {
    "light": "#6B6658",
    "dark": "#6B6658"
  },
  "--dsw-alias-menu-group-header-fill": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-settings-card-fill": {
    "light": "#FBF8F0",
    "dark": "#FBF8F0"
  },
  "--dsw-alias-settings-card-stroke": {
    "light": "#C4B69B",
    "dark": "#C4B69B"
  },
  "--dsw-alias-bg-base": {
    "light": "#F6F2E6",
    "dark": "#F6F2E6"
  },
  "--dsw-alias-bg-layer-1": {
    "light": "#FBF8F0",
    "dark": "#FBF8F0"
  },
  "--dsw-alias-bg-layer-2": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-bg-layer-3": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-bg-module-platform": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-bg-multi-select": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-bg-overlay": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-bg-skeleton": {
    "light": "#C4B69B",
    "dark": "#C4B69B"
  },
  "--dsw-alias-border-inverted2": {
    "light": "#C4B69B",
    "dark": "#C4B69B"
  },
  "--dsw-alias-border-inverted": {
    "light": "#C4B69B",
    "dark": "#C4B69B"
  },
  "--dsw-alias-border-l1": {
    "light": "#C4B69B",
    "dark": "#C4B69B"
  },
  "--dsw-alias-border-l2-darkmode-thin": {
    "light": "#C4B69B",
    "dark": "#C4B69B"
  },
  "--dsw-alias-border-l2": {
    "light": "#C4B69B",
    "dark": "#C4B69B"
  },
  "--dsw-alias-border-l3": {
    "light": "#C4B69B",
    "dark": "#C4B69B"
  },
  "--dsw-alias-border-l4": {
    "light": "#C4B69B",
    "dark": "#C4B69B"
  },
  "--dsw-alias-brand-primary-invert": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-brand-primary-new-colorprimary-new-color": {
    "light": "#A63A2B",
    "dark": "#A63A2B"
  },
  "--dsw-alias-brand-primary": {
    "light": "#A63A2B",
    "dark": "#A63A2B"
  },
  "--dsw-alias-brand-text": {
    "light": "#A63A2B",
    "dark": "#A63A2B"
  },
  "--dsw-alias-button-contrast-fill": {
    "light": "#2F3B38",
    "dark": "#2F3B38"
  },
  "--dsw-alias-button-elevated-fill": {
    "light": "#FBF8F0",
    "dark": "#FBF8F0"
  },
  "--dsw-alias-button-floating-fill": {
    "light": "#FBF8F0",
    "dark": "#FBF8F0"
  },
  "--dsw-alias-button-floating-hover": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-button-ghost-active-border": {
    "light": "#C4B69B",
    "dark": "#C4B69B"
  },
  "--dsw-alias-button-ghost-active-fill": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-button-ghost-active-hover": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-button-info-fill": {
    "light": "#A63A2B",
    "dark": "#A63A2B"
  },
  "--dsw-alias-button-info-hover": {
    "light": "#A63A2B",
    "dark": "#A63A2B"
  },
  "--dsw-alias-button-primary-dimmed": {
    "light": "#C4B69B",
    "dark": "#C4B69B"
  },
  "--dsw-alias-button-primary-fill": {
    "light": "#A63A2B",
    "dark": "#A63A2B"
  },
  "--dsw-alias-button-primary-hover": {
    "light": "#A63A2B",
    "dark": "#A63A2B"
  },
  "--dsw-alias-interactive-bg-active": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-interactive-bg-hover-accent": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-interactive-bg-hover-solid": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-interactive-bg-hover": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-label-caption": {
    "light": "#6B6658",
    "dark": "#6B6658"
  },
  "--dsw-alias-label-dimmed": {
    "light": "#6B6658",
    "dark": "#6B6658"
  },
  "--dsw-alias-label-primary-bluish": {
    "light": "#2F3B38",
    "dark": "#2F3B38"
  },
  "--dsw-alias-label-primary-dimmed": {
    "light": "#6B6658",
    "dark": "#6B6658"
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
    "light": "#2F3B38",
    "dark": "#2F3B38"
  },
  "--dsw-alias-label-secondary": {
    "light": "#6B6658",
    "dark": "#6B6658"
  },
  "--dsw-alias-label-tertiary": {
    "light": "#6B6658",
    "dark": "#6B6658"
  },
  "--dsw-alias-markdown-citation": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-markdown-code-block-banner": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-markdown-code-block": {
    "light": "#FBF8F0",
    "dark": "#FBF8F0"
  },
  "--dsw-alias-markdown-code-segment-selected": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-markdown-code-segment-unselected": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-markdown-inline-code": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-markdown-placeholder": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-markdown-tag": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-alias-scrollbar-bg-l1": {
    "light": "#C4B69B",
    "dark": "#C4B69B"
  },
  "--dsw-alias-scrollbar-bg-l2": {
    "light": "#C4B69B",
    "dark": "#C4B69B"
  },
  "--dsw-alias-scrollbar-hover-l1": {
    "light": "#6B6658",
    "dark": "#6B6658"
  },
  "--dsw-alias-scrollbar-hover-l2": {
    "light": "#6B6658",
    "dark": "#6B6658"
  },
  "--dsw-specific-bubble-highlight": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-specific-bubble": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-specific-input-major": {
    "light": "#FBF8F0",
    "dark": "#FBF8F0"
  },
  "--dsw-specific-login-input": {
    "light": "#F6F2E6",
    "dark": "#F6F2E6"
  },
  "--dsw-specific-menu": {
    "light": "#FBF8F0",
    "dark": "#FBF8F0"
  },
  "--dsw-specific-selector": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-specific-sidebar-fill": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-specific-sidebar-nav-item-active-accent": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-specific-sidebar-nav-item-active": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-specific-sidebar-nav-item-hover": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
  },
  "--dsw-specific-tip": {
    "light": "#EFE9D8",
    "dark": "#EFE9D8"
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
