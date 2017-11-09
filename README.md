# Rspec Focus

Add and clear `focus: true` in rspec files.
Ported from Atom's [package](https://github.com/traviskroberts/atom-rspec-focus) by @traviskroberts.

## Features

With this extension you can:

add focus: true tag to nearest RSpec test (moving upwards from cursor)
clear all focus: true tags from current buffer

Keymaps

`ctrl-alt-cmd-t` - Add focus: true tag to closest it, describe, context, feature, or scenario block.

`ctrl-alt-cmd-z` - Clear all focus: true tags from current open buffer.

## Release Notes

### 0.2.0 (2017-11-09)

- Support more RSpec keywords:
    `specify`, `example`, `feature`, `scenario`,
    `shared_examples`, `shared_examples_for`,
    `shared_context`, `it_behaves_like`.

### 0.1.0

- Initial release