# DSH Skin

[简体中文](./README.md) | English

DSH Skin is a collection of independent visual skins for the DeepSeek Harness Web UI and the source for the statically exported Next.js site at [dshskin.com](https://dshskin.com). Each skin ships as a self-contained Harness bundle that users can install, remove, and package without modifying Harness source or application files.

> This is an unofficial community project. It is not affiliated with or endorsed by DeepSeek, Braun, or Dieter Rams. The project references an industrial design language and does not include Braun trademarks, product images, or proprietary assets.

## Available skins

| Skin | Style | Version | Status |
| --- | --- | --- | --- |
| [Braun Control](./skins/braun-control) | Warm gray grid, restrained corners, one functional orange accent | `0.2.0` | Installable |
| [Night Signal](./skins/night-signal) | Near-black layers, compact geometry, one mint signal color | `0.2.0` | Installable |

Earlier versions of Braun Control and Night Signal were visually tested locally with `@deepseek-ai/dsh 0.1.0-rc.6`. Night Signal covers the empty screen, a workspace session, settings, reload, and a 390px viewport without using an API key or model request. DeepSeek Harness is a Developer Preview, so later releases may change its plugin API or CSS module structure.

## Desktop installation

Open the official Desktop client once, then fully quit it. Register its bundled CLI through **Manage dsh Command…** and run from this repository:

```bash
npm pack ./skins/night-signal
dsh plugin --profile desktop add ./dsh-skin-night-signal-0.2.0.tgz
```

Reopen Desktop and use **Plugins → Installed** to enable or disable skins. Keep one skin enabled at a time; disable both to restore the native appearance. Replace `night-signal` with `braun-control` for the light skin. Use Desktop's bundled CLI, not npm-installed dsh, to manage the reserved desktop profile. Each skin keeps its fixed palette regardless of the native appearance preference.

## Web installation

You need Node.js `^22.19.0 || >=24.0.0`. Download or clone this repository, then run these commands from its root:

```bash
npx @deepseek-ai/dsh plugin --profile web add ./skins/braun-control
npx @deepseek-ai/dsh --profile web --dump-config
npx @deepseek-ai/dsh web
```

The first command links the local skin directory into the DSH profile. Moving or deleting the repository breaks that link. Pack a tarball first when you need a fixed installation:

```bash
npm pack ./skins/braun-control
npx @deepseek-ai/dsh plugin --profile web add ./dsh-skin-braun-control-0.2.0.tgz
```

The loaded page shows a black new-session control, and an orange send button. Refresh an existing DSH tab after installation.

If `dsh` is already available on your PATH, replace `npx @deepseek-ai/dsh` with `dsh` in the commands above.

## Remove

```bash
npx @deepseek-ai/dsh plugin --profile web remove dsh-skin-braun-control
```

Removal disposes the token overrides, structural CSS, and `data-dsh-skin` marker. It does not delete DSH sessions, model settings, or credentials.

## Develop and verify

Install dependencies and start the site locally:

```bash
pnpm install
pnpm dev
```

Regenerate the browser bundle, verify the repository, and build the static site:

```bash
pnpm run build
pnpm run check
```

The static export is written to `out/` and can be hosted by any static file server. Root commands automatically discover every `skins/*/skin.json`, so new skins do not need package-script or CI edits. The repository commits each generated `client.js`. A contribution that changes its source must include the regenerated bundle. CI checks the site build, generated output, plugin cleanup, and every package manifest on Node.js 22.19 and 24. It also uploads versioned tarballs, `SHA256SUMS`, and a release manifest as the `skin-release-assets` artifact. A separate hourly workflow checks the home page, skin routes, and sitemap; a weekly compatibility probe installs each skin into an isolated profile using the latest DSH package from npm.

After every `main` build passes, CI starts a containerized deployment over SSH. The server only needs a checkout of this repository plus Docker Engine and Docker Compose; Node.js, pnpm, the static build, and Nginx are contained in the image.

| Setting | Level | Purpose |
| --- | --- | --- |
| `EC2_HOST` / `EC2_PORT` / `EC2_USER` | Organization secrets | SSH connection shared with WeMatch; grant this repository access in the organization settings |
| `EC2_SSH_KEY` / `EC2_KNOWN_HOSTS` | Organization secrets | SSH private key and server host key shared with WeMatch |
| `DEPLOY_PATH` | Repository secret | Checkout for this project on the server |
| `SITE_ORIGIN` | Optional repository variable | Smoke-check URL; defaults to `https://dshskin.com` |

The server runs `make deploy`, which fast-forwards to `origin/main`, builds a two-stage Docker image, recreates the Compose service, and waits for its health check. The production container maps host port `8092` to Nginx port `80` by default; use `APP_PORT=<port> make deploy` for a temporary override. Image cleanup is limited to this project's label and does not prune unrelated images on the shared server.

## Repository layout

```text
app/                    Next.js routes and global styles
components/             Site UI and skin previews
lib/skins.ts            Build-time skin metadata loader
skins/
  braun-control/        Complete publishable light skin bundle
  night-signal/         Verified dark skin bundle
scripts/
  run-skins.mjs         Generic build, check, and package runner
  validate.mjs          Manifest, CSS, token, and cleanup checks
deploy/
  nginx.conf       Static routing, caching, and 404 handling in the container
Dockerfile         Two-stage Node build and Nginx runtime image
docker-compose.yml Production service and default port 8092 mapping
Makefile           Local container commands and server deployment entrypoint
.github/           CI, issue, and pull request templates
```

Each new skin needs its own `skin.json`, manifest, Cordis patch, browser bundle, CSS, preview, documentation, and license. The home and detail pages scan `skins/*/skin.json` during the static build. Package ids, skin ids, and style ids must stay unique.

## Contributing

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before sending a change. Report security problems through the private process in [SECURITY.md](./SECURITY.md). See [CHANGELOG.md](./CHANGELOG.md) for release notes.

## License

The code is available under the [MIT License](./LICENSE). DeepSeek, Harness, Braun, Dieter Rams, and related marks belong to their respective owners.

## Desktop verification (2026-10-03)

Both 0.2.0 bundles were checked in the macOS official Desktop client 0.2.0-rc.2: launch, empty and existing conversations, rich-text input, send-button states, syntax highlighting, settings and plugin toggles. No model request was sent. Existing Web screenshots document the earlier releases; Web and 390px layouts were not reverified in this desktop pass.
