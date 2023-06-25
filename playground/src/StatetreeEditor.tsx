import styles from './Editor.module.css';
import monarchSyntaxRaw from "../../syntaxes/statetree.tmLanguage.json?raw";
import example from '../../example/trafficlight-minimal.statetree?raw'
import React, { useRef } from 'react';
import { MonacoEditorReactComp } from '@typefox/monaco-editor-react';
import { UserConfig } from 'monaco-editor-wrapper';
import statetreeWorkerUrl from '../libs/statetree-server-worker.js?url'
import languageConfigurationRaw from '../../language-configuration.json?raw'
import responseStatetreeTmRaw from '../../out/syntaxes/statetree.monarch.js?raw'
import './userWorker'
import { useDebouncedCallback } from 'use-debounce'
import { generateStatements } from '../../src/codegen';
import { DocumentChangeResponse, LangiumAST } from '../../src/langium-utils/langium-ast';
import { Statemachine } from '../../src/language/generated/ast';
import { code as codeStore } from './store'

const extensionFilesOrContents = new Map<string, string | URL>();
extensionFilesOrContents.set('/statetree-configuration.json', languageConfigurationRaw);
extensionFilesOrContents.set('/statetree-grammar.json', monarchSyntaxRaw);

// Language Server preparation
const workerUrl = new URL(statetreeWorkerUrl, window.location.href);

const userConfig: UserConfig = {
    htmlElement: document.getElementById('monaco-editor-root') as HTMLElement,
    wrapperConfig: {
        useVscodeConfig: true,
        serviceConfig: {
            enableThemeService: true,
            enableTextmateService: true,
            enableModelService: true,
            configureEditorOrViewsServiceConfig: {
                enableViewsService: false,
                useDefaultOpenEditorFunction: true
            },
            configureConfigurationServiceConfig: {
                defaultWorkspaceUri: '/tmp/'
            },
            enableKeybindingsService: true,
            enableLanguagesService: true,
            debugLogging: true
        },
        monacoVscodeApiConfig: {
            extension: {
                name: 'statetree',
                publisher: 'winston-fassett',
                version: '1.0.0',
                engines: { vscode: '*' },
                contributes: {
                    languages: [{
                        id: 'statetree', 
                        extensions: ['.statetree'],
                        aliases: ['statetree', 'Statetree'],
                        configuration: './statetree-configuration.json'
                    }],
                    grammars: [{
                        language: 'statetree',
                        scopeName: 'source.statetree', 
                        path: './statetree-grammar.json'
                    }],
                    keybindings: [{
                        key: 'ctrl+p',
                        command: 'editor.action.quickCommand',
                        when: 'editorTextFocus'
                    }, {
                        key: 'ctrl+shift+c',
                        command: 'editor.action.commentLine',
                        when: 'editorTextFocus'
                    }]
                },
                
            },
            extensionFilesOrContents: extensionFilesOrContents,
            userConfiguration: {
                json: `{
                    "editor.minimap.enabled": true,
                    "workbench.colorTheme": "Default Dark Modern",
                    "editor.fontSize": 12,
                    "editor.lightbulb.enabled": true,
                    // "editor.lineHeight": 20,
                    "editor.guides.bracketPairsHorizontal": "active",
                    "editor.lightbulb.enabled": true
                }`
            }      
        },
    },
    editorConfig: {
        languageId: 'statetree',
        useDiffEditor: false,
        automaticLayout: true,
        theme: 'vs-dark',
        code: example,
        editorOptions: {
            // theme: 'vs-dark',
        }
    },
    languageClientConfig: {
        enabled: true,
        useWebSocket: false,
        workerConfigOptions: {
            url: workerUrl,
            type: 'module', 
            name: 'Statetree LS'
        }
    }
};

export function StatetreeEditor ({ onModelCreated, ...rest }: { onModelCreated: (model:Statemachine) => void } & Record<string,any>) {
  const monacoEditor = useRef<MonacoEditorReactComp>(null)
  return <MonacoEditorReactComp
      ref={monacoEditor}
      userConfig={userConfig}      
      onTextChanged={text => {
        codeStore.set(text)
      }}
      onLoad={() => {
        if (!monacoEditor.current) {
            throw new Error("Unable to get a reference to the Monaco Editor");
        }
        // verify we can get a ref to the language client
        const lc = monacoEditor.current.getEditorWrapper()
            ?.getLanguageClient();
        if (!lc) {
            throw new Error("Could not get handle to Language Client on mount");
        }

        // register to receive DocumentChange notifications
        lc.onNotification("browser/DocumentChange", (resp: DocumentChangeResponse) =>{
            // console.log('change!', resp)
            // decode the received Ast
            const statemachineAst = new LangiumAST().deserializeAST(resp.content) as Statemachine;
            // this.preview.current?.startPreview(statemachineAst, resp.diagnostics);
            // console.log({ statemachineAst })
            onModelCreated(statemachineAst)
        });

        /**
         * Callback invoked when the document processed by the LS changes
         * Invoked on startup as well
         * @param resp Response data
         */
        function onDocumentChange(resp: DocumentChangeResponse) {

        }
      }}
    //   onTextChanged={(text, isDirty) => { handleTextChanged(text) }}
      style={{
          'paddingTop': '5px',
          'height': '100%'
      }}
  />;
}