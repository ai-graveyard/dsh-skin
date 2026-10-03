window.__ModuleLoader__.load({
  id: "dsh-skin-braun-control",
  factory: () => {
    var module = { exports: {} };
    const PACKAGE_ID = "dsh-skin-braun-control";
    const SKIN_ID = "braun-control";
    const STYLE_ID = "dsh-skin-braun-control/skin.css";
    const CSS = "body[data-dsh-skin=\"braun-control\"] {\n  --u: 8px;\n  --bg: #f7f7f7;\n  --layer: #efefef;\n  --layer-2: #ececec;\n  --panel: #ffffff;\n  --ink: #1a1a1a;\n  --gray: #808080;\n  --line: #c9c9c9;\n  --metal-hi: #f6f6f6;\n  --metal-lo: #dcdcdc;\n  --accent: #e8500a;\n  --mono: ui-monospace,\"SF Mono\",Menlo,Consolas,monospace;\n}\n\nbody[data-dsh-skin=\"braun-control\"] {\n  --dsh-skin-sans: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"PingFang SC\", \"Microsoft YaHei\", sans-serif;\n  --dsh-skin-mono: var(--mono);\n  color-scheme: light;\n  background: #f7f7f7;\n  color: var(--ink);\n  font-family: var(--dsh-skin-sans);\n  letter-spacing: 0;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where(button, input, textarea, select, [role=\"button\"], [role=\"dialog\"], [role=\"menu\"], [role=\"menuitem\"], pre, code) {\n  border-radius: 3px !important;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where(code, pre, kbd, samp) {\n  font-family: var(--dsh-skin-mono);\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where(button, [role=\"button\"], [role=\"tab\"], label, legend, dt) {\n  letter-spacing: 0;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where(h1, h2, h3, h4, strong, b) {\n  font-weight: 600;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where(button, [role=\"button\"], input, textarea, select) {\n  box-shadow: none !important;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where(button, [role=\"button\"], input, textarea, select):focus-visible {\n  outline: 2px solid var(--accent) !important;\n  outline-offset: 2px;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where(button[type=\"submit\"]:not(:disabled)) {\n  background: var(--accent) !important;\n  border-color: var(--accent) !important;\n  color: #ffffff !important;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where(button[type=\"submit\"]:not(:disabled)):hover {\n  background: #c84308 !important;\n  border-color: #c84308 !important;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where(hr) {\n  border: 0;\n  border-top: 1px solid var(--line);\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where(pre) {\n  border: 1px solid var(--line);\n  background: #f1f1f1 !important;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where(blockquote) {\n  border-left: 2px solid var(--ink);\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([aria-pressed=\"true\"], [aria-selected=\"true\"], [data-state=\"checked\"]) {\n  border-color: var(--ink) !important;\n}\n\n/*\n * Harness uses CSS modules, so the stable part of a component class is its\n * semantic suffix (for example `_sidebarCol` or `_composerStack`). Keep all\n * selectors below scoped to the skin marker and those suffixes: this gives the\n * real application the same control geometry as the static preview without\n * coupling the bundle to a generated module hash.\n */\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_sidebarCol\"]) {\n  background: var(--layer) !important;\n  border-right: 1px solid var(--line);\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_sidebarCol\"] button[class*=\"_brand\"]) {\n  min-height: 48px;\n  border-bottom: 1px solid var(--line) !important;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]) {\n  border: 1px solid var(--ink) !important;\n  border-left: 4px solid var(--accent) !important;\n  background: var(--ink) !important;\n  color: #ffffff !important;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]:hover) {\n  background: #333333 !important;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_sidebarCol\"] [class*=\"_sectionHeader\"]) {\n  border-top: 1px solid var(--line);\n  color: var(--gray) !important;\n  font-family: var(--dsh-skin-mono);\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"]) {\n  border-left: 2px solid transparent;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"][aria-selected=\"true\"]) {\n  border-left-color: var(--ink) !important;\n  background: #e2e2e2 !important;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_sidebarCol\"] button[class*=\"_trigger\"]) {\n  border-top: 1px solid var(--line) !important;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_composerStack\"]) {\n  position: relative;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_heroGlow\"]) {\n  display: none !important;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_heroWorkspaceRow\"]) {\n  border-top: 1px solid var(--line);\n  padding-top: 8px;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_composerStack\"] [class*=\"_root\"][class*=\"_hero\"]) {\n  border: 0 !important;\n  background: transparent !important;\n  box-shadow: none !important;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]) {\n  border: 1px solid var(--ink) !important;\n  border-radius: 4px !important;\n  background: var(--panel) !important;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06) !important;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_composerStack\"] [class*=\"_input\"][contenteditable=\"true\"], [class*=\"_composerStack\"] textarea[class*=\"_input\"]) {\n  font-family: var(--dsh-skin-sans);\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_composerStack\"] button[class*=\"_add\"]) {\n  border: 1px solid var(--line) !important;\n  background: var(--bg) !important;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]) {\n  width: 38px;\n  height: 38px;\n  border: 1px solid #c84308 !important;\n  border-radius: 50% !important;\n  background: var(--accent) !important;\n  color: #ffffff !important;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2) !important;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:hover:not(:disabled)) {\n  background: #c84308 !important;\n  transform: translateY(-2px);\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_detailsCol\"] > [class*=\"_root\"]) {\n  border-left: 1px solid var(--line);\n  background: var(--bg) !important;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([role=\"dialog\"]) {\n  border: 1px solid var(--ink) !important;\n  background: var(--panel) !important;\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12) !important;\n}\n\n/* Desktop 0.2: contenteditable composer, readable controls and quiet focus. */\nbody[data-dsh-skin=\"braun-control\"] {\n  --dsw-font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif;\n  font-family: var(--dsw-font-family);\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where(button, input, textarea, select, [role=\"button\"], [role=\"tab\"]) {\n  font-family: inherit;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_composerStack\"] [contenteditable=\"true\"]) {\n  font-family: var(--dsw-font-family);\n  caret-color: var(--accent);\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]):focus-within {\n  border-color: var(--accent) !important;\n  box-shadow: 0 0 0 1px var(--accent), 0 8px 24px rgba(0, 0, 0, .08) !important;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:disabled) {\n  background: var(--line) !important;\n  border-color: var(--line) !important;\n  color: var(--gray) !important;\n  opacity: .65;\n  box-shadow: none !important;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([role=\"menu\"]) {\n  background: var(--panel);\n  border-color: var(--line);\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where(button, [role=\"button\"], [role=\"tab\"], a):focus-visible {\n  outline: 2px solid var(--accent) !important;\n  outline-offset: 2px;\n}\n\nbody[data-dsh-skin=\"braun-control\"] :where([class*=\"_sidebarCol\"] [class*=\"_sectionHeader\"]) {\n  font-size: 11px;\n  letter-spacing: .04em;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  body[data-dsh-skin=\"braun-control\"] *,\n  body[data-dsh-skin=\"braun-control\"] *::before,\n  body[data-dsh-skin=\"braun-control\"] *::after {\n    animation: none !important;\n    scroll-behavior: auto !important;\n    transition: none !important;\n  }\n}\n";
    const TOKEN_OVERRIDES = Object.freeze({
  "--shiki-token-constant": {
    "light": "#1C7ED6",
    "dark": "#1C7ED6"
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
    "light": "#B54708",
    "dark": "#B54708"
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
    "light": "#A93807",
    "dark": "#A93807"
  },
  "--dsw-alias-state-business-primary": {
    "light": "#C84308",
    "dark": "#C84308"
  },
  "--dsw-alias-state-business-tertiary": {
    "light": "#FBE9DF",
    "dark": "#FBE9DF"
  },
  "--dsw-alias-menu-icon": {
    "light": "#5F5F5F",
    "dark": "#5F5F5F"
  },
  "--dsw-alias-menu-group-header-fill": {
    "light": "#EFEFEF",
    "dark": "#EFEFEF"
  },
  "--dsw-alias-settings-card-fill": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-settings-card-stroke": {
    "light": "#DCDCDC",
    "dark": "#DCDCDC"
  },
  "--dsw-alias-bg-base": {
    "light": "#F7F7F7",
    "dark": "#F7F7F7"
  },
  "--dsw-alias-bg-layer-1": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-bg-layer-2": {
    "light": "#EFEFEF",
    "dark": "#EFEFEF"
  },
  "--dsw-alias-bg-layer-3": {
    "light": "#ECECEC",
    "dark": "#ECECEC"
  },
  "--dsw-alias-bg-module-platform": {
    "light": "#EFEFEF",
    "dark": "#EFEFEF"
  },
  "--dsw-alias-bg-multi-select": {
    "light": "#ECECEC",
    "dark": "#ECECEC"
  },
  "--dsw-alias-bg-overlay": {
    "light": "#ECECEC",
    "dark": "#ECECEC"
  },
  "--dsw-alias-bg-skeleton": {
    "light": "rgba(26, 26, 26, 0.06)",
    "dark": "rgba(26, 26, 26, 0.06)"
  },
  "--dsw-alias-border-inverted2": {
    "light": "#C9C9C9",
    "dark": "#C9C9C9"
  },
  "--dsw-alias-border-inverted": {
    "light": "#C9C9C9",
    "dark": "#C9C9C9"
  },
  "--dsw-alias-border-l1": {
    "light": "#DCDCDC",
    "dark": "#DCDCDC"
  },
  "--dsw-alias-border-l2-darkmode-thin": {
    "light": "#C9C9C9",
    "dark": "#C9C9C9"
  },
  "--dsw-alias-border-l2": {
    "light": "#C9C9C9",
    "dark": "#C9C9C9"
  },
  "--dsw-alias-border-l3": {
    "light": "#AFAFAF",
    "dark": "#AFAFAF"
  },
  "--dsw-alias-border-l4": {
    "light": "#808080",
    "dark": "#808080"
  },
  "--dsw-alias-brand-primary-invert": {
    "light": "#F7F7F7",
    "dark": "#F7F7F7"
  },
  "--dsw-alias-brand-primary-new-colorprimary-new-color": {
    "light": "#1A1A1A",
    "dark": "#1A1A1A"
  },
  "--dsw-alias-brand-primary": {
    "light": "#1A1A1A",
    "dark": "#1A1A1A"
  },
  "--dsw-alias-brand-text": {
    "light": "#1A1A1A",
    "dark": "#1A1A1A"
  },
  "--dsw-alias-button-contrast-fill": {
    "light": "#1A1A1A",
    "dark": "#1A1A1A"
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
    "light": "#ECECEC",
    "dark": "#ECECEC"
  },
  "--dsw-alias-button-ghost-active-border": {
    "light": "#808080",
    "dark": "#808080"
  },
  "--dsw-alias-button-ghost-active-fill": {
    "light": "#ECECEC",
    "dark": "#ECECEC"
  },
  "--dsw-alias-button-ghost-active-hover": {
    "light": "#E2E2E2",
    "dark": "#E2E2E2"
  },
  "--dsw-alias-button-info-fill": {
    "light": "#1A1A1A",
    "dark": "#1A1A1A"
  },
  "--dsw-alias-button-info-hover": {
    "light": "#333333",
    "dark": "#333333"
  },
  "--dsw-alias-button-primary-dimmed": {
    "light": "#DCDCDC",
    "dark": "#DCDCDC"
  },
  "--dsw-alias-button-primary-fill": {
    "light": "#1A1A1A",
    "dark": "#1A1A1A"
  },
  "--dsw-alias-button-primary-hover": {
    "light": "#333333",
    "dark": "#333333"
  },
  "--dsw-alias-interactive-bg-active": {
    "light": "#DCDCDC",
    "dark": "#DCDCDC"
  },
  "--dsw-alias-interactive-bg-hover-accent": {
    "light": "#E2E2E2",
    "dark": "#E2E2E2"
  },
  "--dsw-alias-interactive-bg-hover-solid": {
    "light": "#ECECEC",
    "dark": "#ECECEC"
  },
  "--dsw-alias-interactive-bg-hover": {
    "light": "rgba(26, 26, 26, 0.055)",
    "dark": "rgba(26, 26, 26, 0.055)"
  },
  "--dsw-alias-label-caption": {
    "light": "#808080",
    "dark": "#808080"
  },
  "--dsw-alias-label-dimmed": {
    "light": "#AFAFAF",
    "dark": "#AFAFAF"
  },
  "--dsw-alias-label-primary-bluish": {
    "light": "#1A1A1A",
    "dark": "#1A1A1A"
  },
  "--dsw-alias-label-primary-dimmed": {
    "light": "#555555",
    "dark": "#555555"
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
    "light": "#1A1A1A",
    "dark": "#1A1A1A"
  },
  "--dsw-alias-label-secondary": {
    "light": "#5F5F5F",
    "dark": "#5F5F5F"
  },
  "--dsw-alias-label-tertiary": {
    "light": "#808080",
    "dark": "#808080"
  },
  "--dsw-alias-markdown-citation": {
    "light": "#ECECEC",
    "dark": "#ECECEC"
  },
  "--dsw-alias-markdown-code-block-banner": {
    "light": "#ECECEC",
    "dark": "#ECECEC"
  },
  "--dsw-alias-markdown-code-block": {
    "light": "#F1F1F1",
    "dark": "#F1F1F1"
  },
  "--dsw-alias-markdown-code-segment-selected": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-alias-markdown-code-segment-unselected": {
    "light": "#E2E2E2",
    "dark": "#E2E2E2"
  },
  "--dsw-alias-markdown-inline-code": {
    "light": "#ECECEC",
    "dark": "#ECECEC"
  },
  "--dsw-alias-markdown-placeholder": {
    "light": "#EFEFEF",
    "dark": "#EFEFEF"
  },
  "--dsw-alias-markdown-tag": {
    "light": "#ECECEC",
    "dark": "#ECECEC"
  },
  "--dsw-alias-scrollbar-bg-l1": {
    "light": "#C9C9C9",
    "dark": "#C9C9C9"
  },
  "--dsw-alias-scrollbar-bg-l2": {
    "light": "#C9C9C9",
    "dark": "#C9C9C9"
  },
  "--dsw-alias-scrollbar-hover-l1": {
    "light": "#808080",
    "dark": "#808080"
  },
  "--dsw-alias-scrollbar-hover-l2": {
    "light": "#808080",
    "dark": "#808080"
  },
  "--dsw-specific-bubble-highlight": {
    "light": "#E2E2E2",
    "dark": "#E2E2E2"
  },
  "--dsw-specific-bubble": {
    "light": "#EFEFEF",
    "dark": "#EFEFEF"
  },
  "--dsw-specific-input-major": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-specific-login-input": {
    "light": "#F7F7F7",
    "dark": "#F7F7F7"
  },
  "--dsw-specific-menu": {
    "light": "#FFFFFF",
    "dark": "#FFFFFF"
  },
  "--dsw-specific-selector": {
    "light": "#ECECEC",
    "dark": "#ECECEC"
  },
  "--dsw-specific-sidebar-fill": {
    "light": "#EFEFEF",
    "dark": "#EFEFEF"
  },
  "--dsw-specific-sidebar-nav-item-active-accent": {
    "light": "#DCDCDC",
    "dark": "#DCDCDC"
  },
  "--dsw-specific-sidebar-nav-item-active": {
    "light": "#E2E2E2",
    "dark": "#E2E2E2"
  },
  "--dsw-specific-sidebar-nav-item-hover": {
    "light": "#E7E7E7",
    "dark": "#E7E7E7"
  },
  "--dsw-specific-tip": {
    "light": "#ECECEC",
    "dark": "#ECECEC"
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
