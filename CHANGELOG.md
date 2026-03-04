# Changelog

All notable changes to the "rspec-focus" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.4.0] - 2026-03-04

### Added

- Configurable focus tag: new setting `rspec-focus.focusTag` (default `"focus"`), configurable in Settings UI and `settings.json`. Use e.g. `"wip"` for work-in-progress tagging ([#1](https://github.com/asux/vscode-rspec-focus/issues/1)).
- Add and Clear commands now use the configured tag (e.g. `:focus` or `:wip`). Tag value is sanitized to valid symbol characters; invalid or empty values fall back to `"focus"`.

### Changed

- Tests use BDD style (`describe` / `it` / `expect`) with Mocha.
- Main entry file renamed from `rspec-focus.ts` to `extension.ts`; test file renamed to `extension.test.ts`.

## [0.3.1] - 2026-03-03

### Added

- ESLint and Prettier for code quality and formatting.
- `.editorconfig` for consistent editor formatting.
- cSpell configuration in VS Code settings.
- Linting step to CI workflow.
- Keybindings section in package.json (Ctrl+Alt+Cmd+T for Add, Ctrl+Alt+Cmd+Z for Clear).

### Changed

- License from BSD-2-Clause to MIT.
- Import statements and code formatting (e.g. `node:path`, default Mocha import).
- VS Code extension quickstart guide spacing and clarity.
- TypeScript `module`/`moduleResolution` to Node16 for compatibility with type resolution.

### Security

- Bump minimatch from 5.1.6 to 5.1.9 (Dependabot).

## [0.3.0] - 2025-12-26

### Added

- Support for `RSpec.*` blocks ([PR #3](https://github.com/asux/vscode-rspec-focus/pull/3) by [@cmer](https://github.com/cmer)).
- Support for `include_examples`, `include_context`, and `it_should_behave_like`.

### Changed

- Use `:focus` symbol instead of `focus: true` for RSpec focus tags.
- Upgrade to VSCode API 1.75, TypeScript 5.3.

### Fixed

- Insert before last `do` instead of first ([PR #2](https://github.com/asux/vscode-rspec-focus/pull/2) by [@dp28](https://github.com/dp28)).

## [0.2.0] - 2017-11-09

### Added

- Support for more RSpec keywords: `specify`, `example`, `feature`, `scenario`, `shared_examples`, `shared_examples_for`, `shared_context`, `it_behaves_like`.

## [0.1.0] - 2017-08-30

### Added

- Initial release.

[Unreleased]: https://github.com/asux/vscode-rspec-focus/compare/v0.4.0...HEAD
[0.4.0]: https://github.com/asux/vscode-rspec-focus/compare/v0.3.1...v0.4.0
[0.3.1]: https://github.com/asux/vscode-rspec-focus/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/asux/vscode-rspec-focus/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/asux/vscode-rspec-focus/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/asux/vscode-rspec-focus/releases/tag/v0.1.0
