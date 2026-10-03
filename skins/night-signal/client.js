window.__ModuleLoader__.load({
  id: "dsh-skin-night-signal",
  factory: () => {
    var module = { exports: {} };
    const PACKAGE_ID = "dsh-skin-night-signal";
    const SKIN_ID = "night-signal";
    const STYLE_ID = "dsh-skin-night-signal/skin.css";
    const CSS = "body[data-dsh-skin=\"night-signal\"] {\n  --night-bg: #0c0f14;\n  --night-surface: #141922;\n  --night-layer: #10151c;\n  --night-layer-2: #171e28;\n  --night-ink: #e8edf2;\n  --night-muted: #8b96a5;\n  --night-line: #293240;\n  --night-accent: #5ee1b3;\n  --night-mono: ui-monospace, \"SF Mono\", Menlo, Consolas, monospace;\n  color-scheme: dark;\n  background: var(--night-bg);\n  color: var(--night-ink);\n  letter-spacing: -.005em;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where(button, input, textarea, select, [role=\"button\"], [role=\"dialog\"], [role=\"menu\"], pre, code) {\n  border-radius: 6px !important;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where(code, pre, kbd, samp) {\n  font-family: var(--night-mono);\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where(button, [role=\"button\"], input, textarea, select):focus-visible {\n  outline: 2px solid var(--night-accent) !important;\n  outline-offset: 2px;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where(button[type=\"submit\"]:not(:disabled)) {\n  border-color: var(--night-accent) !important;\n  background: var(--night-accent) !important;\n  color: var(--night-bg) !important;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where(pre) {\n  border: 1px solid var(--night-line);\n  background: #090c10 !important;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where(blockquote) {\n  border-left: 2px solid var(--night-accent);\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_sidebarCol\"]) {\n  background: var(--night-layer) !important;\n  border-right: 1px solid var(--night-line);\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_sidebarCol\"] button[class*=\"_brand\"]) {\n  min-height: 44px;\n  border-bottom: 1px solid var(--night-line) !important;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]) {\n  min-height: 38px;\n  border: 1px solid var(--night-accent) !important;\n  background: transparent !important;\n  color: var(--night-accent) !important;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: .02em;\n  text-transform: uppercase;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]:hover) {\n  background: rgba(94, 225, 179, .1) !important;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_sidebarCol\"] [class*=\"_sectionHeader\"]) {\n  border-top: 1px solid var(--night-line);\n  color: var(--night-muted) !important;\n  font-family: var(--night-mono);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"]) {\n  min-height: 32px;\n  border-left: 2px solid transparent;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"][aria-selected=\"true\"]) {\n  border-left-color: var(--night-accent) !important;\n  background: #1b3b34 !important;\n  color: var(--night-ink) !important;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_composerStack\"]) {\n  position: relative;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_heroGlow\"]) {\n  display: none !important;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_composerStack\"] [class*=\"_root\"][class*=\"_hero\"]) {\n  border: 0 !important;\n  background: transparent !important;\n  box-shadow: none !important;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]) {\n  border: 1px solid var(--night-line) !important;\n  border-radius: 12px !important;\n  background: var(--night-surface) !important;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, .32) !important;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_composerStack\"] button[class*=\"_add\"]) {\n  border: 1px solid var(--night-line) !important;\n  background: var(--night-layer-2) !important;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]) {\n  width: 36px;\n  height: 36px;\n  border: 1px solid var(--night-accent) !important;\n  background: var(--night-accent) !important;\n  color: var(--night-bg) !important;\n  box-shadow: 0 0 0 4px rgba(94, 225, 179, .08) !important;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:hover:not(:disabled)) {\n  background: #7be9c4 !important;\n  transform: translateY(-2px);\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_detailsCol\"] > [class*=\"_root\"]) {\n  border-left: 1px solid var(--night-line);\n  background: var(--night-bg) !important;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([role=\"dialog\"]) {\n  border: 1px solid var(--night-line) !important;\n  background: var(--night-surface) !important;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, .45) !important;\n}\n\n@media (max-width: 640px) {\n  body[data-dsh-skin=\"night-signal\"] :where([role=\"dialog\"], [role=\"dialog\"] *) {\n    box-sizing: border-box !important;\n  }\n\n  body[data-dsh-skin=\"night-signal\"] :where([role=\"dialog\"]:has([class*=\"_nav\"])) {\n    width: calc(100vw - 24px) !important;\n    max-width: none !important;\n    height: calc(100svh - 24px) !important;\n    max-height: none !important;\n    flex-direction: column !important;\n    overflow: hidden !important;\n  }\n\n  body[data-dsh-skin=\"night-signal\"] :where([role=\"dialog\"] [class*=\"_nav\"]) {\n    width: 100% !important;\n    min-width: 0 !important;\n    flex: 0 0 auto !important;\n    border-right: 0 !important;\n    border-bottom: 1px solid var(--night-line) !important;\n  }\n\n  body[data-dsh-skin=\"night-signal\"] :where([role=\"dialog\"] [class*=\"_navTitle\"]) {\n    padding-bottom: 8px !important;\n  }\n\n  body[data-dsh-skin=\"night-signal\"] :where([role=\"dialog\"] [class*=\"_navList\"]) {\n    width: 100% !important;\n    min-width: 0 !important;\n    flex-direction: row !important;\n    overflow-x: auto !important;\n    overscroll-behavior-x: contain;\n  }\n\n  body[data-dsh-skin=\"night-signal\"] :where([role=\"dialog\"] [class*=\"_navCell\"]) {\n    width: auto !important;\n    min-width: max-content !important;\n    flex: 0 0 auto !important;\n  }\n\n  body[data-dsh-skin=\"night-signal\"] :where([role=\"dialog\"] [class*=\"_navLabel\"]) {\n    width: auto !important;\n  }\n\n  body[data-dsh-skin=\"night-signal\"] :where([role=\"dialog\"] [class*=\"_content\"]) {\n    width: 100% !important;\n    min-width: 0 !important;\n    flex: 1 1 auto !important;\n    overflow: hidden !important;\n  }\n\n  body[data-dsh-skin=\"night-signal\"] :where([role=\"dialog\"] [class*=\"_header\"], [role=\"dialog\"] [class*=\"_options\"]) {\n    width: 100% !important;\n    min-width: 0 !important;\n  }\n\n  body[data-dsh-skin=\"night-signal\"] :where([role=\"dialog\"] [class*=\"_options\"]) {\n    overflow-x: hidden !important;\n    overflow-y: auto !important;\n  }\n\n  body[data-dsh-skin=\"night-signal\"] :where([role=\"dialog\"] [class*=\"_section\"]) {\n    width: 100% !important;\n    min-width: 0 !important;\n    padding-right: 16px !important;\n    padding-left: 16px !important;\n  }\n\n  body[data-dsh-skin=\"night-signal\"] :where([role=\"dialog\"] [class*=\"_row\"]) {\n    width: 100% !important;\n    min-width: 0 !important;\n    flex-direction: column !important;\n    align-items: stretch !important;\n    gap: 12px !important;\n  }\n\n  body[data-dsh-skin=\"night-signal\"] :where([role=\"dialog\"] [class*=\"_rowText\"]) {\n    width: 100% !important;\n    min-width: 0 !important;\n  }\n\n  body[data-dsh-skin=\"night-signal\"] :where([role=\"dialog\"] [class*=\"_title\"], [role=\"dialog\"] [class*=\"_desc\"]) {\n    width: auto !important;\n    min-width: 0 !important;\n    overflow-wrap: anywhere;\n  }\n\n  body[data-dsh-skin=\"night-signal\"] :where([role=\"dialog\"] [class*=\"_selector\"], [role=\"dialog\"] [class*=\"_themeCube\"]) {\n    width: 100% !important;\n    max-width: none !important;\n  }\n\n  body[data-dsh-skin=\"night-signal\"] :where([role=\"dialog\"] [class*=\"_cubeRow\"]) {\n    width: 100% !important;\n    min-width: 0 !important;\n    flex-direction: column !important;\n  }\n}\n\n/* Desktop 0.2: contenteditable composer, readable controls and quiet focus. */\nbody[data-dsh-skin=\"night-signal\"] {\n  --dsw-font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif;\n  font-family: var(--dsw-font-family);\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where(button, input, textarea, select, [role=\"button\"], [role=\"tab\"]) {\n  font-family: inherit;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_composerStack\"] [contenteditable=\"true\"]) {\n  font-family: var(--dsw-font-family);\n  caret-color: var(--night-accent);\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]):focus-within {\n  border-color: var(--night-accent) !important;\n  box-shadow: 0 0 0 1px var(--night-accent), 0 8px 24px rgba(0, 0, 0, .08) !important;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:disabled) {\n  background: var(--night-line) !important;\n  border-color: var(--night-line) !important;\n  color: var(--night-muted) !important;\n  opacity: .65;\n  box-shadow: none !important;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([role=\"menu\"]) {\n  background: var(--night-surface);\n  border-color: var(--night-line);\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where(button, [role=\"button\"], [role=\"tab\"], a):focus-visible {\n  outline: 2px solid var(--night-accent) !important;\n  outline-offset: 2px;\n}\n\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_sidebarCol\"] [class*=\"_sectionHeader\"]) {\n  font-size: 11px;\n  letter-spacing: .04em;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  body[data-dsh-skin=\"night-signal\"] *,\n  body[data-dsh-skin=\"night-signal\"] *::before,\n  body[data-dsh-skin=\"night-signal\"] *::after {\n    animation: none !important;\n    scroll-behavior: auto !important;\n    transition: none !important;\n  }\n}\n";
    const TOKEN_OVERRIDES = Object.freeze({
  "--shiki-token-constant": {
    "light": "#4DABF7",
    "dark": "#4DABF7"
  },
  "--shiki-token-string": {
    "light": "#69DB7C",
    "dark": "#69DB7C"
  },
  "--shiki-token-comment": {
    "light": "#ADB5BD",
    "dark": "#ADB5BD"
  },
  "--shiki-token-keyword": {
    "light": "#FAA2C1",
    "dark": "#FAA2C1"
  },
  "--shiki-token-parameter": {
    "light": "#FFA94D",
    "dark": "#FFA94D"
  },
  "--shiki-token-function": {
    "light": "#B197FC",
    "dark": "#B197FC"
  },
  "--shiki-token-string-expression": {
    "light": "#8CE99A",
    "dark": "#8CE99A"
  },
  "--shiki-token-punctuation": {
    "light": "#CED4DA",
    "dark": "#CED4DA"
  },
  "--shiki-token-link": {
    "light": "#74C0FC",
    "dark": "#74C0FC"
  },
  "--dsw-alias-link": {
    "light": "#7BE9C4",
    "dark": "#7BE9C4"
  },
  "--dsw-alias-state-business-primary": {
    "light": "#5EE1B3",
    "dark": "#5EE1B3"
  },
  "--dsw-alias-state-business-tertiary": {
    "light": "#1B3B34",
    "dark": "#1B3B34"
  },
  "--dsw-alias-menu-icon": {
    "light": "#AEB8C4",
    "dark": "#AEB8C4"
  },
  "--dsw-alias-menu-group-header-fill": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-settings-card-fill": {
    "light": "#141922",
    "dark": "#141922"
  },
  "--dsw-alias-settings-card-stroke": {
    "light": "#293240",
    "dark": "#293240"
  },
  "--dsw-alias-button-info-fill": {
    "light": "#5EE1B3",
    "dark": "#5EE1B3"
  },
  "--dsw-alias-button-info-hover": {
    "light": "#7BE9C4",
    "dark": "#7BE9C4"
  },
  "--dsw-alias-button-ghost-active-border": {
    "light": "#3A4657",
    "dark": "#3A4657"
  },
  "--dsw-alias-button-ghost-active-fill": {
    "light": "#171E28",
    "dark": "#171E28"
  },
  "--dsw-alias-button-ghost-active-hover": {
    "light": "#222A36",
    "dark": "#222A36"
  },
  "--dsw-alias-bg-base": {
    "light": "#0C0F14",
    "dark": "#0C0F14"
  },
  "--dsw-alias-bg-layer-1": {
    "light": "#141922",
    "dark": "#141922"
  },
  "--dsw-alias-bg-layer-2": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-bg-layer-3": {
    "light": "#171E28",
    "dark": "#171E28"
  },
  "--dsw-alias-bg-module-platform": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-bg-multi-select": {
    "light": "#171E28",
    "dark": "#171E28"
  },
  "--dsw-alias-bg-overlay": {
    "light": "#171E28",
    "dark": "#171E28"
  },
  "--dsw-alias-bg-skeleton": {
    "light": "rgba(232, 237, 242, 0.08)",
    "dark": "rgba(232, 237, 242, 0.08)"
  },
  "--dsw-alias-border-inverted2": {
    "light": "#293240",
    "dark": "#293240"
  },
  "--dsw-alias-border-inverted": {
    "light": "#293240",
    "dark": "#293240"
  },
  "--dsw-alias-border-l1": {
    "light": "#222A36",
    "dark": "#222A36"
  },
  "--dsw-alias-border-l2-darkmode-thin": {
    "light": "#293240",
    "dark": "#293240"
  },
  "--dsw-alias-border-l2": {
    "light": "#293240",
    "dark": "#293240"
  },
  "--dsw-alias-border-l3": {
    "light": "#3A4657",
    "dark": "#3A4657"
  },
  "--dsw-alias-border-l4": {
    "light": "#8B96A5",
    "dark": "#8B96A5"
  },
  "--dsw-alias-brand-primary-invert": {
    "light": "#0C0F14",
    "dark": "#0C0F14"
  },
  "--dsw-alias-brand-primary-new-colorprimary-new-color": {
    "light": "#5EE1B3",
    "dark": "#5EE1B3"
  },
  "--dsw-alias-brand-primary": {
    "light": "#5EE1B3",
    "dark": "#5EE1B3"
  },
  "--dsw-alias-brand-text": {
    "light": "#5EE1B3",
    "dark": "#5EE1B3"
  },
  "--dsw-alias-button-contrast-fill": {
    "light": "#E8EDF2",
    "dark": "#E8EDF2"
  },
  "--dsw-alias-button-elevated-fill": {
    "light": "#171E28",
    "dark": "#171E28"
  },
  "--dsw-alias-button-floating-fill": {
    "light": "#171E28",
    "dark": "#171E28"
  },
  "--dsw-alias-button-floating-hover": {
    "light": "#222A36",
    "dark": "#222A36"
  },
  "--dsw-alias-button-primary-dimmed": {
    "light": "#293240",
    "dark": "#293240"
  },
  "--dsw-alias-button-primary-fill": {
    "light": "#5EE1B3",
    "dark": "#5EE1B3"
  },
  "--dsw-alias-button-primary-hover": {
    "light": "#7BE9C4",
    "dark": "#7BE9C4"
  },
  "--dsw-alias-interactive-bg-active": {
    "light": "#222A36",
    "dark": "#222A36"
  },
  "--dsw-alias-interactive-bg-hover-accent": {
    "light": "#1B3B34",
    "dark": "#1B3B34"
  },
  "--dsw-alias-interactive-bg-hover-solid": {
    "light": "#171E28",
    "dark": "#171E28"
  },
  "--dsw-alias-interactive-bg-hover": {
    "light": "rgba(94, 225, 179, 0.08)",
    "dark": "rgba(94, 225, 179, 0.08)"
  },
  "--dsw-alias-label-caption": {
    "light": "#8B96A5",
    "dark": "#8B96A5"
  },
  "--dsw-alias-label-dimmed": {
    "light": "#657182",
    "dark": "#657182"
  },
  "--dsw-alias-label-primary-bluish": {
    "light": "#E8EDF2",
    "dark": "#E8EDF2"
  },
  "--dsw-alias-label-primary-dimmed": {
    "light": "#AEB8C4",
    "dark": "#AEB8C4"
  },
  "--dsw-alias-label-primary-foreground": {
    "light": "#0C0F14",
    "dark": "#0C0F14"
  },
  "--dsw-alias-label-primary-inverted": {
    "light": "#0C0F14",
    "dark": "#0C0F14"
  },
  "--dsw-alias-label-primary": {
    "light": "#E8EDF2",
    "dark": "#E8EDF2"
  },
  "--dsw-alias-label-secondary": {
    "light": "#AEB8C4",
    "dark": "#AEB8C4"
  },
  "--dsw-alias-label-tertiary": {
    "light": "#8B96A5",
    "dark": "#8B96A5"
  },
  "--dsw-alias-markdown-citation": {
    "light": "#171E28",
    "dark": "#171E28"
  },
  "--dsw-alias-markdown-code-block-banner": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-markdown-code-block": {
    "light": "#090C10",
    "dark": "#090C10"
  },
  "--dsw-alias-markdown-code-segment-selected": {
    "light": "#222A36",
    "dark": "#222A36"
  },
  "--dsw-alias-markdown-code-segment-unselected": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-markdown-inline-code": {
    "light": "#171E28",
    "dark": "#171E28"
  },
  "--dsw-alias-markdown-placeholder": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-markdown-tag": {
    "light": "#171E28",
    "dark": "#171E28"
  },
  "--dsw-alias-scrollbar-bg-l1": {
    "light": "#293240",
    "dark": "#293240"
  },
  "--dsw-alias-scrollbar-bg-l2": {
    "light": "#293240",
    "dark": "#293240"
  },
  "--dsw-alias-scrollbar-hover-l1": {
    "light": "#5EE1B3",
    "dark": "#5EE1B3"
  },
  "--dsw-alias-scrollbar-hover-l2": {
    "light": "#5EE1B3",
    "dark": "#5EE1B3"
  },
  "--dsw-specific-bubble-highlight": {
    "light": "#1B3B34",
    "dark": "#1B3B34"
  },
  "--dsw-specific-bubble": {
    "light": "#141922",
    "dark": "#141922"
  },
  "--dsw-specific-input-major": {
    "light": "#141922",
    "dark": "#141922"
  },
  "--dsw-specific-login-input": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-specific-menu": {
    "light": "#141922",
    "dark": "#141922"
  },
  "--dsw-specific-selector": {
    "light": "#171E28",
    "dark": "#171E28"
  },
  "--dsw-specific-sidebar-fill": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-specific-sidebar-nav-item-active-accent": {
    "light": "#5EE1B3",
    "dark": "#5EE1B3"
  },
  "--dsw-specific-sidebar-nav-item-active": {
    "light": "#1B3B34",
    "dark": "#1B3B34"
  },
  "--dsw-specific-sidebar-nav-item-hover": {
    "light": "#171E28",
    "dark": "#171E28"
  },
  "--dsw-specific-tip": {
    "light": "#171E28",
    "dark": "#171E28"
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
