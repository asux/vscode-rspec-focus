# Change Log

All notable changes to the "rspec-focus" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.3.1] - 2026-03-03

### Added

- ESLint and Prettier for code quality and formatting.
- `.editorconfig` for consistent editor formatting.
- cSpell configuration in VS Code settings.
- Linting step to CI workflow.

### Changed

- License from BSD-2-Clause to MIT.
- Import statements and code formatting (e.g. `node:path`, default Mocha import).
- VS Code extension quickstart guide spacing and clarity.
- TypeScript `module`/`moduleResolution` to Node16 for compatibility with type resolution.

### Security

- Bump minimatch from 5.1.6 to 5.1.9 (Dependabot).

## [0.3.0] - 2025-12-26

- Fix insert before last `do` instead of first - [PR #2](https://github.com/asux/vscode-rspec-focus/pull/2) by [@dp28](https://github.com/dp28).
- Support for `RSpec.*` blocks - [PR #3](https://github.com/asux/vscode-rspec-focus/pull/3) by [@cmer](https://github.com/cmer).
- Changed `focus: true` to `:focus` symbol for RSpec focus tags.
- Support for `include_examples`, `include_context`, and `it_should_behave_like`.
- Upgrade to VSCode API 1.75, TypeScript 5.3.

## [0.2.0] - 2017-11-09

- Support more RSpec keywords:
  `specify`, `example`, `feature`, `scenario`,
  `shared_examples`, `shared_examples_for`,
  `shared_context`, `it_behaves_like`.

## [0.1.0] - 2017-08-30

- Initial release
