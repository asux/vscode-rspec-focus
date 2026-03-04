# Rspec Focus

Add and clear `:focus` tag in RSpec files.
Ported from Atom's [package](https://github.com/traviskroberts/atom-rspec-focus) by [@traviskroberts](https://github.com/traviskroberts).

This extension also available at [Open VCX](https://open-vsx.org/extension/asux/rspec-focus).

## Features

With this extension you can:

- add `:focus` tag to nearest RSpec test (moving upwards from cursor)
- clear all `:focus` tags from current buffer

Keymaps

`ctrl-alt-cmd-t` - Add `:focus` tag to closest `it`, `describe`, `context`, `feature`, `scenario`, `shared_examples`, `shared_examples_for`, `shared_context`, `include_context`, `include_examples`, `it_behaves_like` block.

`ctrl-alt-cmd-z` - Clear all `:focus` tags from current open buffer.

## Release Notes

Full changelog available at [CHANGELOG.md](./CHANGELOG.md)
