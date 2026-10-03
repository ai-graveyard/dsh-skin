# Contributing

DSH Skin keeps each skin self-contained. A pull request should leave users with a bundle they can install, remove, and inspect without running an untrusted build hook.

## Requirements

- Node.js `^22.19.0 || >=24.0.0`
- pnpm for the repository commands
- The DeepSeek Harness desktop client for native visual and interaction checks

Install the repository dependencies, then run checks from the repository root:

```bash
pnpm install
pnpm run check
```

## Changing a skin

Edit `skins/<skin-id>/skin.css` for structural styles, `tokens.json` for theme colours, and `build.mjs` for client lifecycle code. The build applies each token value to both light and dark modes, keeping the skin's palette fixed. Regenerate every `client.js` before committing:

```bash
pnpm run build
pnpm run check
```

Use selectors scoped under `body[data-dsh-skin="<skin-id>"]`. DSH CSS module hashes change between builds, so target semantic class suffixes such as `_sidebarCol` and `_composerStack` instead of full generated class names.

Check the empty-session screen, an existing conversation, settings dialogs, narrow layouts, keyboard focus, and reduced-motion behavior. Confirm that removal disposes both the token layer and the injected style tag.

## Adding a skin

Create a new directory under `skins/` and give it unique identifiers in:

- `package.json`
- `cordis.patch.yml`
- `build.mjs`
- the `data-dsh-skin` CSS scope

Include `package.json`, `index.js`, `cordis.patch.yml`, `build.mjs`, generated `client.js`, `skin.css`, `tokens.json`, `icon.svg`, `locale/en.json`, `locale/zh.json`, `preview.html`, `README.md`, and `LICENSE`. Export the locale files and include the tokens, icon and locales in the npm package's `files` list. Keep runtime code inside the skin directory.

Add a `skin.json` listing in the same directory. The Next.js site reads these files at build time to generate the collection and detail routes. Keep its `slug`, `packageName`, unique `order`, English/Chinese names, design pattern, package version, license, compatibility, verification date and states, preview palette and control radii, screenshots, and author credit in sync with the bundle. `official` identifies the DSH Skin project's selection, not DeepSeek endorsement.

Root commands discover every skin automatically. Do not add skin-specific commands to the root `package.json` or CI workflow.

`pnpm run check` verifies generated bundles, package metadata, scoped CSS, activation/disposal, overlapping skin layers, selected text and focus contrast pairs, and TypeScript. Contrast checks cover the pairs defined in `scripts/check-contrast.mjs`; they do not replace native interaction and accessibility checks.

## Pull request checklist

- Explain the visible change and the DSH version used for testing.
- Include screenshots for visual changes.
- Commit the regenerated `client.js`.
- Run `pnpm run check`.
- Run `pnpm run build` and inspect the generated static site in `out/`.
- Run `pnpm run pack:skins` and inspect the package contents.
- Avoid credentials, local absolute paths, telemetry, and remote assets.

By submitting a contribution, you agree to license it under the repository's MIT License.

## Desktop acceptance

Install with the desktop client CLI after quitting the client. Increment the package version whenever runtime files change; a repacked tarball at the same path/version may remain cached by pnpm. Keep previous versioned tarballs available until the desktop profile has upgraded. After installing, verify the actual installed runtime before taking screenshots:

```sh
node scripts/check-installed.mjs <path-to-dsh-home>/profiles/desktop
```

This separate check expects every repository skin to be installed in that profile. It compares package metadata, runtime, CSS, tokens, icon and locale files byte-for-byte; it does not inspect the active UI and is not part of `pnpm run check`.

Record the exact client and skin versions, completed native states and outstanding checks in `DESKTOP-QA.md`. Do not promote a `Desktop QA` entry to `Available` based only on static previews or unit checks.
