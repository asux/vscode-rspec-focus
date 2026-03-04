# Rspec Focus

Add and clear focus tag in RSpec files (default `:focus`, configurable).
Ported from Atom's [package](https://github.com/traviskroberts/atom-rspec-focus) by [@traviskroberts](https://github.com/traviskroberts).

This extension also available at [Open VCX](https://open-vsx.org/extension/asux/rspec-focus).

## Features

With this extension you can:

- add the configured focus tag to nearest RSpec test (moving upwards from cursor)
- clear all instances of that tag from current buffer

### Configurable focus tag

The tag used for focus is configurable (default: `focus`, e.g. `it 'example', :focus do`). You can switch to `wip` or any other symbol:

- **Settings (UI):** Open Settings, search for “RSpec Focus” or “focus tag”, and set **Focus Tag** (e.g. `wip`).
- **settings.json:** Add `"rspec-focus.focusTag": "wip"` (or another name). The value is the symbol name without the colon.

Add and Clear commands always use the current setting, so you can use `:focus` for normal runs and e.g. `:wip` for work-in-progress.

### Keymaps

`ctrl-alt-cmd-t` — Add the configured tag to the closest `it`, `describe`, `context`, `feature`, `scenario`, `shared_examples`, `shared_examples_for`, `shared_context`, `include_context`, `include_examples`, `it_behaves_like` block.

`ctrl-alt-cmd-z` — Clear all instances of the configured tag from the current buffer.

## Release Notes

Full changelog available at [CHANGELOG.md](./CHANGELOG.md)
