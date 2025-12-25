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
];

function getKeywordsRegexp(): RegExp {
    return new RegExp(`(?:${KEYWORDS.join('|')})\\s['"].+['"]\\sdo$`, 'm');
}

function getRSpecBlockRegexp(): RegExp {
    return /^\s*RSpec\..*do$/m;
}

async function add() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }

    await editor.edit(editBuilder => {
        const activePosition = editor.selection.active;
        for (let i = activePosition.line; i >= 0; i--) {
            const line = editor.document.lineAt(i);
            const text = line.text;
            const matches = text.match(getKeywordsRegexp()) || text.match(getRSpecBlockRegexp());
            
            if (matches) {
                if (text.includes(', focus: true')) {
                    continue;
                } else {
                    const doIndex = text.lastIndexOf('do');
                    if (doIndex !== -1) {
                        const position = new Position(i, doIndex - 1);
                        editBuilder.insert(position, ', focus: true');
                    }
                    break;
                }
            }
        }
    });
}

async function clear() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }

    await editor.edit(editBuilder => {
        const focusString = ', focus: true';
        for (let i = 0; i < editor.document.lineCount; i++) {
            const line = editor.document.lineAt(i);
            const text = line.text;
            const focusIndex = text.indexOf(focusString);
            
            if (focusIndex !== -1) {
                const start = new Position(i, focusIndex);
                const end = new Position(i, focusIndex + focusString.length);
                editBuilder.delete(new Range(start, end));
            }
        }
    });
}
