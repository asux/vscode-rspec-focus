import * as assert from 'assert';
import * as vscode from 'vscode';

suite("RSpec Focus Functional Tests", () => {

    async function setupEditor(content: string) {
        const doc = await vscode.workspace.openTextDocument({
            content: content,
            language: 'ruby'
        });
        return await vscode.window.showTextDocument(doc);
    }

    test("Add focus to 'it' block", async () => {
        const content = "it 'does something' do\nend";
        const editor = await setupEditor(content);
        
        // Position cursor on the first line
        editor.selection = new vscode.Selection(new vscode.Position(0, 5), new vscode.Position(0, 5));
        
        await vscode.commands.executeCommand('rspec-focus.add');
        
        assert.strictEqual(editor.document.lineAt(0).text, "it 'does something', focus: true do");
    });

    test("Add focus to 'describe' block", async () => {
        const content = "describe 'User' do\nend";
        const editor = await setupEditor(content);
        
        editor.selection = new vscode.Selection(new vscode.Position(0, 0), new vscode.Position(0, 0));
        await vscode.commands.executeCommand('rspec-focus.add');
        
        assert.strictEqual(editor.document.lineAt(0).text, "describe 'User', focus: true do");
    });

    test("Add focus to RSpec.describe block", async () => {
        const content = "RSpec.describe 'User' do\nend";
        const editor = await setupEditor(content);
        
        editor.selection = new vscode.Selection(new vscode.Position(0, 0), new vscode.Position(0, 0));
        await vscode.commands.executeCommand('rspec-focus.add');
        
        assert.strictEqual(editor.document.lineAt(0).text, "RSpec.describe 'User', focus: true do");
    });

    test("Add focus to nested block from inside", async () => {
        const content = "describe 'User' do\n  it 'is valid' do\n  end\nend";
        const editor = await setupEditor(content);
        
        // Position cursor inside the 'it' block
        editor.selection = new vscode.Selection(new vscode.Position(2, 2), new vscode.Position(2, 2));
        await vscode.commands.executeCommand('rspec-focus.add');
        
        assert.strictEqual(editor.document.lineAt(1).text, "  it 'is valid', focus: true do");
    });

    test("Idempotency: don't add focus if already present", async () => {
        const content = "it 'is valid', focus: true do\nend";
        const editor = await setupEditor(content);
        
        editor.selection = new vscode.Selection(new vscode.Position(0, 0), new vscode.Position(0, 0));
        await vscode.commands.executeCommand('rspec-focus.add');
        
        assert.strictEqual(editor.document.lineAt(0).text, "it 'is valid', focus: true do");
    });

    test("Clear all focus in file", async () => {
        const content = "describe 'User', focus: true do\n  it 'is valid', focus: true do\n  end\nend";
        const editor = await setupEditor(content);
        
        await vscode.commands.executeCommand('rspec-focus.clear');
        
        assert.strictEqual(editor.document.lineAt(0).text, "describe 'User' do");
        assert.strictEqual(editor.document.lineAt(1).text, "  it 'is valid' do");
    });
});
