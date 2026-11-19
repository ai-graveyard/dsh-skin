# Changelog

This file records user-visible changes to skin bundles and the collection site. Local acceptance, Git publication, npm/GitHub releases and site deployment are separate milestones.

## Skin Collection 0.4.6 · 2026-11-19

- Add Whale Courier (鲸鱼娘) as an eleventh theme, with sea-blue controls, an original whale courier in the welcome view and sidebar, and a whale-tail wax seal on the composer.
- Keep Whale Courier's popovers pale blue in both Harness appearance modes, tint dialog backdrops navy, and use distinct blue switch states.
- Give Whale Courier's Settings window a cool blue-white surface.
- Make Whale Courier follow Harness Light, Dark, and System appearance with separate palettes and matching theme-card previews.
- Give all ten other skins their own light and dark palettes, preserving their signature controls, type, and surface styles.
- Rework Night Signal light and the dark Alpine Light, Nordic Linen, and Editorial Paper variants. Extend each theme's visual details into settings, menus, and conversations, with individual syntax palettes.
- Display the plugin as 皮肤大全 in Chinese and Skin Collection in English. The package identifier remains `dsh-skin`.
- Match the Original appearance preview to the client's light or dark setting, and make the Swiss Grid, Nordic Linen, Washi Ink, and Editorial Paper previews reflect their desktop controls.
- Remove the inner border from the composer's command menu.

## Earlier versions

### DSH Skin 0.4.5

- Replace the theme dropdown with clickable previews for all ten themes and Original appearance. The active card shows a checkmark.

### DSH Skin 0.4.4

- Use the small-size Aurora betta icon with a larger round eye, a defined mouth, and short fins set apart from the tail.

### DSH Skin 0.4.3

- Redraw the plugin icon as a side-view halfmoon betta with a bright fan tail, a distinct dark body, long fins, and a visible eye and gill.

### DSH Skin 0.4.2

- Refresh the desktop plugin icon with the blue Aurora betta. Use brighter outlines and a lighter body on dark themes.

### DSH Skin 0.4.1

- Give the desktop plugin a square whale icon with an orange tail and light/dark variants.

### DSH Skin 0.4.0

- Package all ten themes together as `dsh-skin`.
- Add a theme picker in the desktop plugin page with immediate switching, a saved selection, and an Original appearance option.
- Give the website, release manifest, and CLI instructions one package and version.

### Skin bundles 0.3.1 — desktop collection (local acceptance 2026-10-04)

- Expand the DSH Skin recommended collection to ten named, independent desktop bundles.
- Add eight classic design patterns, bilingual client metadata and individual SVG icons.
- Refine controls, fixed light/dark tokens, code colours, focus states and reduced motion.
- Add 160 text and 30 focus contrast checks and metadata/package verification.
- Standardize installation, removal and release guidance on the desktop client CLI; remove the legacy Web-profile compatibility workflow and unused Web screenshots.
- Complete individual native desktop acceptance for all ten skins; record the tested client build and exact coverage in DESKTOP-QA.md. The acceptance pass prepared local packages; it did not publish an npm or GitHub release.

### Earlier unreleased work — skin bundles 0.2.0 and catalogue

- Added official Desktop installation instructions using the bundled CLI and desktop profile.
- Adapted rich-text composer focus, disabled send buttons, settings and menu tokens.
- Improved control typography and removed the floating ACTIVE badge and decorative send-button motion.
- Kept syntax highlighting readable independently of the native appearance mode.
- Scoped Braun variables and fixed non-LIFO skin disposal and hot-reload cleanup.

- Added Night Signal as a high-contrast dark skin.
- Fixed narrow settings layout and preserved DSH's transparent textarea/backdrop protocol to prevent duplicated composer text in both skins.
- Added versioned release artifacts with SHA256 checksums and an hourly public-route monitor.
- Added production security headers and explicit caching for static image assets.
- Made collection builds, validation and package inspection discover every skin automatically.
- Added a full collection index, skin-specific previews, honest clone/install/verify steps, sitemap, robots, web manifest and social card metadata.
- Added the statically exported Next.js collection site for `dshskin.com`.
- Added build-time skin listings and the first Braun Control collection page.
- Added repository-level open-source documentation, contribution rules, security reporting, and CI.

## 0.1.1 - 2026-08-15

- Added persistent light and dark token overrides for Braun Control.
- Applied Braun geometry to the DSH sidebar, composer, dialogs, selected sessions, and functional controls.
- Added a static preview and a prebuilt browser bundle.
- Added lifecycle checks that remove token and CSS layers during uninstall.
