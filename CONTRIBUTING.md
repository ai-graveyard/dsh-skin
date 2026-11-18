# Contributing

The `dsh-skin` plugin ships all themes in one bundle. Each theme has its own styles and colours under `plugin/skins/`.

## Changing a theme

Edit `skin.css` for structural styles and `tokens.json` for colours. The build applies each colour to both Harness modes to keep the selected palette consistent. Use selectors scoped under `body[data-dsh-skin="<skin-id>"]` and prefer semantic suffixes such as `_sidebarCol` and `_composerStack` to full CSS module class names.

Run the following from the repository root using Node.js `^22.19.0 || >=24.0.0` and pnpm. Commit the updated `plugin/client.js` alongside its sources.

```sh
pnpm install
pnpm run build
pnpm run check
pnpm run pack:plugin
```

For the picker and lifecycle, edit `plugin/client-source.js` and `plugin/picker.css`. For plugin registration or release metadata, edit `plugin/package.json` and `plugin/cordis.patch.yml`.

## Adding a theme

Create a directory under `plugin/skins/` with `skin.json`, `skin.css`, `tokens.json`, `icon.svg`, `locale/en.json`, `locale/zh.json`, `preview.html` and `README.md`. Give it a unique slug and order. The plugin builder and website discover these manifests automatically. Use `skin.json` to describe translated names, colors, preview geometry, screenshots, verification scope and author credit.

For visual changes, check the native composer and keyboard focus, existing conversations, settings, narrow layouts and reduced motion. Check a switch to another theme and back to the original appearance to confirm that CSS and token overrides are disposed. Include screenshots with visual changes and record the exact tested client in [DESKTOP-QA.md](./DESKTOP-QA.md).

Use the desktop client's own `dsh` command for installation checks. Compare installed runtime and metadata with the local source.

```sh
node scripts/check-installed.mjs <path-to-dsh-home>/profiles/desktop
```

By submitting a contribution, you agree to license it under the repository's MIT License.
