// Wrapped by build.mjs with the package ID and built-in themes.
const { createElement, useSyncExternalStore } = require('react')

const inject = ['theme', 'slots', 'locale']
const CONFIG_SLOT = 'plugins.bundle.config'
const STORAGE_KEY = 'dsh-skin.theme'
const ORIGINAL = ''
const themesById = new Map(THEMES.map((theme) => [theme.id, theme]))
const choices = [
  {
    id: ORIGINAL,
    name: 'Original appearance',
    nameZh: '原生外观',
    colors: ['#FFFFFF', '#20242B', '#4D6BFE'],
    preview: { layer: '#F5F7FA', surface: '#FFFFFF', line: '#DEE3EA', muted: '#737D8C', radius: 14, cardRadius: 24 },
  },
  ...THEMES,
]

function ThemeThumbnail({ theme }) {
  const [background, ink, accent] = theme.colors
  const { layer, surface, line, muted, radius = 3, cardRadius = 4 } = theme.preview
  return createElement('span', {
    className: 'dsh-skin-thumbnail',
    'aria-hidden': true,
    style: {
      '--mini-bg': background,
      '--mini-ink': ink,
      '--mini-accent': accent,
      '--mini-layer': layer,
      '--mini-surface': surface,
      '--mini-line': line,
      '--mini-muted': muted,
      '--mini-radius': `${radius / 2}px`,
      '--mini-card-radius': `${cardRadius / 2}px`,
    },
  },
  createElement('span', { className: 'dsh-skin-thumbnail-sidebar' },
    createElement('b'), createElement('i'), createElement('i'), createElement('i'),
  ),
  createElement('span', { className: 'dsh-skin-thumbnail-workspace' },
    createElement('span', { className: 'dsh-skin-thumbnail-title' }, 'Aa'),
    createElement('span', { className: 'dsh-skin-thumbnail-composer' }, createElement('i')),
  ))
}

function normalize(value) {
  return themesById.has(value) ? value : ORIGINAL
}

function storedTheme() {
  try {
    return normalize(window.localStorage.getItem(STORAGE_KEY))
  } catch {
    return ORIGINAL
  }
}

function applyTheme(ctx, theme) {
  // Share the DOM stack with older single-theme plugins while users migrate.
  const key = Symbol.for('dsh-skin.active-layers.v1')
  const state = document[key] ??= {
    previous: document.body.dataset.dshSkin,
    layers: [],
  }
  const layer = { id: theme.id }
  const style = document.createElement('style')
  style.dataset.plugin = PACKAGE_ID
  style.dataset.pluginCss = PACKAGE_ID + '/skin.css'
  style.textContent = theme.css

  const restoreTokens = ctx.theme.overrideTokens(PACKAGE_ID, theme.tokens)
  state.layers.push(layer)
  document.body.dataset.dshSkin = theme.id
  document.head.appendChild(style)

  return () => {
    style.remove()
    restoreTokens()
    const index = state.layers.indexOf(layer)
    if (index < 0) return
    state.layers.splice(index, 1)
    const active = state.layers.at(-1)?.id ?? state.previous
    if (active === undefined) delete document.body.dataset.dshSkin
    else document.body.dataset.dshSkin = active
    if (state.layers.length === 0) delete document[key]
  }
}

function apply(ctx) {
  let selected = ORIGINAL
  let disposeTheme
  const listeners = new Set()
  const subscribe = (listener) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }
  const getSelected = () => selected
  const subscribeLocale = (listener) => ctx.locale.subscribe(listener)
  const getLocale = () => ctx.locale.getSnapshot().active

  function switchTheme(id) {
    const next = normalize(id)
    if (next === selected) return
    const theme = themesById.get(next)
    disposeTheme?.()
    disposeTheme = theme ? applyTheme(ctx, theme) : undefined
    selected = next
    for (const listener of listeners) listener()
  }

  function selectTheme(id) {
    switchTheme(id)
    try {
      window.localStorage.setItem(STORAGE_KEY, selected)
    } catch {
      // The selected theme remains usable in this window if persistence is unavailable.
    }
  }

  function ThemePicker() {
    const value = useSyncExternalStore(subscribe, getSelected)
    const chinese = useSyncExternalStore(subscribeLocale, getLocale).toLowerCase().startsWith('zh')
    const label = chinese ? '主题' : 'Themes'
    return createElement('section', { className: 'dsh-skin-picker' },
      createElement('style', null, PICKER_CSS),
      createElement('h3', null, label),
      createElement('div', { className: 'dsh-skin-picker-grid', role: 'group', 'aria-label': label },
        ...choices.map((theme) => createElement('button', {
          key: theme.id,
          type: 'button',
          'data-theme': theme.id,
          'aria-pressed': theme.id === value,
          onClick: () => selectTheme(theme.id),
        },
        createElement(ThemeThumbnail, { theme }),
        createElement('span', { className: 'dsh-skin-picker-caption' },
          createElement('span', null, chinese ? theme.nameZh : theme.name),
          createElement('span', { className: 'dsh-skin-picker-check', 'aria-hidden': true }),
        ))),
      ),
    )
  }

  ctx.effect(() => {
    switchTheme(storedTheme())
    const syncTheme = (event) => {
      if (event.key === STORAGE_KEY || event.key === null) switchTheme(storedTheme())
    }
    window.addEventListener('storage', syncTheme)
    return () => {
      window.removeEventListener('storage', syncTheme)
      disposeTheme?.()
    }
  }, PACKAGE_ID + ': apply selected theme')

  ctx.slots.inject(CONFIG_SLOT, () => ctx.slots.register(
    { name: CONFIG_SLOT, key: PACKAGE_ID },
    ThemePicker,
  ))
}

return { name: PACKAGE_ID, inject, apply }
