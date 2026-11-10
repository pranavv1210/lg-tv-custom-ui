# Installation and troubleshooting

These instructions target the LG webOS TV CLI 3.2.6 on Windows. Equivalent
`ares-*` commands are available on macOS and Linux.

## Prerequisites

- LG webOS TV SDK or CLI.
- Developer Mode enabled on the television.
- A computer and television on the same network.
- The Developer Mode app's key server enabled while registering the device.

Developer Mode sessions expire. Renew the session in the TV's Developer Mode
app when an existing connection stops working.

## Register a television

Run the interactive setup and choose a private device name:

```powershell
ares-setup-device
```

Confirm that the CLI can reach the television:

```powershell
ares-device-info --device <your-device-name>
```

The exact passphrase/key-server flow depends on the installed SDK and the
Developer Mode app version. Follow the prompts from `ares-setup-device`;
never commit the generated device configuration or credentials.

## Verify and package

```powershell
.\scripts\verify.ps1
ares-package launcher/
```

The package name includes the application version, for example:

```text
com.pranav.lgtv.launcher_0.3.0_all.ipk
```

## Install, launch, and inspect

```powershell
ares-install --device <your-device-name> com.pranav.lgtv.launcher_0.3.0_all.ipk
ares-launch --device <your-device-name> com.pranav.lgtv.launcher
ares-inspect --device <your-device-name> --app com.pranav.lgtv.launcher --open
```

## Common problems

### Device is unreachable

- Confirm the computer and TV are on the same network.
- Confirm Developer Mode is still enabled.
- Reopen the Developer Mode app and renew its session.
- Re-run `ares-device-info` before attempting another install.

### Authentication or key error

Enable the key server in the Developer Mode app and repeat device setup. Do
not paste keys, passphrases, IP addresses, or local CLI device files into a
public issue.

### Package installs but does not launch

Check that the package ID is `com.pranav.lgtv.launcher`, then inspect the
application console with `ares-inspect`. Include the `Astra UA:` line and
JavaScript error in a bug report.

### Streaming card reports unavailable

Open Settings → App collection and enter an app ID verified on that specific
TV. Candidate IDs in the README are starting points only and are not
preconfigured.

