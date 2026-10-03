# DSH Skin

[简体中文](./README.md) | English

DSH Skin is a collection of independent visual skins for the DeepSeek Harness Desktop and the source for the statically exported Next.js site at [dshskin.com](https://dshskin.com). Each skin ships as a self-contained Harness bundle that users can install, remove, and package without modifying Harness source or application files.

> This is an unofficial community project. It is not affiliated with or endorsed by DeepSeek, Braun, or Dieter Rams. The project references an industrial design language and does not include Braun trademarks, product images, or proprietary assets.

## Desktop collection

Ten independent skins at version `0.3.1`, recommended by the DSH Skin project. This is a community project, not an official DeepSeek product or an endorsement by any referenced design brand.

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

Download or clone this repository and run the following commands from its root. Open DeepSeek Harness once, then quit it completely. Use the `dsh` command supplied by the desktop client (Manage dsh command in its application menu).

```sh
npm pack ./skins/alpine-light
dsh plugin --profile desktop add ./dsh-skin-alpine-light-0.3.1.tgz
```

On macOS, the bundled command is `/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh`.

Restart the client. Enable one skin in Plugins → Installed and disable the others. Each skin keeps its own fixed palette regardless of the system appearance. Disable all skins to restore the original appearance. If the client does not repaint after a switch, restart it.

```sh
dsh plugin --profile desktop remove dsh-skin-alpine-light
```

## Verification and development

Requires Node.js `^22.19.0 || >=24.0.0` and pnpm. Use `pnpm dev` to run the catalogue locally.

See [DESKTOP-QA.md](./DESKTOP-QA.md) for the exact tested client version, completed checks and acceptance scope. Offline previews are design samples, not evidence of desktop acceptance.

```sh
pnpm install
pnpm run build
pnpm run check
pnpm run pack:skins
pnpm run release:assets
```

`pnpm run check` validates generated bundles, metadata, scoped CSS, lifecycle cleanup and overlapping layers, 160 text and 30 focus contrast pairs, and TypeScript. It does not run native desktop acceptance. After installing all skins, run `node scripts/check-installed.mjs <desktop-profile-directory>` to compare installed files with source.

Each bundle is self-contained: scoped CSS, theme tokens, runtime, lifecycle cleanup, bilingual metadata, icon, offline preview and license. Edit `skin.css` for structure, `tokens.json` for the fixed palette, and `build.mjs` for lifecycle code. No remote fonts or images are used. `client.js` is generated and must be committed with its sources. Release packages, SHA256SUMS and a manifest are written to `dist/releases/`.

Release packaging retains older tarballs needed by existing local-file installations; the checksum file and manifest list only the current run. See [RELEASING.md](./RELEASING.md) for the desktop acceptance and publication steps.

The Next.js catalogue is statically exported to `out/`. It automatically discovers `skins/*/skin.json`. CI checks Node.js 22.19 and 24; successful validation on `main` triggers the SSH/Docker deployment. The hourly monitor checks the homepage, the Braun Control and Night Signal detail routes, and the sitemap. Git push, CI success and live deployment must be verified separately.

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before making changes. Report security issues through [SECURITY.md](./SECURITY.md); see [CHANGELOG.md](./CHANGELOG.md) for version history.

## License

[MIT](./LICENSE). Third-party names and trademarks belong to their respective owners.
