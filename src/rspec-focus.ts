'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import Position = vscode.Position;
import Range = vscode.Range;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "rspec-focus" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let addDisposible = vscode.commands.registerCommand('rspec-focus.add', add);
    let clearDisposable = vscode.commands.registerCommand('rspec-focus.clear', clear);

    context.subscriptions.push(addDisposible);
    context.subscriptions.push(clearDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}

const KEYWORDS = [
    'it', 'example', 'specify',
    'describe', 'context', 'feature', 'scenario',
    'shared_examples', 'shared_examples_for', 'shared_context',
    'it_behaves_like'
]

function getKeywordsRegexp() {
    return new RegExp(`(?:${KEYWORDS.join('|')})\\s['"].+['"]\\sdo$`, 'm')
}

function getRSpecBlockRegexp() {
  return new RegExp(`^\s*RSpec\..*do$`, "m");
}

function add() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return; // No open text editor
    }
    editor.edit(edit => {
        const activePosition = editor.selection.active;
        for (var i = activePosition.line; i >= 0; i--) {
            var text = editor.document.lineAt(i).text;
            var matches = text.match(getKeywordsRegexp()) || text.match(getRSpecBlockRegexp());
            if (matches) {
                if (matches[0].includes(', focus: true')) {
                    continue;
                } else {
                    let position = new Position(i, text.lastIndexOf('do') - 1);
                    edit.replace(position, ', focus: true');
                    break;
                }
            }
        }
    });
}

function clear() {
    var editor = vscode.window.activeTextEditor;
    if (!editor) {
        return; // No open text editor
    }
    editor.edit(edit => {
        for (var i = 0; i < editor.document.lineCount; i++) {
            var text = editor.document.lineAt(i).text;
            const focus = ', focus: true';
            if (text.includes(focus)) {
                let start = new Position(i, text.indexOf(focus));
                let end = new Position(i, start.character + focus.length);
                edit.replace(new Range(start, end), '');
            }
        }
    });
}
