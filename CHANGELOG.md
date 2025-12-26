# Change Log

All notable changes to the "rspec-focus" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## 0.3.0 (2025-12-26)

- Fix insert before last `do` instead of first - [PR #2](https://github.com/asux/vscode-rspec-focus/pull/2) by @dp28.
- Support for `RSpec.*` blocks - [PR #3](https://github.com/asux/vscode-rspec-focus/pull/3) by @cmer.
- Changed `focus: true` to `:focus` symbol for RSpec focus tags.
- Support for `include_examples`, `include_context`, and `it_should_behave_like`.
- Upgrade to VSCode API 1.75, TypeScript 5.3.

## 0.2.0 (2017-11-09)

- Support more RSpec keywords:
    `specify`, `example`, `feature`, `scenario`,
    `shared_examples`, `shared_examples_for`,
    `shared_context`, `it_behaves_like`.

## 0.1.0

- Initial release
