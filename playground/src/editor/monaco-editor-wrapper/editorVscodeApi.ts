import { MonacoEditorBase } from './editor.js';
import { updateUserConfiguration } from 'vscode/service-override/configuration';
import type * as vscode from 'vscode';
// import { EditorAppBase, EditorAppBaseConfig, EditorAppType } from './editorAppBase.js';
import { registerExtension, IExtensionManifest } from 'vscode/extensions';
import 'vscode/default-extensions/theme-defaults';
import { MonacoEditorWrapper } from './wrapper.js';
import { UserConfig } from './wrapper.js';
import { IDisposable } from 'monaco-editor';


export type VscodeUserConfiguration = {
    json?: string;
}

export type EditorVscodeApiConfig = {
    extension?: IExtensionManifest | object;
    extensionFilesOrContents?: Map<string, string | URL>;
    userConfiguration?: VscodeUserConfiguration;
};

interface RegisterExtensionResult extends IDisposable {
    api: typeof vscode;
    registerFile: (path: string, getContent: () => Promise<Uint8Array | string>) => IDisposable;
    registerSyncFile: (path: string, content: Uint8Array | string) => IDisposable;
    dispose(): void;
}

export type RegisterLocalProcessExtensionResult = RegisterExtensionResult & {
    // getApi(): Promise<typeof vscode>;
    // setAsDefaultApi(): Promise<void>;
};

/**
 * The vscode-apo monaco-editor app uses vscode user and extension configuration for monaco-editor.
 */
export class EditorVscodeApi extends MonacoEditorBase implements MonacoEditorWrapper {

    // private config: EditorAppConfigVscodeApi;
    // private extensionRegisterResult: RegisterLocalProcessExtensionResult | RegisterExtensionResult | undefined;
    // private logger: Logger | undefined;
    private extensionRegisterResult: RegisterExtensionResult | undefined;

    async init() {
        const wrapperConfig = this.monacoConfig as EditorVscodeApiConfig;
        if (wrapperConfig.extension) {
            const extension = wrapperConfig.extension as IExtensionManifest;
            this.extensionRegisterResult = registerExtension(extension);
            const { registerFile: registerExtensionFile } = this.extensionRegisterResult
            if (wrapperConfig.extensionFilesOrContents) {
                for (const entry of wrapperConfig.extensionFilesOrContents) {
                    registerExtensionFile(entry[0], async () => {
                        const data = entry[1];
                        if (data instanceof URL) {
                            const json = data.href;
                            return (await fetch(json)).text();
                        } else {
                            return data;
                        }
                    });
                }
            }
        }

        await this.updateConfig(wrapperConfig.userConfiguration ?? {});
        console.log('Init of VscodeApiConfig was completed.');
    }

    async updateConfig(config: VscodeUserConfiguration) {
    if (config.json) {
        return updateUserConfiguration(config.json);
        }
    }

    // async createEditors(container: HTMLElement): Promise<void> {
    //     if (this.config.useDiffEditor) {
    //         await this.createDiffEditor(container);
    //     } else {
    //         await this.createEditor(container);
    //     }
    // }

    // added
    disposeApp(): void {
        console.log('DISPOSE VSCODE')
        this.disposeEditor();
        this.disposeDiffEditor();
        this.extensionRegisterResult?.dispose();
    }
}