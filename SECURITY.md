# Security Policy

## Reporting a vulnerability

Use GitHub's private vulnerability reporting flow from the repository Security tab. Include the affected theme and dsh-skin version, the DSH version, reproduction steps, and the impact you observed.

Do not publish credentials, private workspace paths, session contents, or working exploit details in a public issue. If private reporting is unavailable, open an issue with no sensitive details and ask the maintainer for a private contact channel.

## Project boundary

DSH Skin runs in the DeepSeek Harness desktop client UI. It registers a theme picker, applies theme tokens and scoped CSS, and saves the selected theme on the device. A skin must not read credentials or session bodies, add telemetry, load remote scripts, or modify the Harness installation directory.

Only the current release line receives fixes. DeepSeek Harness remains a Developer Preview, so reports caused by an upstream interface change may require a compatibility update instead of a security patch.
