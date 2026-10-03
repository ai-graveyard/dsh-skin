window.__ModuleLoader__.load({
  id: "dsh-skin-frosted-tide",
  factory: () => {
    var module = { exports: {} };
    const PACKAGE_ID = "dsh-skin-frosted-tide";
    const SKIN_ID = "frosted-tide";
    const STYLE_ID = "dsh-skin-frosted-tide/skin.css";
    const CSS = "/* Frosted Tide · 雾潮. Fixed palette; all rules scoped to the active plugin. */\nbody[data-dsh-skin=\"frosted-tide\"] {\n  --bg0: #0d0f26;\n  --bg1: #171a3d;\n  --fg: #f4f5ff;\n  --muted: rgba(230,233,255,.68);\n  --faint: rgba(230,233,255,.42);\n  --pink: #FF6B9D;\n  --teal: #4ECDC4;\n  --indigo: #667EEA;\n  --violet: #9b6bff;\n  --glass: rgba(255,255,255,.10);\n  --glass-strong: rgba(255,255,255,.16);\n  --stroke: rgba(255,255,255,.22);\n  --stroke-soft: rgba(255,255,255,.12);\n  --shadow: 0 24px 60px rgba(4,7,28,.5);\n  --sans: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"PingFang SC\", \"Microsoft YaHei\", sans-serif;\n  --skin-bg: #0D0F26; --skin-ink: #F4F5FF; --skin-accent: #4ECDC4;\n  --skin-surface: #1D2342; --skin-layer: #171A3D; --skin-line: #505775;\n  --skin-muted: #B4BDD9; --skin-action: #4ECDC4; --skin-on-action: #0D0F26;\n  --skin-focus: #4ECDC4;\n  --skin-radius: 12px; --skin-card-radius: 22px; --skin-shadow: 0 16px 40px #04071c66;\n  --dsw-font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif;\n  color-scheme: dark;\n  background: var(--skin-bg); color: var(--skin-ink); font-family: var(--dsw-font-family);\n}\nbody[data-dsh-skin=\"frosted-tide\"] :where(button, input, textarea, select, [role=\"button\"], [role=\"tab\"]) { font-family: inherit; border-radius: var(--skin-radius); }\nbody[data-dsh-skin=\"frosted-tide\"] :where(code, pre, kbd, samp) { font-family: ui-monospace, \"SF Mono\", Menlo, Consolas, monospace; }\nbody[data-dsh-skin=\"frosted-tide\"] :where(button, a, input, textarea, select, [role=\"button\"], [role=\"tab\"], [contenteditable=\"true\"]):focus-visible { outline: 2px solid var(--skin-focus) !important; outline-offset: 3px; }\nbody[data-dsh-skin=\"frosted-tide\"] :where(button[type=\"submit\"]:not(:disabled)) { background: var(--skin-action) !important; color: var(--skin-on-action) !important; }\nbody[data-dsh-skin=\"frosted-tide\"] :where([class*=\"_sidebarCol\"]) { background: var(--skin-layer) !important; border-right: 1px solid var(--skin-line); }\nbody[data-dsh-skin=\"frosted-tide\"] :where([class*=\"_sidebarCol\"] button[class*=\"_brand\"]) { min-height: 48px; border-bottom: 1px solid var(--skin-line); }\nbody[data-dsh-skin=\"frosted-tide\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]) { min-height: 40px; border: 1px solid var(--skin-line) !important; border-radius: var(--skin-radius) !important; background: var(--skin-surface) !important; color: var(--skin-ink) !important; font-weight: 600; }\nbody[data-dsh-skin=\"frosted-tide\"] :where([class*=\"_sidebarCol\"] [class*=\"_sectionHeader\"]) { color: var(--skin-muted) !important; font-size: 11px; letter-spacing: .04em; }\nbody[data-dsh-skin=\"frosted-tide\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"][aria-selected=\"true\"]) { box-shadow: inset 3px 0 var(--skin-action); color: var(--skin-ink) !important; }\nbody[data-dsh-skin=\"frosted-tide\"] :where([class*=\"_heroGlow\"]) { display: none !important; }\nbody[data-dsh-skin=\"frosted-tide\"] :where([class*=\"_composerStack\"] [class*=\"_root\"][class*=\"_hero\"]) { border: 0 !important; background: transparent !important; box-shadow: none !important; }\nbody[data-dsh-skin=\"frosted-tide\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]) { border: 1px solid var(--skin-line) !important; border-radius: var(--skin-card-radius) !important; background: var(--skin-surface) !important; box-shadow: var(--skin-shadow) !important; }\nbody[data-dsh-skin=\"frosted-tide\"] :where([class*=\"_composerStack\"] [class$=\"_card\"], [class*=\"_composerStack\"] [class*=\"_card \"]):focus-within { border-color: var(--skin-action) !important; box-shadow: 0 0 0 1px var(--skin-action), var(--skin-shadow) !important; }\nbody[data-dsh-skin=\"frosted-tide\"] :where([class*=\"_composerStack\"] [contenteditable=\"true\"], [class*=\"_composerStack\"] textarea) { font-family: var(--dsw-font-family); caret-color: var(--skin-focus); }\nbody[data-dsh-skin=\"frosted-tide\"] :where([class*=\"_composerStack\"] button[class*=\"_add\"]) { background: var(--skin-layer) !important; border: 1px solid var(--skin-line) !important; }\nbody[data-dsh-skin=\"frosted-tide\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]) { width: 38px; height: 38px; border: 1px solid var(--skin-action) !important; border-radius: var(--skin-radius) !important; background: var(--skin-action) !important; color: var(--skin-on-action) !important; }\nbody[data-dsh-skin=\"frosted-tide\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:disabled) { background: var(--skin-layer) !important; border-color: var(--skin-line) !important; color: var(--skin-muted) !important; opacity: .65; box-shadow: none !important; }\nbody[data-dsh-skin=\"frosted-tide\"] :where([role=\"dialog\"]) { border: 1px solid var(--skin-line); border-radius: var(--skin-card-radius) !important; background: var(--skin-surface) !important; box-shadow: var(--skin-shadow); }\nbody[data-dsh-skin=\"frosted-tide\"] :where([role=\"menu\"], [role=\"listbox\"]) { border: 1px solid var(--skin-line); background: var(--skin-surface); border-radius: var(--skin-radius); }\nbody[data-dsh-skin=\"frosted-tide\"] :where(pre) { border: 1px solid var(--skin-line); border-radius: var(--skin-radius); background: var(--skin-surface) !important; }\nbody[data-dsh-skin=\"frosted-tide\"] :where(blockquote) { border-left: 2px solid var(--skin-action); }\nbody[data-dsh-skin=\"frosted-tide\"] ::selection { background: var(--skin-action); color: var(--skin-on-action); }\n@media (hover: hover) {\n  body[data-dsh-skin=\"frosted-tide\"] :where([class*=\"_sidebarCol\"] button[class*=\"_newSession\"]:hover) { background: var(--skin-bg) !important; border-color: var(--skin-action) !important; }\n  body[data-dsh-skin=\"frosted-tide\"] :where([class*=\"_composerStack\"] button[class*=\"_primary\"]:not(:disabled):hover) { filter: brightness(1.08); }\n}\n\n/* Signature details: glassmorphism */\nbody[data-dsh-skin=\"frosted-tide\"] [class*=\"_sidebarCol\"] { background: linear-gradient(155deg, #667eea25, #171a3de0 55%, #4ecdc415) !important; }\nbody[data-dsh-skin=\"frosted-tide\"] [class*=\"_composerStack\"] [class$=\"_card\"] { background: linear-gradient(120deg, #667eea26, #1d2342dd 65%, #4ecdc41a) !important; border-color: #ffffff38 !important; -webkit-backdrop-filter: blur(20px) saturate(150%); backdrop-filter: blur(20px) saturate(150%); box-shadow: inset 0 1px 0 #ffffff1f, 0 16px 40px #04071c66 !important; }\nbody[data-dsh-skin=\"frosted-tide\"] [class*=\"_sidebarCol\"] button[class*=\"_newSession\"] { background: #ffffff12 !important; border-color: #ffffff38 !important; }\nbody[data-dsh-skin=\"frosted-tide\"] [role=\"dialog\"] { background: #1D2342 !important; }\n\n@media (prefers-reduced-motion: reduce) {\n  body[data-dsh-skin=\"frosted-tide\"] *, body[data-dsh-skin=\"frosted-tide\"] *::before, body[data-dsh-skin=\"frosted-tide\"] *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }\n}\n\n/* Preserve switch affordance and align selection geometry with the skin. */\nbody[data-dsh-skin=\"frosted-tide\"] :where(button[role=\"switch\"]) { border-radius: 999px !important; }\nbody[data-dsh-skin=\"frosted-tide\"] :where([class*=\"_sidebarCol\"] [role=\"treeitem\"]) { border-radius: var(--skin-radius); }\n\n/* Focus must remain visible above every signature surface rule. */\nbody[data-dsh-skin=\"frosted-tide\"] [class*=\"_composerStack\"] :is([class$=\"_card\"], [class*=\"_card \"]):focus-within {\n  border-color: var(--skin-focus) !important;\n  box-shadow: 0 0 0 1px var(--skin-focus), var(--skin-shadow) !important;\n}\n";
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
    "light": "#4ECDC4",
    "dark": "#4ECDC4"
  },
  "--dsw-alias-state-business-primary": {
    "light": "#4ECDC4",
    "dark": "#4ECDC4"
  },
  "--dsw-alias-state-business-tertiary": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-menu-icon": {
    "light": "#B4BDD9",
    "dark": "#B4BDD9"
  },
  "--dsw-alias-menu-group-header-fill": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-settings-card-fill": {
    "light": "#1D2342",
    "dark": "#1D2342"
  },
  "--dsw-alias-settings-card-stroke": {
    "light": "#505775",
    "dark": "#505775"
  },
  "--dsw-alias-bg-base": {
    "light": "#0D0F26",
    "dark": "#0D0F26"
  },
  "--dsw-alias-bg-layer-1": {
    "light": "#1D2342",
    "dark": "#1D2342"
  },
  "--dsw-alias-bg-layer-2": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-bg-layer-3": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-bg-module-platform": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-bg-multi-select": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-bg-overlay": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-bg-skeleton": {
    "light": "#505775",
    "dark": "#505775"
  },
  "--dsw-alias-border-inverted2": {
    "light": "#505775",
    "dark": "#505775"
  },
  "--dsw-alias-border-inverted": {
    "light": "#505775",
    "dark": "#505775"
  },
  "--dsw-alias-border-l1": {
    "light": "#505775",
    "dark": "#505775"
  },
  "--dsw-alias-border-l2-darkmode-thin": {
    "light": "#505775",
    "dark": "#505775"
  },
  "--dsw-alias-border-l2": {
    "light": "#505775",
    "dark": "#505775"
  },
  "--dsw-alias-border-l3": {
    "light": "#505775",
    "dark": "#505775"
  },
  "--dsw-alias-border-l4": {
    "light": "#505775",
    "dark": "#505775"
  },
  "--dsw-alias-brand-primary-invert": {
    "light": "#0D0F26",
    "dark": "#0D0F26"
  },
  "--dsw-alias-brand-primary-new-colorprimary-new-color": {
    "light": "#4ECDC4",
    "dark": "#4ECDC4"
  },
  "--dsw-alias-brand-primary": {
    "light": "#4ECDC4",
    "dark": "#4ECDC4"
  },
  "--dsw-alias-brand-text": {
    "light": "#4ECDC4",
    "dark": "#4ECDC4"
  },
  "--dsw-alias-button-contrast-fill": {
    "light": "#F4F5FF",
    "dark": "#F4F5FF"
  },
  "--dsw-alias-button-elevated-fill": {
    "light": "#1D2342",
    "dark": "#1D2342"
  },
  "--dsw-alias-button-floating-fill": {
    "light": "#1D2342",
    "dark": "#1D2342"
  },
  "--dsw-alias-button-floating-hover": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-button-ghost-active-border": {
    "light": "#505775",
    "dark": "#505775"
  },
  "--dsw-alias-button-ghost-active-fill": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-button-ghost-active-hover": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-button-info-fill": {
    "light": "#4ECDC4",
    "dark": "#4ECDC4"
  },
  "--dsw-alias-button-info-hover": {
    "light": "#4ECDC4",
    "dark": "#4ECDC4"
  },
  "--dsw-alias-button-primary-dimmed": {
    "light": "#505775",
    "dark": "#505775"
  },
  "--dsw-alias-button-primary-fill": {
    "light": "#4ECDC4",
    "dark": "#4ECDC4"
  },
  "--dsw-alias-button-primary-hover": {
    "light": "#4ECDC4",
    "dark": "#4ECDC4"
  },
  "--dsw-alias-interactive-bg-active": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-interactive-bg-hover-accent": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-interactive-bg-hover-solid": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-interactive-bg-hover": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-label-caption": {
    "light": "#B4BDD9",
    "dark": "#B4BDD9"
  },
  "--dsw-alias-label-dimmed": {
    "light": "#B4BDD9",
    "dark": "#B4BDD9"
  },
  "--dsw-alias-label-primary-bluish": {
    "light": "#F4F5FF",
    "dark": "#F4F5FF"
  },
  "--dsw-alias-label-primary-dimmed": {
    "light": "#B4BDD9",
    "dark": "#B4BDD9"
  },
  "--dsw-alias-label-primary-foreground": {
    "light": "#0D0F26",
    "dark": "#0D0F26"
  },
  "--dsw-alias-label-primary-inverted": {
    "light": "#0D0F26",
    "dark": "#0D0F26"
  },
  "--dsw-alias-label-primary": {
    "light": "#F4F5FF",
    "dark": "#F4F5FF"
  },
  "--dsw-alias-label-secondary": {
    "light": "#B4BDD9",
    "dark": "#B4BDD9"
  },
  "--dsw-alias-label-tertiary": {
    "light": "#B4BDD9",
    "dark": "#B4BDD9"
  },
  "--dsw-alias-markdown-citation": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-markdown-code-block-banner": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-markdown-code-block": {
    "light": "#1D2342",
    "dark": "#1D2342"
  },
  "--dsw-alias-markdown-code-segment-selected": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-markdown-code-segment-unselected": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-markdown-inline-code": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-markdown-placeholder": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-markdown-tag": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-alias-scrollbar-bg-l1": {
    "light": "#505775",
    "dark": "#505775"
  },
  "--dsw-alias-scrollbar-bg-l2": {
    "light": "#505775",
    "dark": "#505775"
  },
  "--dsw-alias-scrollbar-hover-l1": {
    "light": "#B4BDD9",
    "dark": "#B4BDD9"
  },
  "--dsw-alias-scrollbar-hover-l2": {
    "light": "#B4BDD9",
    "dark": "#B4BDD9"
  },
  "--dsw-specific-bubble-highlight": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-specific-bubble": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-specific-input-major": {
    "light": "#1D2342",
    "dark": "#1D2342"
  },
  "--dsw-specific-login-input": {
    "light": "#0D0F26",
    "dark": "#0D0F26"
  },
  "--dsw-specific-menu": {
    "light": "#1D2342",
    "dark": "#1D2342"
  },
  "--dsw-specific-selector": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-specific-sidebar-fill": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-specific-sidebar-nav-item-active-accent": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-specific-sidebar-nav-item-active": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-specific-sidebar-nav-item-hover": {
    "light": "#171A3D",
    "dark": "#171A3D"
  },
  "--dsw-specific-tip": {
    "light": "#171A3D",
    "dark": "#171A3D"
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
