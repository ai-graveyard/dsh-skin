# Releasing

The repository and each skin package use separate version fields. The root package stays private; publish only an individual skin directory.

## Release checklist

1. Choose the skin version and update its `package.json` and `CHANGELOG.md` entry.
2. Run `pnpm run build` and `pnpm run check`.
3. Inspect every tarball manifest:

   ```bash
   pnpm run pack:skins
   ```

   Build the versioned tarballs, checksums, and machine-readable release manifest:

   ```bash
   pnpm run release:assets
   ```

   The generated files live under `dist/releases/`. CI uploads the same directory
   as the `skin-release-assets` artifact from the Node.js 22 validation job.

4. Create a local tarball and install it into DSH before publishing:

   ```bash
   npm pack ./skins/<skin-id>
   npx @deepseek-ai/dsh plugin --profile web add ./dsh-skin-<skin-id>-<version>.tgz
   npx @deepseek-ai/dsh --profile web --dump-config
   npx @deepseek-ai/dsh web
   ```

5. Verify the empty-session screen, an existing conversation, settings, refresh behavior, and uninstall cleanup.
6. Confirm the npm name, `repository`, `homepage`, and `bugs` URLs.
7. Download or rebuild `skin-release-assets`, verify `SHA256SUMS`, then create the Git tag, GitHub release, and npm release as separate actions. Review each one before publishing.

The repository does not include an automatic publish workflow. A passing CI run only confirms the local bundle and package manifest.
