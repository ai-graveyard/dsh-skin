# Desktop verification

## Skin Collection 0.4.6

On 2026-11-19 (Asia/Shanghai), an isolated macOS profile on DeepSeek Harness Desktop **0.2.2-rc.5** was upgraded from the `dsh-skin` 0.4.5 archive to the 0.4.6 archive. The plugin list and detail page showed 皮肤大全 in Chinese and Skin Collection in English. The saved Swiss Grid selection carried over, all ten theme cards and Original appearance were present, and switching to Original appearance and then Night Signal worked after the upgrade.

The updated 0.4.6 archive was reinstalled in the same isolated profile. The Original appearance card tracked Light, Dark, and System, including emulated system colour-scheme changes while Alpine Light stayed active. Swiss Grid, Nordic Linen, Washi Ink, and Editorial Paper showed their desktop control colours in the picker. The command menu kept one outer frame and a transparent scroll viewport in all ten themes. Frosted Tide and Studio Block were also checked visually. All eleven cards could be selected at a 530 px viewport without horizontal overflow.

The Whale Courier build added an eleventh theme. The bundled WebP decoded offline in the picker and on the new-conversation screen. The desktop view at 1280 px and the emulated 530 px viewport kept the illustration above the native title and the composer usable. Switching to Night Signal removed the illustration, and reopening the desktop client restored Whale Courier. The theme card rendered as 鲸鱼娘 after switching the app to Chinese. The local website export also displayed the illustration and composer preview at 1280 px and 390 px.

The expanded Whale Courier build decoded its second WebP in the sidebar footer. The footer reserved its own space outside the session scroller. The 530 px viewport hid the sidebar portrait and kept the new-conversation illustration and the composer wax seal visible. The portrait and seal ignored pointer input. Theme switching, restart persistence, and the command menu passed the same checks on the new archive.

The sidebar More and Account menus kept the Whale Courier pale blue surface under both native Light and Dark settings. The composer command menu retained its single frame.

The expanded Whale Courier audit exercised 25 surfaces in each native appearance mode. It covered General, Models, Built-ins and Agent Presets settings, keyboard shortcuts and font controls, sidebar and workspace menus, model selection and composer permissions, plugin details and the add-source menu, and the automation list and creation controls. Shared popovers, including the model picker, used the pale blue surface. Dialog backdrops used a navy tint. The Session Log switch's on, off and disabled colours were verified on a temporary DOM copy of the rendered control, and keyboard focus was checked on the live control without changing the setting. The normal code-workspace switch and the empty/nonempty composer were exercised in isolation. The user's installed Session Log switch was still off after the local upgrade.

The Settings-specific surface was verified at `#F4F8FE` in General and Models under native Light and Dark. The composer kept `#FFFDF8` in both modes. The rebuilt package was installed in the regular desktop profile for local review.

The adaptive Whale Courier build repeated the 25-surface matrix in Light and Dark on macOS Desktop 0.2.2-rc.5. Settings, popovers, switch states and focus, the composer, and the selected theme card followed the active palette. Emulated System appearance changed the palette at runtime while Whale Courier remained selected. In a separate local-model test, Harness rendered a Markdown reply from a loopback mock provider. The same TypeScript block retained syntax highlighting and changed its background from `#FFFDF8` to `#101C2E` on a live switch. The regular desktop profile received the verified archive.

The full collection was then checked in both appearance modes on the same macOS build. All 22 skin/mode combinations passed Settings, language and model popovers, the command menu frame, switch states and keyboard focus, composer editing, picker selection, and contrast of the same rendered TypeScript reply. The minimum observed syntax contrast was 5.00:1. Emulating System light, dark, and light updated all 11 card previews, preserved the active skin, and left the 530 px picker free of horizontal overflow. The verified archive was installed offline in the regular desktop profile.

The visual revision exercised all 22 combinations again in the isolated macOS profile. The test captured Home, Settings with the language menu open, and the existing local TypeScript conversation for each combination. It verified the terminal rules and type in Night Signal, the graphite halo in Alpine Light, the stitching in Nordic Linen, the double rule in Editorial Paper, and the glass material in Frosted Tide. Switch states and focus, popup materials, the command-menu frame, composer editing, theme selection, and code headers were checked against the active skin. The minimum observed code contrast was 5.10:1. System appearance updated all 11 previews, and the 530 px grid remained free of horizontal overflow.

## DSH Skin 0.4.5

On 2026-11-18 (Asia/Shanghai), the packaged plugin was installed in an isolated profile on DeepSeek Harness Desktop **0.2.2-rc.5** for macOS. Clicking each of the ten thumbnails applied its palette immediately and moved the checkmark to that card. Original appearance restored the native palette. Tab, Space and Enter worked on the cards, and re-enabling the plugin restored the saved selection.

The grid displayed six columns at the test window's default width and three columns at a 530 px viewport without horizontal overflow. The installed 0.4.5 build reopened with Swiss Grid still selected and was checked by the user on their desktop profile.

## DSH Skin 0.4.4

On 2026-11-18 (Asia/Shanghai), the approved small-size Aurora artwork was tested with DeepSeek Harness Desktop **0.2.2-rc.3** for macOS. The icon displayed at 36 px in the plugin list and detail header and at 30 px in the component row. Screenshots covered Original appearance and all ten built-in themes.

## DSH Skin 0.4.3

On 2026-11-18 (Asia/Shanghai), DeepSeek Harness Desktop **0.2.2-rc.3** for macOS displayed the updated halfmoon betta at 36 px in the plugin list and detail header and 30 px in the component row. Screenshots covered Original appearance and all ten built-in themes.

## DSH Skin 0.4.2

On 2026-11-18 (Asia/Shanghai), the blue Aurora betta icon was tested with DeepSeek Harness Desktop **0.2.2-rc.3** for macOS. The plugin list and detail header loaded it at 36 px, and the component row loaded it at 30 px. The Original appearance option and all ten built-in themes displayed the icon. Screenshots confirmed that the dark variant lightens the fish and its outline.

## DSH Skin 0.4.1

On 2026-11-18 (Asia/Shanghai), the packaged whale icon was checked on DeepSeek Harness Desktop **0.2.2-rc.3** for macOS. The plugin list and details loaded it at 36 px and the component row at 30 px. Screenshots confirmed light and dark variants across all ten themes and Original appearance.

## DSH Skin 0.4.0

On 2026-11-18 (Asia/Shanghai), the unified archive was tested with DeepSeek Harness Desktop **0.2.2-rc.3** for macOS, build `6b729fedde0c8fd03af7afdf5a711aa64fe87c3b`, in a temporary desktop profile.

- Installed the release tarball using the bundled CLI and compared installed runtime and metadata with the source.
- Confirmed one DSH Skin entry with a theme menu in its plugin page. Selected all ten themes and verified that each applied the expected base token with one active style layer.
- Verified that Original appearance restores the built-in palette. Disabling the plugin removes its CSS and tokens. Re-enabling restores the saved selection.
- Selected Frosted Tide, fully quit and reopened the app, and verified that the theme was restored before opening the plugin page.

This pass covers installation and theme switching on macOS. The earlier record below covers detailed visual and interaction checks for the original individual themes. Windows and Linux remain untested.

## Earlier single-theme packages (0.3.1)

Target: DeepSeek Harness **macOS desktop 0.2.0-rc.2**, build `5e9e301dd9dc8923b2762f76dacfc5751f6ca851`.
Completed: **2026-10-04**, Asia/Shanghai.

### Result

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

### Native checks performed

- Empty new session: Send disabled. Multiline Chinese/English draft: Send enabled. Draft clearing and visible keyboard focus were checked without sending a model request.
- General settings: selected/unselected controls, switches, language dropdown and Escape dismissal. Light, Dark and System were exercised beneath each skin's fixed palette; System was restored.
- Existing conversations: headings, inline code, fenced syntax-highlighted HTML and tables. Wide and half-screen windows, expanded sidebar and collapsed reading layout were inspected for readability and overflow.
- Plugin details: bilingual name, icon, version 0.3.1 and one running component. Each skin was disabled and subsequently enabled again; switching between light and dark skins restored the expected palette and geometry.
- Tool-trace inspection was additionally performed with Braun Control. This is not a claim that every possible tool-card subtype was exercised under every skin.
- Cold launches confirmed Studio Block's corrected branding and Alpine Light's persisted activation. This was a shared persistence check, not ten separate cold-start runs.
- All ten were finally disabled; the plugin switches and desktop profile confirmed the original all-disabled configuration, and the native default appearance returned.
- The user's unsent draft was preserved and restored, with an exact 29-character readback. Private conversation/account screenshots were viewed inline and were not saved into repository assets.

### Automated verification

- Ten manifests, independent package identifiers, exported registrations and source/bundle consistency.
- Scoped structural CSS, disabled-send styles, contenteditable support and reduced-motion rules.
- Activation, token registration, style insertion and complete disposal for every bundle.
- Overlapping skins, forward/reverse disposal and duplicate activation/hot reload.
- **160 text contrast pairs** at 4.5:1 or better and **30 focus/background pairs** at 3:1 or better.
- English/Chinese metadata, self-contained SVG icons and npm package contents.
- All ten installed 0.3.1 runtime/CSS/token/icon/locale files matched source byte-for-byte.
- TypeScript and Next.js production static build, including all ten detail routes.
- Ten versioned npm tarballs with release manifest and SHA-256 checksums.

### Corrections made during acceptance

- Preserved round switch tracks instead of inheriting rectangular button geometry.
- Increased Washi Ink secondary-text contrast on the sidebar.
- Darkened light-theme code constants and parameters.
- Changed Studio Block text links and focus/caret to dark blue; separated its inverted branding label from the primary-action foreground to fix black-on-black HARNESS lettering.
- Made composer focus styling outrank every signature surface rule.
- Applied paper-style typography to the desktop's actual hero-title element.
- Bumped the installed bundles to 0.3.1 after identifying stale package-manager content at the old 0.3.0 tarball path. Release packaging retains older tarballs needed for local-file upgrades.

### Scope and tooling notes

This acceptance covers the named macOS client build and the states above. Windows/Linux clients, future DSH versions, model inference, every tool type, and all third-party plugin combinations are outside this pass. The palettes are intentionally fixed light or dark designs.

Computer Use intermittently returned `elementHasNoFrame`, `noWindowsAvailable`, ScreenCaptureKit errors and stale frames. A stale frame was never accepted as evidence for a different page or skin. Fresh synchronized captures were obtained through native foreground/window/full-screen actions before completing the corresponding visual checks. These tool failures were not attributed to the skins.

### Design references

The local Design Vibes references informed the palettes and geometry. Industrial functionalism follows [Dieter Rams's principles](https://www.vitsoe.com/us/about/good-design); tonal surfaces follow [Material colour roles](https://m3.material.io/styles/color/the-color-system/color-roles); translucent layering is informed by [Apple's materials guidance](https://developer.apple.com/design/human-interface-guidelines/materials). Names identify influences, not affiliation or endorsement. “Official recommendation” refers to the DSH Skin project's collection.
