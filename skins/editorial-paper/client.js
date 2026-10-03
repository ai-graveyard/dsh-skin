window.__ModuleLoader__.load({
  id: "dsh-skin-editorial-paper",
  factory: () => {
    var module = { exports: {} };
    const PACKAGE_ID = "dsh-skin-editorial-paper";
    const SKIN_ID = "editorial-paper";
    const STYLE_ID = "dsh-skin-editorial-paper/skin.css";
    const CSS = "/* Editorial Paper · 纸上编辑. Fixed palette; all rules scoped to the active plugin. */\nbody[data-dsh-skin=\"editorial-paper\"] {\n  --paper: #FAF7F0;\n  --ink: #141414;\n  --ink-soft: #3E3A33;\n  --accent: #C8102E;\n  --grey: #8A857C;\n  --hairline: #DCD5C6;\n  --serif: Georgia,\"Iowan Old Style\",\"Times New Roman\",Times,serif;\n  --display: Didot,\"Bodoni 72\",\"Didot LT STD\",Georgia,serif;\n  --sans: -apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Arial,sans-serif;\n  --skin-bg: #FAF7F0; --skin-ink: #141414; --skin-accent: #C8102E;\n  --skin-surface: #FFFCF6; --skin-layer: #F0EBDF; --skin-line: #DCD5C6;\n  --skin-muted: #655F55; --skin-action: #C8102E; --skin-on-action: #FFFFFF;\n  --skin-focus: #C8102E;\n  --skin-radius: 0px; --skin-card-radius: 0px; --skin-shadow: none;\n  --dsw-font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif;\n  color-scheme: light;\n  background: var(--skin-bg); color: var(--skin-ink); font-family: var(--dsw-font-family);\n}\nbody[data-dsh-skin=\"editorial-paper\"] :where(button, input, textarea, select, [role=\"button\"], [role=\"tab\"]) { font-family: inherit; border-radius: var(--skin-radius); }\nbody[data-dsh-skin=\"editorial-paper\"] :where(code, pre, kbd, samp) { font-family: ui-monospace, \"SF Mono\", Menlo, Consolas, monospace; }\nbody[data-dsh-skin=\"editorial-paper\"] :where(button, a, input, textarea, select, [role=\"button\"], [role=\"tab\"], [contenteditable=\"true\"]):focus-visible { outline: 2px solid var(--skin-focus) !important; outline-offset: 3px; }\nbody[data-dsh-skin=\"editorial-paper\"] :where(button[type=\"submit\"]:not(:disabled)) { background: var(--skin-action) !important; color: var(--skin-on-action) !important; }\nbody[data-dsh-skin=\"editorial-paper\"] :where([class*=\"_sidebarCol\"]) { background: var(--skin-layer) !important; border-right: 1px solid var(--skin-line); }\nbody[data-dsh-skin=\"editorial-paper\"] :where([class*=\"_sidebarCol\"] button[class*=\"_brand\"]) { min-height: 48px; border-bottom: 1px solid var(--skin-line); }\nbody[data-dsh-skin=\"editorial-paper\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]) { min-height: 40px; border: 1px solid var(--skin-line) !important; border-radius: var(--skin-radius) !important; background: var(--skin-surface) !important; color: var(--skin-ink) !important; font-weight: 600; }\nbody[data-dsh-skin=\"editorial-paper\"] :where([class*=\"_sidebarCol\"] [class*=\"_sectionHeader\"]) { color: var(--skin-muted) !important; font-size: 11px; letter-spacing: .04em; }\nbody[data-dsh-skin=\"editorial-paper\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"][aria-selected=\"true\"]) { box-shadow: inset 3px 0 var(--skin-action); color: var(--skin-ink) !important; }\nbody[data-dsh-skin=\"editorial-paper\"] :where([class*=\"_heroGlow\"]) { display: none !important; }\nbody[data-dsh-skin=\"editorial-paper\"] :where([class*=\"_composerStack\"] [class*=\"_root\"][class*=\"_hero\"]) { border: 0 !important; background: transparent !important; box-shadow: none !important; }\nbody[data-dsh-skin=\"editorial-paper\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]) { border: 1px solid var(--skin-line) !important; border-radius: var(--skin-card-radius) !important; background: var(--skin-surface) !important; box-shadow: var(--skin-shadow) !important; }\nbody[data-dsh-skin=\"editorial-paper\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]):focus-within { border-color: var(--skin-action) !important; box-shadow: 0 0 0 1px var(--skin-action), var(--skin-shadow) !important; }\nbody[data-dsh-skin=\"editorial-paper\"] :where([class*=\"_composerStack\"] [contenteditable=\"true\"], [class*=\"_composerStack\"] textarea) { font-family: var(--dsw-font-family); caret-color: var(--skin-focus); }\nbody[data-dsh-skin=\"editorial-paper\"] :where([class*=\"_composerStack\"] button[class*=\"_add\"]) { background: var(--skin-layer) !important; border: 1px solid var(--skin-line) !important; }\nbody[data-dsh-skin=\"editorial-paper\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]) { width: 38px; height: 38px; border: 1px solid var(--skin-action) !important; border-radius: var(--skin-radius) !important; background: var(--skin-action) !important; color: var(--skin-on-action) !important; }\nbody[data-dsh-skin=\"editorial-paper\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:disabled) { background: var(--skin-layer) !important; border-color: var(--skin-line) !important; color: var(--skin-muted) !important; opacity: .65; box-shadow: none !important; }\nbody[data-dsh-skin=\"editorial-paper\"] :where([role=\"dialog\"]) { border: 1px solid var(--skin-line); border-radius: var(--skin-card-radius) !important; background: var(--skin-surface) !important; box-shadow: var(--skin-shadow); }\nbody[data-dsh-skin=\"editorial-paper\"] :where([role=\"menu\"], [role=\"listbox\"]) { border: 1px solid var(--skin-line); background: var(--skin-surface); border-radius: var(--skin-radius); }\nbody[data-dsh-skin=\"editorial-paper\"] :where(pre) { border: 1px solid var(--skin-line); border-radius: var(--skin-radius); background: var(--skin-surface) !important; }\nbody[data-dsh-skin=\"editorial-paper\"] :where(blockquote) { border-left: 2px solid var(--skin-action); }\nbody[data-dsh-skin=\"editorial-paper\"] ::selection { background: var(--skin-action); color: var(--skin-on-action); }\n@media (hover: hover) {\n  body[data-dsh-skin=\"editorial-paper\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]:hover) { background: var(--skin-bg) !important; border-color: var(--skin-action) !important; }\n  body[data-dsh-skin=\"editorial-paper\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:not(:disabled):hover) { filter: brightness(.92); }\n}\n\n/* Signature details: editorial */\nbody[data-dsh-skin=\"editorial-paper\"] [class*=\"_sidebarCol\"] button[class*=\"_brand\"] { border-bottom: 3px double #141414 !important; }\nbody[data-dsh-skin=\"editorial-paper\"] :where(h1,h2,h3) { font-family: var(--serif); font-weight: 500; }\nbody[data-dsh-skin=\"editorial-paper\"] [class*=\"_sidebarCol\"] button[class*=\"_newSession\"] { background: #141414 !important; color: #FAF7F0 !important; border-color: #141414 !important; }\nbody[data-dsh-skin=\"editorial-paper\"] :where(blockquote) { font-family: var(--serif); font-style: italic; }\n\n@media (prefers-reduced-motion: reduce) {\n  body[data-dsh-skin=\"editorial-paper\"] *, body[data-dsh-skin=\"editorial-paper\"] *::before, body[data-dsh-skin=\"editorial-paper\"] *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }\n}\n\n/* Preserve switch affordance and align selection geometry with the skin. */\nbody[data-dsh-skin=\"editorial-paper\"] :where(button[role=\"switch\"]) { border-radius: 999px !important; }\nbody[data-dsh-skin=\"editorial-paper\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"]) { border-radius: var(--skin-radius); }\n\n/* Focus must remain visible above every signature surface rule. */\nbody[data-dsh-skin=\"editorial-paper\"] [class*=\"_composerStack\"] :is([class$=\"_card\"], [class*=\"_card \"]):focus-within {\n  border-color: var(--skin-focus) !important;\n  box-shadow: 0 0 0 1px var(--skin-focus), var(--skin-shadow) !important;\n}\nbody[data-dsh-skin=\"editorial-paper\"] [class*=\"_composerStack\"] [class*=\"_titleGroup\"] > span:first-child { font-family: var(--serif); font-weight: 500; letter-spacing: .01em; }\n";
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
    "light": "#C8102E",
    "dark": "#C8102E"
  },
  "--dsw-alias-state-business-primary": {
    "light": "#C8102E",
    "dark": "#C8102E"
  },
  "--dsw-alias-state-business-tertiary": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-menu-icon": {
    "light": "#655F55",
    "dark": "#655F55"
  },
  "--dsw-alias-menu-group-header-fill": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-settings-card-fill": {
    "light": "#FFFCF6",
    "dark": "#FFFCF6"
  },
  "--dsw-alias-settings-card-stroke": {
    "light": "#DCD5C6",
    "dark": "#DCD5C6"
  },
  "--dsw-alias-bg-base": {
    "light": "#FAF7F0",
    "dark": "#FAF7F0"
  },
  "--dsw-alias-bg-layer-1": {
    "light": "#FFFCF6",
    "dark": "#FFFCF6"
  },
  "--dsw-alias-bg-layer-2": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-bg-layer-3": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-bg-module-platform": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-bg-multi-select": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-bg-overlay": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-bg-skeleton": {
    "light": "#DCD5C6",
    "dark": "#DCD5C6"
  },
  "--dsw-alias-border-inverted2": {
    "light": "#DCD5C6",
    "dark": "#DCD5C6"
  },
  "--dsw-alias-border-inverted": {
    "light": "#DCD5C6",
    "dark": "#DCD5C6"
  },
  "--dsw-alias-border-l1": {
    "light": "#DCD5C6",
    "dark": "#DCD5C6"
  },
  "--dsw-alias-border-l2-darkmode-thin": {
    "light": "#DCD5C6",
    "dark": "#DCD5C6"
  },
  "--dsw-alias-border-l2": {
    "light": "#DCD5C6",
    "dark": "#DCD5C6"
  },
  "--dsw-alias-border-l3": {
    "light": "#DCD5C6",
    "dark": "#DCD5C6"
  },
  "--dsw-alias-border-l4": {
    "light": "#DCD5C6",
    "dark": "#DCD5C6"
  },
  "--dsw-alias-brand-primary-invert": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-brand-primary-new-colorprimary-new-color": {
    "light": "#C8102E",
    "dark": "#C8102E"
  },
  "--dsw-alias-brand-primary": {
    "light": "#C8102E",
    "dark": "#C8102E"
  },
  "--dsw-alias-brand-text": {
    "light": "#C8102E",
    "dark": "#C8102E"
  },
  "--dsw-alias-button-contrast-fill": {
    "light": "#141414",
    "dark": "#141414"
  },
  "--dsw-alias-button-elevated-fill": {
    "light": "#FFFCF6",
    "dark": "#FFFCF6"
  },
  "--dsw-alias-button-floating-fill": {
    "light": "#FFFCF6",
    "dark": "#FFFCF6"
  },
  "--dsw-alias-button-floating-hover": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-button-ghost-active-border": {
    "light": "#DCD5C6",
    "dark": "#DCD5C6"
  },
  "--dsw-alias-button-ghost-active-fill": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-button-ghost-active-hover": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-button-info-fill": {
    "light": "#C8102E",
    "dark": "#C8102E"
  },
  "--dsw-alias-button-info-hover": {
    "light": "#C8102E",
    "dark": "#C8102E"
  },
  "--dsw-alias-button-primary-dimmed": {
    "light": "#DCD5C6",
    "dark": "#DCD5C6"
  },
  "--dsw-alias-button-primary-fill": {
    "light": "#C8102E",
    "dark": "#C8102E"
  },
  "--dsw-alias-button-primary-hover": {
    "light": "#C8102E",
    "dark": "#C8102E"
  },
  "--dsw-alias-interactive-bg-active": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-interactive-bg-hover-accent": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-interactive-bg-hover-solid": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-interactive-bg-hover": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-label-caption": {
    "light": "#655F55",
    "dark": "#655F55"
  },
  "--dsw-alias-label-dimmed": {
    "light": "#655F55",
    "dark": "#655F55"
  },
  "--dsw-alias-label-primary-bluish": {
    "light": "#141414",
    "dark": "#141414"
  },
  "--dsw-alias-label-primary-dimmed": {
    "light": "#655F55",
    "dark": "#655F55"
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
    "light": "#141414",
    "dark": "#141414"
  },
  "--dsw-alias-label-secondary": {
    "light": "#655F55",
    "dark": "#655F55"
  },
  "--dsw-alias-label-tertiary": {
    "light": "#655F55",
    "dark": "#655F55"
  },
  "--dsw-alias-markdown-citation": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-markdown-code-block-banner": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-markdown-code-block": {
    "light": "#FFFCF6",
    "dark": "#FFFCF6"
  },
  "--dsw-alias-markdown-code-segment-selected": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-markdown-code-segment-unselected": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-markdown-inline-code": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-markdown-placeholder": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-markdown-tag": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-alias-scrollbar-bg-l1": {
    "light": "#DCD5C6",
    "dark": "#DCD5C6"
  },
  "--dsw-alias-scrollbar-bg-l2": {
    "light": "#DCD5C6",
    "dark": "#DCD5C6"
  },
  "--dsw-alias-scrollbar-hover-l1": {
    "light": "#655F55",
    "dark": "#655F55"
  },
  "--dsw-alias-scrollbar-hover-l2": {
    "light": "#655F55",
    "dark": "#655F55"
  },
  "--dsw-specific-bubble-highlight": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-specific-bubble": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-specific-input-major": {
    "light": "#FFFCF6",
    "dark": "#FFFCF6"
  },
  "--dsw-specific-login-input": {
    "light": "#FAF7F0",
    "dark": "#FAF7F0"
  },
  "--dsw-specific-menu": {
    "light": "#FFFCF6",
    "dark": "#FFFCF6"
  },
  "--dsw-specific-selector": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-specific-sidebar-fill": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-specific-sidebar-nav-item-active-accent": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-specific-sidebar-nav-item-active": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-specific-sidebar-nav-item-hover": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
  },
  "--dsw-specific-tip": {
    "light": "#F0EBDF",
    "dark": "#F0EBDF"
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
