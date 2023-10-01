import { EditorAppConfigClassic, MonacoEditorLanguageClientWrapper, UserConfig, WorkerConfigDirect, WorkerConfigOptions } from 'monaco-editor-wrapper';
import { IDisposable } from 'monaco-editor';
import * as vscode from 'vscode';
import React, { CSSProperties } from 'react';

export type MonacoEditorProps = {
    style?: CSSProperties;
    className?: string;
    userConfig: UserConfig,
    onTextChanged?: (text: string, isDirty: boolean) => void;
    onLoad?: () => void;
}

let monacoInitializerQueue = Promise.resolve()
function enqueueMonacoInitializer(makePromise:any) {
    monacoInitializerQueue = monacoInitializerQueue.then(makePromise).catch(e => {
        console.error("Error during initialization:", e);        
    });
    return monacoInitializerQueue;
}

export class MonacoEditorReactComp extends React.Component<MonacoEditorProps> {

    private wrapper: MonacoEditorLanguageClientWrapper = new MonacoEditorLanguageClientWrapper();
    private containerElement?: HTMLDivElement;
    private _subscription: IDisposable | null = null;
    private isStarting?: Promise<void>;
    private isReiniting?: Promise<void>;
    constructor(props: MonacoEditorProps) {
        super(props);
        this.containerElement = undefined;
    }

    override async componentDidMount() {
        await enqueueMonacoInitializer(() => this.initMonaco())        
    }

    override componentWillUnmount() {
        this.destroyMonaco();
    }

    private assignRef = (component: HTMLDivElement) => {
        this.containerElement = component;
    };

    private async destroyMonaco(): Promise<void> {
        if (this.wrapper) {
            await this.isStarting;
            try {
                await this.wrapper.dispose();
            } catch {
                // This is fine
                // Sometimes the language client throws an error during disposal
                // This should not prevent us from continue working
            }
        }
        if (this._subscription) {
            this._subscription.dispose();
        }
    }

    private async initMonaco() {
        const {
            className,
            userConfig,
            onTextChanged,
            onLoad,
        } = this.props;

        if (this.containerElement) {
            this.containerElement.className = className ?? '';

            userConfig.htmlElement = this.containerElement;
            this.isStarting = this.wrapper.start(userConfig);
            await this.isStarting;

            // once awaiting isStarting is done onLoad is called if available
            onLoad && onLoad();

            if (onTextChanged) {
                const model = this.wrapper.getModel();
                if (model) {
                    const verifyModelContent = () => {
                        const modelText = model.getValue();
                        onTextChanged(modelText, modelText !== userConfig.wrapperConfig.editorAppConfig.code);
                    };

                    this._subscription = model.onDidChangeContent(() => {
                        verifyModelContent();
                    });
                    // do it initially
                    verifyModelContent();
                }
            }
        }
    }

    updateLayout(): void {
        this.wrapper.updateLayout();
    }

    getEditorWrapper() {
        return this.wrapper;
    }

    /**
     * Executes a custom LSP command by name with args, and returns the result
     * @param cmd Command to execute
     * @param args Arguments to pass along with this command
     * @returns The result of executing this command in the language server
     */
    executeCommand(cmd: string, ...args: unknown[]): Thenable<unknown> {
        return vscode.commands.executeCommand(cmd, ...args);
    }

    override render() {
        return (
            <div
                ref={this.assignRef}
                style={this.props.style}
                className={this.props.className}
            />
        );
    }
}
