# Desktop skin acceptance — 0.3.1

Target: DeepSeek Harness **macOS desktop 0.2.0-rc.2**, build `5e9e301dd9dc8923b2762f76dacfc5751f6ca851`.
Completed: **2026-10-04**, Asia/Shanghai.

## Result

All ten skins passed the native desktop checks listed below. Each was enabled individually in the installed desktop client and inspected using Computer Use. The collection is ready for local use and recommendation on this tested client version. At the completion of this acceptance pass, packages were prepared locally; npm/GitHub release publication and site deployment were not part of the pass. This record does not track later Git pushes or deployment status.

| Skin | Composer, draft, clear and focus | General settings, appearance and dropdown | Rich conversation and half-screen | Plugin details and reactivation |
| --- | --- | --- | --- | --- |
| Braun Control / 工业控制 | Passed | Passed | Passed | Passed |
| Night Signal / 夜航信号 | Passed | Passed | Passed | Passed |
| Alpine Light / 雪岭 | Passed | Passed | Passed | Passed |
| Material Orchid / 兰序 | Passed | Passed | Passed | Passed |
| Swiss Grid / 瑞士网格 | Passed | Passed | Passed | Passed |
| Nordic Linen / 北欧亚麻 | Passed | Passed | Passed | Passed |
| Washi Ink / 和纸墨 | Passed | Passed | Passed | Passed |
| Editorial Paper / 纸上编辑 | Passed | Passed | Passed | Passed |
| Studio Block / 积木工作室 | Passed | Passed | Passed | Passed |
| Frosted Tide / 雾潮 | Passed | Passed | Passed | Passed |

## Native checks performed

- Empty new session: Send disabled. Multiline Chinese/English draft: Send enabled. Draft clearing and visible keyboard focus were checked without sending a model request.
- General settings: selected/unselected controls, switches, language dropdown and Escape dismissal. Light, Dark and System were exercised beneath each skin's fixed palette; System was restored.
- Existing conversations: headings, inline code, fenced syntax-highlighted HTML and tables. Wide and half-screen windows, expanded sidebar and collapsed reading layout were inspected for readability and overflow.
- Plugin details: bilingual name, icon, version 0.3.1 and one running component. Each skin was disabled and subsequently enabled again; switching between light and dark skins restored the expected palette and geometry.
- Tool-trace inspection was additionally performed with Braun Control. This is not a claim that every possible tool-card subtype was exercised under every skin.
- Cold launches confirmed Studio Block's corrected branding and Alpine Light's persisted activation. This was a shared persistence check, not ten separate cold-start runs.
- All ten were finally disabled; the plugin switches and desktop profile confirmed the original all-disabled configuration, and the native default appearance returned.
- The user's unsent draft was preserved and restored, with an exact 29-character readback. Private conversation/account screenshots were viewed inline and were not saved into repository assets.

## Automated verification

- Ten manifests, independent package identifiers, exported registrations and source/bundle consistency.
- Scoped structural CSS, disabled-send styles, contenteditable support and reduced-motion rules.
- Activation, token registration, style insertion and complete disposal for every bundle.
- Overlapping skins, forward/reverse disposal and duplicate activation/hot reload.
- **160 text contrast pairs** at 4.5:1 or better and **30 focus/background pairs** at 3:1 or better.
- English/Chinese metadata, self-contained SVG icons and npm package contents.
- All ten installed 0.3.1 runtime/CSS/token/icon/locale files matched source byte-for-byte.
- TypeScript and Next.js production static build, including all ten detail routes.
- Ten versioned npm tarballs with release manifest and SHA-256 checksums.

## Corrections made during acceptance

- Preserved round switch tracks instead of inheriting rectangular button geometry.
- Increased Washi Ink secondary-text contrast on the sidebar.
- Darkened light-theme code constants and parameters.
- Changed Studio Block text links and focus/caret to dark blue; separated its inverted branding label from the primary-action foreground to fix black-on-black HARNESS lettering.
- Made composer focus styling outrank every signature surface rule.
- Applied paper-style typography to the desktop's actual hero-title element.
- Bumped the installed bundles to 0.3.1 after identifying stale package-manager content at the old 0.3.0 tarball path. Release packaging retains older tarballs needed for local-file upgrades.

## Scope and tooling notes

This acceptance covers the named macOS client build and the states above. Windows/Linux clients, future DSH versions, model inference, every tool type, and all third-party plugin combinations are outside this pass. The palettes are intentionally fixed light or dark designs.

Computer Use intermittently returned `elementHasNoFrame`, `noWindowsAvailable`, ScreenCaptureKit errors and stale frames. A stale frame was never accepted as evidence for a different page or skin. Fresh synchronized captures were obtained through native foreground/window/full-screen actions before completing the corresponding visual checks. These tool failures were not attributed to the skins.

## Design references

The local Design Vibes references informed the palettes and geometry. Industrial functionalism follows [Dieter Rams's principles](https://www.vitsoe.com/us/about/good-design); tonal surfaces follow [Material colour roles](https://m3.material.io/styles/color/the-color-system/color-roles); translucent layering is informed by [Apple's materials guidance](https://developer.apple.com/design/human-interface-guidelines/materials). Names identify influences, not affiliation or endorsement. “Official recommendation” refers to the DSH Skin project's collection.
