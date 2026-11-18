# DSH Skin

[简体中文](./README.md) | English

DSH Skin is a DeepSeek Harness Desktop plugin with ten built-in themes. Install it once and switch themes in the client. Browse previews at [dshskin.com](https://dshskin.com).

> This is an unofficial community project. It is not affiliated with or endorsed by DeepSeek, Braun, or Dieter Rams. The project references an industrial design language and does not include Braun trademarks, product images, or proprietary assets.

## Desktop collection

Ten themes are included in the `dsh-skin` package.

| Skin | Design pattern |
| --- | --- |
| Braun Control | Industrial functionalism |
| Night Signal | Professional dark workspace |
| Alpine Light | System minimalism |
| Material Orchid | Material tonal surfaces |
| Swiss Grid | International typography |
| Nordic Linen | Scandinavian design |
| Washi Ink | Japanese minimalism |
| Editorial Paper | Newspaper editorial design |
| Studio Block | Neo-brutalism |
| Frosted Tide | Glassmorphism |

## Install in the desktop client

Open DeepSeek Harness once, then quit it completely. Set up `dsh` using Manage dsh command in the application menu. Download the [DSH Skin 0.4.5 archive](https://github.com/ai-graveyard/dsh-skin/releases/download/v0.4.5/dsh-skin-0.4.5.tgz) and run this command from the folder containing the archive.

```sh
dsh plugin --profile desktop add ./dsh-skin-0.4.5.tgz
```

On macOS, the bundled command is `/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh`.

Reopen the client and enable and open **DSH Skin** in Plugins. Click a theme preview to apply it immediately. The active card has a checkmark, and your last choice is saved on this device. Choose **Original appearance** to restore the default palette. If you installed earlier single-theme plugins, disable them once before using DSH Skin.

```sh
dsh plugin --profile desktop remove dsh-skin
```

## Verification and development

Requires Node.js `^22.19.0 || >=24.0.0` and pnpm. Use `pnpm dev` to run the catalogue locally.

See [DESKTOP-QA.md](./DESKTOP-QA.md) for the exact tested client version, completed checks and acceptance scope. Offline previews are design samples, not evidence of desktop acceptance.

```sh
pnpm install
pnpm run build
pnpm run check
pnpm run pack:plugin
pnpm run release:assets
```

`pnpm run check` validates metadata, scoped CSS, switching and cleanup, 160 text and 30 focus contrast pairs, and TypeScript. After installing the plugin, run `node scripts/check-installed.mjs <desktop-profile-directory>` to compare the installed runtime and metadata with source.

Theme sources live under `plugin/skins/`. Edit `skin.css` for structure, `tokens.json` for the fixed palette and `plugin/client-source.js` for the picker and runtime. Commit the regenerated `plugin/client.js` with its sources. `pnpm run release:assets` writes one archive, checksums and a manifest to `dist/releases/`. See [RELEASING.md](./RELEASING.md) for publication steps.

The Next.js catalogue is statically exported to `out/`. It automatically discovers `plugin/skins/*/skin.json`. CI checks Node.js 22.19 and 24; successful validation on `main` triggers the SSH/Docker deployment. The hourly monitor checks the homepage, the Braun Control and Night Signal detail routes, and the sitemap. Git push, CI success and live deployment must be verified separately.

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before making changes. Report security issues through [SECURITY.md](./SECURITY.md); see [CHANGELOG.md](./CHANGELOG.md) for version history.

## License

[MIT](./LICENSE). Third-party names and trademarks belong to their respective owners.
