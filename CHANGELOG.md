# Changelog

All notable changes to this project are documented here. This project follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) conventions.

## [Unreleased]

- Physical-TV validation, verified streaming app IDs, and performance tuning remain pending.

## [0.4.0] - 2026-11-10

### Added

- Android TV-inspired cinematic home composition with an original recommendation hero.
- Profile, search, Live, Apps, network, and settings controls in the top navigation.
- Six-item recommendation rail and a complete twelve-app home shelf.
- Brand tiles for Disney+, Sony LIV, ZEE5, JioCinema, Spotify, Browser, and Photos.

### Changed

- Replaced the sparse four-card launcher home with a dense, clean streaming layout.
- Improved 1920x1080 and scaled 1280x720 spacing so app icons remain visible.
- Bumped the launcher package version to 0.4.0.

## [0.3.0] - 2026-11-10

### Added

- Fixed 1920×1080 stage with viewport scaling.
- Liquid Glass material system with lightweight fallbacks.
- Home, Apps, Media, Settings, Inputs, and Network experiences.
- Central action registry and named-zone remote focus manager.
- Persistent themes, clock, motion, and performance preferences.
- Editable app IDs, app ordering, visibility controls, and diagnostic probe.
- Local launch recents, test media player, and FPS overlay.
- Original SVG placeholder artwork for the configured streaming services.
- Automated ES5, metadata, asset, and banned-feature verification.

### Changed

- Reorganized launcher code into `core/`, `ui/`, and `screens/` modules.
- Wrapped Luna calls in normalized timeout and error handling.
- Replaced viewport-unit composition with deterministic TV-stage scaling.

## [0.2.0]

- Initial cinematic launcher prototype with streaming rows and basic views.

## [0.1.0]

- First packageable Astra Home prototype.

