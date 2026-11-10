# Astra Home

Astra Home is a standalone Liquid Glass streaming launcher for an LG 43UF770T-TA running the webOS 2.0 generation.

- Fixed 1920×1080 stage scaled to the current viewport.
- ES5-only, dependency-free application code.
- Central action registry and named-zone focus manager.
- Home, Apps, Media, Settings, Inputs and Network experiences.
- Editable app launch IDs, local recents, diagnostics, and persistent preferences.
- Fake-glass rendering designed for WebKit 538.2 without runtime blur.

See [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md), [PLATFORM_NOTES.md](docs/PLATFORM_NOTES.md), and [TEST_REPORT.md](docs/TEST_REPORT.md).

## Verify

```powershell
.\scripts\verify.ps1
```

## Package

```powershell
ares-package launcher
```

## Install and launch

```powershell
ares-install --device OldLGTV com.pranav.lgtv.launcher_0.3.0_all.ipk
ares-launch --device OldLGTV com.pranav.lgtv.launcher
ares-inspect --device OldLGTV --app com.pranav.lgtv.launcher --open
```

`hello-tv/` remains the untouched known-working baseline.

