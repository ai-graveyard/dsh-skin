# Releasing

The repository and the Braun Control npm package use separate version fields. The root package stays private; publish only a skin directory.

## Release checklist

1. Choose the skin version and update its `package.json` and `CHANGELOG.md` entry.
2. Run `pnpm run build` and `pnpm run check`.
3. Inspect the tarball manifest:

   ```bash
   env npm_config_cache=/tmp/dsh-skin-npm-cache npm pack --dry-run --json ./skins/braun-control
   ```

4. Create a local tarball and install it into DSH before publishing:

   ```bash
   npm pack ./skins/braun-control
   npx @deepseek-ai/dsh plugin --profile web add ./dsh-skin-braun-control-<version>.tgz
   npx @deepseek-ai/dsh --profile web --dump-config
   npx @deepseek-ai/dsh web
   ```

5. Verify the empty-session screen, an existing conversation, settings, refresh behavior, and uninstall cleanup.
6. Confirm the npm name and add `repository`, `homepage`, and `bugs` URLs after the public GitHub repository exists.
7. Create the Git tag, GitHub release, and npm release as separate actions. Review each one before publishing.

The repository does not include an automatic publish workflow. A passing CI run only confirms the local bundle and package manifest.
