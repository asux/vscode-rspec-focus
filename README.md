# Rspec Focus

Add and clear `:focus` tag in RSpec files.
Ported from Atom's [package](https://github.com/traviskroberts/atom-rspec-focus) by [@traviskroberts](https://github.com/traviskroberts).

## Features

With this extension you can:
- add `:focus` tag to nearest RSpec test (moving upwards from cursor)
- clear all `:focus` tags from current buffer

Keymaps

`ctrl-alt-cmd-t` - Add `:focus` tag to closest `it`, `describe`, `context`, `feature`, `scenario`, `shared_examples`, `shared_examples_for`, `shared_context`, `include_context`, `include_examples`, `it_behaves_like` block.

`ctrl-alt-cmd-z` - Clear all `:focus` tags from current open buffer.

## Release Notes

## 0.3.0 (2025-12-26)

- Fix insert before last `do` instead of first - [PR #2](https://github.com/asux/vscode-rspec-focus/pull/2) by @dp28.
- Support for `RSpec.*` blocks - [PR #3](https://github.com/asux/vscode-rspec-focus/pull/3) by @cmer.
- Changed `focus: true` to `:focus` symbol for RSpec focus tags.
- Support for `include_examples`, `include_context`, and `it_should_behave_like`.
- Upgrade to VSCode API 1.75, TypeScript 5.3.

### 0.2.0 (2017-11-09)

- Support more RSpec keywords:
    `specify`, `example`, `feature`, `scenario`,
    `shared_examples`, `shared_examples_for`,
    `shared_context`, `it_behaves_like`.

### 0.1.0

- Initial release
