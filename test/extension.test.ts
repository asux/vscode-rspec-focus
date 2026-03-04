import assert from 'node:assert';
import vscode from 'vscode';

describe('RSpec Focus', () => {
  async function setupEditor(content: string) {
    const doc = await vscode.workspace.openTextDocument({
      content,
      language: 'ruby'
    });
    return await vscode.window.showTextDocument(doc);
  }

  describe('Add command', () => {
    it("adds :focus tag to 'it' block", async () => {
      const content = "it 'does something' do\nend";
      const editor = await setupEditor(content);
      editor.selection = new vscode.Selection(new vscode.Position(0, 5), new vscode.Position(0, 5));

      await vscode.commands.executeCommand('rspec-focus.add');

      assert.strictEqual(editor.document.lineAt(0).text, "it 'does something', :focus do");
    });

    it("adds :focus tag to 'describe' block", async () => {
      const content = "describe 'User' do\nend";
      const editor = await setupEditor(content);
      editor.selection = new vscode.Selection(new vscode.Position(0, 0), new vscode.Position(0, 0));

      await vscode.commands.executeCommand('rspec-focus.add');

      assert.strictEqual(editor.document.lineAt(0).text, "describe 'User', :focus do");
    });

    it('adds :focus tag to RSpec.describe block', async () => {
      const content = "RSpec.describe 'User' do\nend";
      const editor = await setupEditor(content);
      editor.selection = new vscode.Selection(new vscode.Position(0, 0), new vscode.Position(0, 0));

      await vscode.commands.executeCommand('rspec-focus.add');

      assert.strictEqual(editor.document.lineAt(0).text, "RSpec.describe 'User', :focus do");
    });

    it('adds :focus to nearest block when cursor is inside nested block', async () => {
      const content = "describe 'User' do\n  it 'is valid' do\n  end\nend";
      const editor = await setupEditor(content);
      editor.selection = new vscode.Selection(new vscode.Position(2, 2), new vscode.Position(2, 2));

      await vscode.commands.executeCommand('rspec-focus.add');

      assert.strictEqual(editor.document.lineAt(1).text, "  it 'is valid', :focus do");
    });

    it('does not add focus when tag is already present', async () => {
      const content = "it 'is valid', :focus do\nend";
      const editor = await setupEditor(content);
      editor.selection = new vscode.Selection(new vscode.Position(0, 0), new vscode.Position(0, 0));

      await vscode.commands.executeCommand('rspec-focus.add');

      assert.strictEqual(editor.document.lineAt(0).text, "it 'is valid', :focus do");
    });
  });

  describe('Clear command', () => {
    it('removes all :focus tags from the file', async () => {
      const content = "describe 'User', :focus do\n  it 'is valid', :focus do\n  end\nend";
      const editor = await setupEditor(content);

      await vscode.commands.executeCommand('rspec-focus.clear');

      assert.strictEqual(editor.document.lineAt(0).text, "describe 'User' do");
      assert.strictEqual(editor.document.lineAt(1).text, "  it 'is valid' do");
    });
  });

  describe('Configurable focus tag', () => {
    it('uses configured tag (e.g. wip) when adding and clearing', async () => {
      const config = vscode.workspace.getConfiguration('rspec-focus');
      const original = config.get<string>('focusTag');
      try {
        await config.update('focusTag', 'wip', vscode.ConfigurationTarget.Global);

        const content = "it 'work in progress' do\nend";
        const editor = await setupEditor(content);
        editor.selection = new vscode.Selection(new vscode.Position(0, 0), new vscode.Position(0, 0));

        await vscode.commands.executeCommand('rspec-focus.add');
        assert.strictEqual(editor.document.lineAt(0).text, "it 'work in progress', :wip do");

        await vscode.commands.executeCommand('rspec-focus.clear');
        assert.strictEqual(editor.document.lineAt(0).text, "it 'work in progress' do");
      } finally {
        await config.update('focusTag', original, vscode.ConfigurationTarget.Global);
      }
    });
  });
});
