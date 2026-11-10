# README analysis

## Existing workspace material

Before this documentation pass, the root README was a short developer handoff:
it named Astra Home, listed technical traits, and included package/install
commands. It did not provide a strong visual introduction, compatibility
matrix, honest feature-status summary, architecture overview, contribution
guidance, license, roadmap, or public-repository safety guidance.

The existing technical documents were useful and were retained:

- `AUDIT.md` explains the launcher rebuild and architectural risks.
- `DESIGN_SYSTEM.md` records the material, token, and motion choices.
- `PLATFORM_NOTES.md` separates documented APIs from untested assumptions.
- `TEST_REPORT.md` distinguishes implementation from desktop and TV testing.
- `scripts/verify.ps1` checks syntax, metadata, references, and legacy-engine constraints.

Missing items were a complete README, installation troubleshooting, roadmap,
license, changelog, contribution guide, repository ignores, and line-ending policy.

## Reference README study

### webosbrew/webos-homebrew-channel

- First impression: immediately names the project and lists concrete webOS capabilities.
- Structure: features lead into installation and updating.
- Quick start: operational commands and manual alternatives are easy to locate.
- Visuals: relatively sparse; the strength is practical, platform-specific detail.
- Limitations: root-only behavior is marked explicitly.
- Trust: exact commands, release artifacts, and maintenance procedures.

### webosbrew/dev-manager-desktop

- First impression: one-line purpose is unambiguous.
- Structure: download matrix first, then features and platform-specific instructions.
- Quick start: readers can find the correct installer by OS and architecture.
- Visuals: product identity is secondary to download clarity.
- Limitations: dropped operating systems and unavailable architectures are explicit.
- Trust: active releases, supported platforms, and concrete prerequisites.

### jellyfin/jellyfin-web

- First impression: establishes its relationship to the larger Jellyfin project.
- Structure: project context, contribution invitation, then build process.
- Quick start: numbered clone/install/run/build commands.
- Visuals: restrained; documentation and ecosystem links carry credibility.
- Limitations: contribution expectations are linked rather than duplicated.
- Trust: consistent project vocabulary and a clear contribution path.

### shaka-project/shaka-player

- First impression: logo, concise capability statement, and a direct explanation of how it works.
- Structure: purpose, support policy, compatibility matrices, feature details, FAQ, contribution.
- Quick start: detailed tutorials are separated from the front-page overview.
- Visuals: the logo anchors a technically dense README.
- Limitations: tested, expected, community-supported, and unsupported platforms are distinguished.
- Trust: explicit support matrices, maintained branches, roadmap, and named maintainers.

## Patterns applied

1. State the product and target user in the first few lines.
2. Show a real product image before asking readers to parse architecture.
3. Put status and compatibility near the top.
4. Keep the quick start copy-pasteable and move troubleshooting into a focused guide.
5. Separate implemented, desktop-tested, TV-tested, and unsupported behavior.
6. Use compact tables for hardware, features, and remote controls.
7. Link to deeper technical documents instead of overloading the README.
8. Establish maintenance signals with a changelog, roadmap, contribution guide, and license.

Only communication patterns were adopted; no wording, imagery, or code was
copied from the reference projects.

