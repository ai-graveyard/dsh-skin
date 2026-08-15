# DSH Skin

[简体中文](./README.md) | English

DSH Skin is a collection of independent visual skins for the DeepSeek Harness Web UI and the source for the statically exported Next.js site at [dshskin.com](https://dshskin.com). Each skin ships as a self-contained Harness bundle that users can install, remove, and package without modifying Harness source or application files.

> This is an unofficial community project. It is not affiliated with or endorsed by DeepSeek, Braun, or Dieter Rams. The project references an industrial design language and does not include Braun trademarks, product images, or proprietary assets.

## Available skin

| Skin | Style | Version | Status |
| --- | --- | --- | --- |
| [Braun Control](./skins/braun-control) | Warm gray grid, restrained corners, one functional orange accent | `0.1.1` | Installable |

Braun Control has been tested locally with `@deepseek-ai/dsh 0.1.0-rc.6`. DeepSeek Harness is a Developer Preview, so later releases may change its plugin API or CSS module structure.

## Install

You need Node.js `^22.19.0 || >=24.0.0`. Download or clone this repository, then run these commands from its root:

```bash
npx @deepseek-ai/dsh plugin --profile web add ./skins/braun-control
npx @deepseek-ai/dsh --profile web --dump-config
npx @deepseek-ai/dsh web
```

The first command links the local skin directory into the DSH profile. Moving or deleting the repository breaks that link. Pack a tarball first when you need a fixed installation:

```bash
npm pack ./skins/braun-control
npx @deepseek-ai/dsh plugin --profile web add ./dsh-skin-braun-control-0.1.1.tgz
```

The loaded page shows a `BRAUN CONTROL / ACTIVE` label, a black new-session control, and an orange send button. Refresh an existing DSH tab after installation.

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

The static export is written to `out/` and can be hosted by any static file server. The repository commits the generated `client.js`. A contribution that changes its source must include the regenerated bundle. CI checks the site build, generated output, plugin cleanup, and package manifest on Node.js 22.19 and 24.

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
  braun-control/   Complete publishable skin bundle
scripts/
  validate.mjs     Manifest, CSS, token, and cleanup checks
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
