# Launcher audit

## Baseline

`hello-tv/` is the known-working baseline and was not modified. The pre-rebuild launcher was a packageable 0.2.0 app with a cinematic home screen and basic remote navigation.

## Weaknesses found

- Layout used viewport units rather than a deterministic 1920×1080 stage.
- Responsibilities were split inconsistently across flat JavaScript files.
- Streaming IDs were hard-coded as unavailable with no editor or discovery diagnostic.
- Settings lacked performance mode, app ordering, diagnostics, and media URL support.
- Media had no recents or playback path.
- Focus navigation inferred rows from DOM parents instead of explicit, named zones.
- Platform calls lacked a normalized timeout/error result.
- No formal platform or test records existed.
- Old liquid-glass styles transitioned box shadow as well as compositor-friendly properties.

## Rebuild decisions

- Fixed stage scaled once from the viewport.
- One delegated action registry and one focus manager.
- Static screen DOM rendered once; card collections update only when settings change.
- Fake glass is the default; no runtime blur.
- Service calls normalize to `{ok,data,error}` and time out.
- Unknown app IDs remain empty and editable.
- Platform-limited controls open honest information panels.

## Public-repository cleanup

| Root item | Classification | Reason |
|---|---|---|
| `launcher/` | Keep | Current Astra Home application source |
| `hello-tv/` | Keep | Known-working baseline; preserved unchanged |
| `docs/` | Keep | Design, platform, testing, installation, and roadmap records |
| `scripts/` | Keep | Repeatable source verification |
| `.github/` | Keep | Public bug-report template |
| `README.md`, `LICENSE`, `CHANGELOG.md`, `CONTRIBUTING.md` | Keep | Public project entry points |
| `.gitignore`, `.gitattributes` | Keep | Artifact hygiene and line-ending policy |
| `*.ipk` | Remove / ignore | Reproducible packaging output; belongs in Releases |
| Root `preview-*`, `qa-*`, and `final-*` images | Remove / ignore | Temporary or unreliable browser QA captures |
| `.workstate/` | Remove / ignore | Local tool state, not project source |

The reliable 1920×1080 Home capture was compressed into
`docs/assets/home.jpg`; all other root QA captures were removed.

