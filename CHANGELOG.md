# Changelog

This file records user-visible changes to published skin bundles.

## Unreleased

### Skin bundles 0.2.0

- Added official Desktop installation instructions using the bundled CLI and desktop profile.
- Adapted rich-text composer focus, disabled send buttons, settings and menu tokens.
- Improved control typography and removed the floating ACTIVE badge and decorative send-button motion.
- Kept syntax highlighting readable independently of the native appearance mode.
- Scoped Braun variables and fixed non-LIFO skin disposal and hot-reload cleanup.


- Added Night Signal as a high-contrast dark skin.
- Verified Night Signal in a real isolated DSH profile and added empty-session, workspace, settings, and 390px screenshots.
- Fixed narrow settings layout and preserved DSH's transparent textarea/backdrop protocol to prevent duplicated composer text in both skins.
- Added versioned release artifacts with SHA256 checksums and an hourly public-route monitor.
- Added production security headers and explicit caching for static image assets.
- Added a weekly isolated-profile probe against the latest DSH package from npm.
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
