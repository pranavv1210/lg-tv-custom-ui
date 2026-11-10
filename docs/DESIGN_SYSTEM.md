# Astra Liquid Glass design system

## Direction

A cinematic streaming interface with a single expressive gesture: crimson light washing across the primary rail. Everything else is quiet, geometric, and television-legible.

## Tokens

- Base: `#05060A`; charcoal: `#0D0F16`; navy: `#0A1022`.
- Text: `#F2F4F8`; secondary 62% white; tertiary 38% white.
- Ambient: crimson 28%; violet 18%; accent `#CFEAFF`.
- Grid: 8px; safe area: 96px horizontal, 64px vertical.
- Radii: 28px cards, 36px panels, full pills.
- Motion: 120ms focus, 220ms panels/indicator, 320ms screens.
- Easing: `cubic-bezier(.22,.61,.36,1)`.

Tokens are documented as literals in `css/tokens.css`. They are intentionally repeated because the target engine lacks CSS custom properties.

## Material weights

- `.glass`: cards and settings rows.
- `.glass-thin`: header controls, navigation, modal actions.
- `.glass-strong`: modal and toast surfaces.

All use layered translucent fills, borders, inner highlights, a static sheen, and opaque fallbacks. Optional backdrop blur is detected but remains disabled.

