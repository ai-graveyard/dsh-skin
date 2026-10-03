window.__ModuleLoader__.load({
  id: "dsh-skin-studio-block",
  factory: () => {
    var module = { exports: {} };
    const PACKAGE_ID = "dsh-skin-studio-block";
    const SKIN_ID = "studio-block";
    const STYLE_ID = "dsh-skin-studio-block/skin.css";
    const CSS = "/* Studio Block · 积木工作室. Fixed palette; all rules scoped to the active plugin. */\nbody[data-dsh-skin=\"studio-block\"] {\n  --paper: #FFF6EA;\n  --ink: #000000;\n  --white: #FFFFFF;\n  --orange: #FF6B35;\n  --blue: #004E89;\n  --yellow: #F7C548;\n  --pink: #FF8FD4;\n  --green: #3ECF8E;\n  --bw: 4px;\n  --sans: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"PingFang SC\",\"Microsoft YaHei\",sans-serif;\n  --mono: ui-monospace,\"SF Mono\",Menlo,Consolas,monospace;\n  --skin-bg: #FFF6EA; --skin-ink: #000000; --skin-accent: #F7C548;\n  --skin-surface: #FFFFFF; --skin-layer: #FFF0D9; --skin-line: #000000;\n  --skin-muted: #51483D; --skin-action: #F7C548; --skin-on-action: #000000;\n  --skin-focus: #004E89;\n  --skin-radius: 4px; --skin-card-radius: 4px; --skin-shadow: 4px 4px 0 #000000;\n  --dsw-font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif;\n  color-scheme: light;\n  background: var(--skin-bg); color: var(--skin-ink); font-family: var(--dsw-font-family);\n}\nbody[data-dsh-skin=\"studio-block\"] :where(button, input, textarea, select, [role=\"button\"], [role=\"tab\"]) { font-family: inherit; border-radius: var(--skin-radius); }\nbody[data-dsh-skin=\"studio-block\"] :where(code, pre, kbd, samp) { font-family: ui-monospace, \"SF Mono\", Menlo, Consolas, monospace; }\nbody[data-dsh-skin=\"studio-block\"] :where(button, a, input, textarea, select, [role=\"button\"], [role=\"tab\"], [contenteditable=\"true\"]):focus-visible { outline: 2px solid var(--skin-focus) !important; outline-offset: 3px; }\nbody[data-dsh-skin=\"studio-block\"] :where(button[type=\"submit\"]:not(:disabled)) { background: var(--skin-action) !important; color: var(--skin-on-action) !important; }\nbody[data-dsh-skin=\"studio-block\"] :where([class*=\"_sidebarCol\"]) { background: var(--skin-layer) !important; border-right: 1px solid var(--skin-line); }\nbody[data-dsh-skin=\"studio-block\"] :where([class*=\"_sidebarCol\"] button[class*=\"_brand\"]) { min-height: 48px; border-bottom: 1px solid var(--skin-line); }\nbody[data-dsh-skin=\"studio-block\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]) { min-height: 40px; border: 1px solid var(--skin-line) !important; border-radius: var(--skin-radius) !important; background: var(--skin-surface) !important; color: var(--skin-ink) !important; font-weight: 600; }\nbody[data-dsh-skin=\"studio-block\"] :where([class*=\"_sidebarCol\"] [class*=\"_sectionHeader\"]) { color: var(--skin-muted) !important; font-size: 11px; letter-spacing: .04em; }\nbody[data-dsh-skin=\"studio-block\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"][aria-selected=\"true\"]) { box-shadow: inset 3px 0 var(--skin-action); color: var(--skin-ink) !important; }\nbody[data-dsh-skin=\"studio-block\"] :where([class*=\"_heroGlow\"]) { display: none !important; }\nbody[data-dsh-skin=\"studio-block\"] :where([class*=\"_composerStack\"] [class*=\"_root\"][class*=\"_hero\"]) { border: 0 !important; background: transparent !important; box-shadow: none !important; }\nbody[data-dsh-skin=\"studio-block\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]) { border: 1px solid var(--skin-line) !important; border-radius: var(--skin-card-radius) !important; background: var(--skin-surface) !important; box-shadow: var(--skin-shadow) !important; }\nbody[data-dsh-skin=\"studio-block\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]):focus-within { border-color: var(--skin-action) !important; box-shadow: 0 0 0 1px var(--skin-action), var(--skin-shadow) !important; }\nbody[data-dsh-skin=\"studio-block\"] :where([class*=\"_composerStack\"] [contenteditable=\"true\"], [class*=\"_composerStack\"] textarea) { font-family: var(--dsw-font-family); caret-color: var(--skin-focus); }\nbody[data-dsh-skin=\"studio-block\"] :where([class*=\"_composerStack\"] button[class*=\"_add\"]) { background: var(--skin-layer) !important; border: 1px solid var(--skin-line) !important; }\nbody[data-dsh-skin=\"studio-block\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]) { width: 38px; height: 38px; border: 1px solid var(--skin-action) !important; border-radius: var(--skin-radius) !important; background: var(--skin-action) !important; color: var(--skin-on-action) !important; }\nbody[data-dsh-skin=\"studio-block\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:disabled) { background: var(--skin-layer) !important; border-color: var(--skin-line) !important; color: var(--skin-muted) !important; opacity: .65; box-shadow: none !important; }\nbody[data-dsh-skin=\"studio-block\"] :where([role=\"dialog\"]) { border: 1px solid var(--skin-line); border-radius: var(--skin-card-radius) !important; background: var(--skin-surface) !important; box-shadow: var(--skin-shadow); }\nbody[data-dsh-skin=\"studio-block\"] :where([role=\"menu\"], [role=\"listbox\"]) { border: 1px solid var(--skin-line); background: var(--skin-surface); border-radius: var(--skin-radius); }\nbody[data-dsh-skin=\"studio-block\"] :where(pre) { border: 1px solid var(--skin-line); border-radius: var(--skin-radius); background: var(--skin-surface) !important; }\nbody[data-dsh-skin=\"studio-block\"] :where(blockquote) { border-left: 2px solid var(--skin-action); }\nbody[data-dsh-skin=\"studio-block\"] ::selection { background: var(--skin-action); color: var(--skin-on-action); }\n@media (hover: hover) {\n  body[data-dsh-skin=\"studio-block\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]:hover) { background: var(--skin-bg) !important; border-color: var(--skin-action) !important; }\n  body[data-dsh-skin=\"studio-block\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:not(:disabled):hover) { filter: brightness(.92); }\n}\n\n/* Signature details: neo-brutalism */\nbody[data-dsh-skin=\"studio-block\"] [class*=\"_sidebarCol\"] button[class*=\"_newSession\"] { border: 2px solid #000000 !important; background: #FF8FD4 !important; box-shadow: 3px 3px 0 #000000; }\nbody[data-dsh-skin=\"studio-block\"] [class*=\"_composerStack\"] [class$=\"_card\"] { border: 2px solid #000000 !important; }\nbody[data-dsh-skin=\"studio-block\"] [class*=\"_composerStack\"] button[class*=\"_primary\"] { border: 2px solid #000000 !important; box-shadow: 2px 2px 0 #000000; }\nbody[data-dsh-skin=\"studio-block\"] :where([class*=\"_newSession\"], [class*=\"_primary\"]):active:not(:disabled) { transform: translate(2px, 2px); box-shadow: none !important; }\nbody[data-dsh-skin=\"studio-block\"] :where(h1,h2,h3) { font-weight: 750; letter-spacing: -.025em; }\n\n@media (prefers-reduced-motion: reduce) {\n  body[data-dsh-skin=\"studio-block\"] *, body[data-dsh-skin=\"studio-block\"] *::before, body[data-dsh-skin=\"studio-block\"] *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }\n}\n\n/* Preserve switch affordance and align selection geometry with the skin. */\nbody[data-dsh-skin=\"studio-block\"] :where(button[role=\"switch\"]) { border-radius: 999px !important; }\nbody[data-dsh-skin=\"studio-block\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"]) { border-radius: var(--skin-radius); }\n\n/* Focus must remain visible above every signature surface rule. */\nbody[data-dsh-skin=\"studio-block\"] [class*=\"_composerStack\"] :is([class$=\"_card\"], [class*=\"_card \"]):focus-within {\n  border-color: var(--skin-focus) !important;\n  box-shadow: 0 0 0 1px var(--skin-focus), var(--skin-shadow) !important;\n}\nbody[data-dsh-skin=\"studio-block\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"][aria-selected=\"true\"]) { box-shadow: inset 3px 0 #000000; }\n";
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
    "light": "#004E89",
    "dark": "#004E89"
  },
  "--dsw-alias-state-business-primary": {
    "light": "#004E89",
    "dark": "#004E89"
  },
  "--dsw-alias-state-business-tertiary": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-menu-icon": {
    "light": "#51483D",
    "dark": "#51483D"
  },
  "--dsw-alias-menu-group-header-fill": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-settings-card-fill": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-settings-card-stroke": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-bg-base": {
    "light": "#FFF6EA",
    "dark": "#FFF6EA"
  },
  "--dsw-alias-bg-layer-1": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-bg-layer-2": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-bg-layer-3": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-bg-module-platform": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-bg-multi-select": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-bg-overlay": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-bg-skeleton": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-border-inverted2": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-border-inverted": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-border-l1": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-border-l2-darkmode-thin": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-border-l2": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-border-l3": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-border-l4": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-brand-primary-invert": {
    "light": "#FFF6EA",
    "dark": "#FFF6EA"
  },
  "--dsw-alias-brand-primary-new-colorprimary-new-color": {
    "light": "#F7C548",
    "dark": "#F7C548"
  },
  "--dsw-alias-brand-primary": {
    "light": "#F7C548",
    "dark": "#F7C548"
  },
  "--dsw-alias-brand-text": {
    "light": "#F7C548",
    "dark": "#F7C548"
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
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-button-ghost-active-border": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-button-ghost-active-fill": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-button-ghost-active-hover": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-button-info-fill": {
    "light": "#F7C548",
    "dark": "#F7C548"
  },
  "--dsw-alias-button-info-hover": {
    "light": "#F7C548",
    "dark": "#F7C548"
  },
  "--dsw-alias-button-primary-dimmed": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-button-primary-fill": {
    "light": "#F7C548",
    "dark": "#F7C548"
  },
  "--dsw-alias-button-primary-hover": {
    "light": "#F7C548",
    "dark": "#F7C548"
  },
  "--dsw-alias-interactive-bg-active": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-interactive-bg-hover-accent": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-interactive-bg-hover-solid": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-interactive-bg-hover": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-label-caption": {
    "light": "#51483D",
    "dark": "#51483D"
  },
  "--dsw-alias-label-dimmed": {
    "light": "#51483D",
    "dark": "#51483D"
  },
  "--dsw-alias-label-primary-bluish": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-label-primary-dimmed": {
    "light": "#51483D",
    "dark": "#51483D"
  },
  "--dsw-alias-label-primary-foreground": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-label-primary-inverted": {
    "light": "#FFF6EA",
    "dark": "#FFF6EA"
  },
  "--dsw-alias-label-primary": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-label-secondary": {
    "light": "#51483D",
    "dark": "#51483D"
  },
  "--dsw-alias-label-tertiary": {
    "light": "#51483D",
    "dark": "#51483D"
  },
  "--dsw-alias-markdown-citation": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-markdown-code-block-banner": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-markdown-code-block": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-markdown-code-segment-selected": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-markdown-code-segment-unselected": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-markdown-inline-code": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-markdown-placeholder": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-markdown-tag": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-alias-scrollbar-bg-l1": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-scrollbar-bg-l2": {
    "light": "#000000",
    "dark": "#000000"
  },
  "--dsw-alias-scrollbar-hover-l1": {
    "light": "#51483D",
    "dark": "#51483D"
  },
  "--dsw-alias-scrollbar-hover-l2": {
    "light": "#51483D",
    "dark": "#51483D"
  },
  "--dsw-specific-bubble-highlight": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-specific-bubble": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-specific-input-major": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-specific-login-input": {
    "light": "#FFF6EA",
    "dark": "#FFF6EA"
  },
  "--dsw-specific-menu": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-specific-selector": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-specific-sidebar-fill": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-specific-sidebar-nav-item-active-accent": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-specific-sidebar-nav-item-active": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-specific-sidebar-nav-item-hover": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
  },
  "--dsw-specific-tip": {
    "light": "#FFF0D9",
    "dark": "#FFF0D9"
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
