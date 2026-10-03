window.__ModuleLoader__.load({
  id: "dsh-skin-night-signal",
  factory: () => {
    var module = { exports: {} };
    const PACKAGE_ID = "dsh-skin-night-signal";
    const SKIN_ID = "night-signal";
    const STYLE_ID = "dsh-skin-night-signal/skin.css";
    const CSS = "/* Night Signal · 夜航信号. Fixed palette; all rules scoped to the active plugin. */\nbody[data-dsh-skin=\"night-signal\"] {\n  --skin-bg: #0C0F14; --skin-ink: #E8EDF2; --skin-accent: #5EE1B3;\n  --skin-surface: #141922; --skin-layer: #10151C; --skin-line: #364353;\n  --skin-muted: #9BA7B6; --skin-action: #5EE1B3; --skin-on-action: #0C0F14;\n  --skin-focus: #5EE1B3;\n  --skin-radius: 6px; --skin-card-radius: 12px; --skin-shadow: 0 12px 32px #00000040;\n  --dsw-font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif;\n  color-scheme: dark;\n  background: var(--skin-bg); color: var(--skin-ink); font-family: var(--dsw-font-family);\n}\nbody[data-dsh-skin=\"night-signal\"] :where(button, input, textarea, select, [role=\"button\"], [role=\"tab\"]) { font-family: inherit; border-radius: var(--skin-radius); }\nbody[data-dsh-skin=\"night-signal\"] :where(code, pre, kbd, samp) { font-family: ui-monospace, \"SF Mono\", Menlo, Consolas, monospace; }\nbody[data-dsh-skin=\"night-signal\"] :where(button, a, input, textarea, select, [role=\"button\"], [role=\"tab\"], [contenteditable=\"true\"]):focus-visible { outline: 2px solid var(--skin-focus) !important; outline-offset: 3px; }\nbody[data-dsh-skin=\"night-signal\"] :where(button[type=\"submit\"]:not(:disabled)) { background: var(--skin-action) !important; color: var(--skin-on-action) !important; }\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_sidebarCol\"]) { background: var(--skin-layer) !important; border-right: 1px solid var(--skin-line); }\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_sidebarCol\"] button[class*=\"_brand\"]) { min-height: 48px; border-bottom: 1px solid var(--skin-line); }\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]) { min-height: 40px; border: 1px solid var(--skin-line) !important; border-radius: var(--skin-radius) !important; background: var(--skin-surface) !important; color: var(--skin-ink) !important; font-weight: 600; }\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_sidebarCol\"] [class*=\"_sectionHeader\"]) { color: var(--skin-muted) !important; font-size: 11px; letter-spacing: .04em; }\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"][aria-selected=\"true\"]) { box-shadow: inset 3px 0 var(--skin-action); color: var(--skin-ink) !important; }\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_heroGlow\"]) { display: none !important; }\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_composerStack\"] [class*=\"_root\"][class*=\"_hero\"]) { border: 0 !important; background: transparent !important; box-shadow: none !important; }\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]) { border: 1px solid var(--skin-line) !important; border-radius: var(--skin-card-radius) !important; background: var(--skin-surface) !important; box-shadow: var(--skin-shadow) !important; }\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]):focus-within { border-color: var(--skin-action) !important; box-shadow: 0 0 0 1px var(--skin-action), var(--skin-shadow) !important; }\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_composerStack\"] [contenteditable=\"true\"], [class*=\"_composerStack\"] textarea) { font-family: var(--dsw-font-family); caret-color: var(--skin-focus); }\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_composerStack\"] button[class*=\"_add\"]) { background: var(--skin-layer) !important; border: 1px solid var(--skin-line) !important; }\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]) { width: 38px; height: 38px; border: 1px solid var(--skin-action) !important; border-radius: var(--skin-radius) !important; background: var(--skin-action) !important; color: var(--skin-on-action) !important; }\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:disabled) { background: var(--skin-layer) !important; border-color: var(--skin-line) !important; color: var(--skin-muted) !important; opacity: .65; box-shadow: none !important; }\nbody[data-dsh-skin=\"night-signal\"] :where([role=\"dialog\"]) { border: 1px solid var(--skin-line); border-radius: var(--skin-card-radius) !important; background: var(--skin-surface) !important; box-shadow: var(--skin-shadow); }\nbody[data-dsh-skin=\"night-signal\"] :where([role=\"menu\"], [role=\"listbox\"]) { border: 1px solid var(--skin-line); background: var(--skin-surface); border-radius: var(--skin-radius); }\nbody[data-dsh-skin=\"night-signal\"] :where(pre) { border: 1px solid var(--skin-line); border-radius: var(--skin-radius); background: var(--skin-surface) !important; }\nbody[data-dsh-skin=\"night-signal\"] :where(blockquote) { border-left: 2px solid var(--skin-action); }\nbody[data-dsh-skin=\"night-signal\"] ::selection { background: var(--skin-action); color: var(--skin-on-action); }\n@media (hover: hover) {\n  body[data-dsh-skin=\"night-signal\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]:hover) { background: var(--skin-bg) !important; border-color: var(--skin-action) !important; }\n  body[data-dsh-skin=\"night-signal\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:not(:disabled):hover) { filter: brightness(1.08); }\n}\n\n/* Signature details: terminal */\nbody[data-dsh-skin=\"night-signal\"] [class*=\"_sidebarCol\"] button[class*=\"_newSession\"] { border-color: #5EE1B3 !important; background: transparent !important; color: #5EE1B3 !important; }\nbody[data-dsh-skin=\"night-signal\"] [class*=\"_sectionHeader\"] { font-family: ui-monospace, monospace; text-transform: uppercase; }\n\n@media (prefers-reduced-motion: reduce) {\n  body[data-dsh-skin=\"night-signal\"] *, body[data-dsh-skin=\"night-signal\"] *::before, body[data-dsh-skin=\"night-signal\"] *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }\n}\n\n/* Preserve switch affordance and align selection geometry with the skin. */\nbody[data-dsh-skin=\"night-signal\"] :where(button[role=\"switch\"]) { border-radius: 999px !important; }\nbody[data-dsh-skin=\"night-signal\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"]) { border-radius: var(--skin-radius); }\n\n/* Focus must remain visible above every signature surface rule. */\nbody[data-dsh-skin=\"night-signal\"] [class*=\"_composerStack\"] :is([class$=\"_card\"], [class*=\"_card \"]):focus-within {\n  border-color: var(--skin-focus) !important;\n  box-shadow: 0 0 0 1px var(--skin-focus), var(--skin-shadow) !important;\n}\n";
    const TOKEN_OVERRIDES = Object.freeze({
  "--shiki-token-constant": {
    "light": "#82B7FF",
    "dark": "#82B7FF"
  },
  "--shiki-token-string": {
    "light": "#99D9AC",
    "dark": "#99D9AC"
  },
  "--shiki-token-comment": {
    "light": "#A7B1C2",
    "dark": "#A7B1C2"
  },
  "--shiki-token-keyword": {
    "light": "#F4A3C1",
    "dark": "#F4A3C1"
  },
  "--shiki-token-parameter": {
    "light": "#FFC18C",
    "dark": "#FFC18C"
  },
  "--shiki-token-function": {
    "light": "#C8B2FF",
    "dark": "#C8B2FF"
  },
  "--shiki-token-string-expression": {
    "light": "#99D9AC",
    "dark": "#99D9AC"
  },
  "--shiki-token-punctuation": {
    "light": "#CCD5E3",
    "dark": "#CCD5E3"
  },
  "--shiki-token-link": {
    "light": "#82C5FF",
    "dark": "#82C5FF"
  },
  "--dsw-alias-link": {
    "light": "#5EE1B3",
    "dark": "#5EE1B3"
  },
  "--dsw-alias-state-business-primary": {
    "light": "#5EE1B3",
    "dark": "#5EE1B3"
  },
  "--dsw-alias-state-business-tertiary": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-menu-icon": {
    "light": "#9BA7B6",
    "dark": "#9BA7B6"
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
    "light": "#364353",
    "dark": "#364353"
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
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-bg-module-platform": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-bg-multi-select": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-bg-overlay": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-bg-skeleton": {
    "light": "#364353",
    "dark": "#364353"
  },
  "--dsw-alias-border-inverted2": {
    "light": "#364353",
    "dark": "#364353"
  },
  "--dsw-alias-border-inverted": {
    "light": "#364353",
    "dark": "#364353"
  },
  "--dsw-alias-border-l1": {
    "light": "#364353",
    "dark": "#364353"
  },
  "--dsw-alias-border-l2-darkmode-thin": {
    "light": "#364353",
    "dark": "#364353"
  },
  "--dsw-alias-border-l2": {
    "light": "#364353",
    "dark": "#364353"
  },
  "--dsw-alias-border-l3": {
    "light": "#364353",
    "dark": "#364353"
  },
  "--dsw-alias-border-l4": {
    "light": "#364353",
    "dark": "#364353"
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
    "light": "#141922",
    "dark": "#141922"
  },
  "--dsw-alias-button-floating-fill": {
    "light": "#141922",
    "dark": "#141922"
  },
  "--dsw-alias-button-floating-hover": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-button-ghost-active-border": {
    "light": "#364353",
    "dark": "#364353"
  },
  "--dsw-alias-button-ghost-active-fill": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-button-ghost-active-hover": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-button-info-fill": {
    "light": "#5EE1B3",
    "dark": "#5EE1B3"
  },
  "--dsw-alias-button-info-hover": {
    "light": "#5EE1B3",
    "dark": "#5EE1B3"
  },
  "--dsw-alias-button-primary-dimmed": {
    "light": "#364353",
    "dark": "#364353"
  },
  "--dsw-alias-button-primary-fill": {
    "light": "#5EE1B3",
    "dark": "#5EE1B3"
  },
  "--dsw-alias-button-primary-hover": {
    "light": "#5EE1B3",
    "dark": "#5EE1B3"
  },
  "--dsw-alias-interactive-bg-active": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-interactive-bg-hover-accent": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-interactive-bg-hover-solid": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-interactive-bg-hover": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-label-caption": {
    "light": "#9BA7B6",
    "dark": "#9BA7B6"
  },
  "--dsw-alias-label-dimmed": {
    "light": "#9BA7B6",
    "dark": "#9BA7B6"
  },
  "--dsw-alias-label-primary-bluish": {
    "light": "#E8EDF2",
    "dark": "#E8EDF2"
  },
  "--dsw-alias-label-primary-dimmed": {
    "light": "#9BA7B6",
    "dark": "#9BA7B6"
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
    "light": "#9BA7B6",
    "dark": "#9BA7B6"
  },
  "--dsw-alias-label-tertiary": {
    "light": "#9BA7B6",
    "dark": "#9BA7B6"
  },
  "--dsw-alias-markdown-citation": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-markdown-code-block-banner": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-markdown-code-block": {
    "light": "#141922",
    "dark": "#141922"
  },
  "--dsw-alias-markdown-code-segment-selected": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-markdown-code-segment-unselected": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-markdown-inline-code": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-markdown-placeholder": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-markdown-tag": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-alias-scrollbar-bg-l1": {
    "light": "#364353",
    "dark": "#364353"
  },
  "--dsw-alias-scrollbar-bg-l2": {
    "light": "#364353",
    "dark": "#364353"
  },
  "--dsw-alias-scrollbar-hover-l1": {
    "light": "#9BA7B6",
    "dark": "#9BA7B6"
  },
  "--dsw-alias-scrollbar-hover-l2": {
    "light": "#9BA7B6",
    "dark": "#9BA7B6"
  },
  "--dsw-specific-bubble-highlight": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-specific-bubble": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-specific-input-major": {
    "light": "#141922",
    "dark": "#141922"
  },
  "--dsw-specific-login-input": {
    "light": "#0C0F14",
    "dark": "#0C0F14"
  },
  "--dsw-specific-menu": {
    "light": "#141922",
    "dark": "#141922"
  },
  "--dsw-specific-selector": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-specific-sidebar-fill": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-specific-sidebar-nav-item-active-accent": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-specific-sidebar-nav-item-active": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-specific-sidebar-nav-item-hover": {
    "light": "#10151C",
    "dark": "#10151C"
  },
  "--dsw-specific-tip": {
    "light": "#10151C",
    "dark": "#10151C"
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
