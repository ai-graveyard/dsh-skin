# Releasing

The publishable package is `plugin/` (`dsh-skin`). The private root package builds the website and runs the release tools.

1. Update the version in `plugin/package.json`, the README install examples, and `CHANGELOG.md`. Use a new package version when releasing changed runtime files so desktop clients fetch the new bundle.
2. Run `pnpm run build` and `pnpm run check`. Commit the generated `plugin/client.js` with its sources.
3. Inspect and generate the release archive.

   ```sh
   pnpm run pack:plugin
   pnpm run release:assets
   cd dist/releases
   shasum -a 256 -c SHA256SUMS
   ```

   `release-manifest.json` lists the current `dsh-skin-<version>.tgz`. Retain older tarballs if a desktop profile refers to them. CI uploads the current archive and its checksum and manifest as `dsh-skin-release-assets`.

4. Open DeepSeek Harness Desktop once, then quit completely. Install the generated tarball with the bundled desktop `dsh` command. Run this example from the repository root.

   ```sh
   dsh plugin --profile desktop add ./dist/releases/dsh-skin-0.4.6.tgz
   node scripts/check-installed.mjs <path-to-dsh-home>/profiles/desktop
   ```

   On macOS, the bundled command is `/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh`. Manage dsh command in the application menu also configures the command. Use an isolated profile for acceptance when possible.

5. Reopen the client and open **Plugins → Skin Collection**. Check theme switching, restoring the original appearance, restart persistence, and disable/re-enable. Verify composer focus, settings and dropdowns, rich conversations and narrow layouts whenever theme styles change. Record the client build and the checks completed in [DESKTOP-QA.md](./DESKTOP-QA.md).
6. Publish the GitHub release using the archive named in the manifest. For npm, publish that same verified tarball as `dsh-skin`. Git tags, GitHub releases, npm publication and site deployment are separate actions.

## Site deployment

Pushes to `main` run CI. After both validation jobs pass, CI deploys the catalogue through SSH and Docker Compose, then checks the public homepage. Check the pushed commit, CI result and live site separately.
