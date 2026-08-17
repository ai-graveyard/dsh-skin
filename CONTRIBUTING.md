# Contributing

DSH Skin keeps each skin self-contained. A pull request should leave users with a bundle they can install, remove, and inspect without running an untrusted build hook.

## Requirements

- Node.js `^22.19.0 || >=24.0.0`
- pnpm for the repository commands
- A local DeepSeek Harness Web profile for visual checks

Install the repository dependencies, then run checks from the repository root:

```bash
pnpm install
pnpm run check
```

## Changing a skin

Edit `skins/<skin-id>/skin.css` for structural styles and its `build.mjs` for theme tokens or client lifecycle code. Regenerate every `client.js` before committing:

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

Include a manifest, Cordis patch, browser bundle, CSS source, static preview, README, and license. Keep runtime code inside the skin directory.

Add a `skin.json` listing in the same directory. The Next.js site reads these files at build time to generate the collection and detail routes. Keep its `slug`, `packageName`, unique `order`, package version, license, compatibility, verification date and states, preview palette, screenshots, and author credit in sync with the bundle.

Root commands discover every skin automatically. Do not add skin-specific commands to the root `package.json` or CI workflow.

## Pull request checklist

- Explain the visible change and the DSH version used for testing.
- Include screenshots for visual changes.
- Commit the regenerated `client.js`.
- Run `pnpm run check`.
- Run `pnpm run build` and inspect the generated static site in `out/`.
- Run `pnpm run pack:skins` and inspect the package contents.
- Avoid credentials, local absolute paths, telemetry, and remote assets.

By submitting a contribution, you agree to license it under the repository's MIT License.
