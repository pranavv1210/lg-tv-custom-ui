# Contributing

Contributions are welcome, especially from people testing older LG webOS TVs.

## Before opening a pull request

1. Keep application JavaScript ES5-compatible and dependency-free.
2. Do not introduce CSS custom properties, CSS Grid, `backdrop-filter`, or flex `gap`.
3. Animate only transforms and opacity on interaction paths.
4. Every visible control must work or clearly explain why it is unavailable.
5. Run:

```powershell
.\scripts\verify.ps1
```

## Bug reports

Include:

- TV model, webOS version, and firmware.
- The `Astra UA:` value from the inspector console.
- Exact reproduction steps and remote keys used.
- Whether the issue reproduces in Max, Auto, and Lite performance modes.
- Screenshots or console errors when available.

## Pull-request checklist

- [ ] `hello-tv/` remains unchanged.
- [ ] `scripts/verify.ps1` passes.
- [ ] New controls have registered actions and unavailable states.
- [ ] Platform-dependent behavior is documented and not overclaimed.
- [ ] TV-test status is updated honestly in `docs/TEST_REPORT.md`.

