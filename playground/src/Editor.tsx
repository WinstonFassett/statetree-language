import styles from './Editor.module.css';
import monarchSyntaxRaw from "../../syntaxes/statetree.tmLanguage.json?raw";
import example from '../../example/trafficlight.statetree?raw'
import React, { useMemo, useRef } from 'react';
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

import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js';
import 'monaco-editor/esm/vs/language/typescript/monaco.contribution.js';
// import * as monaco from 'monaco-editor';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

// import { activateMonacoJSXHighlighter } from './MonacoJsx';

const extensionFilesOrContents = new Map<string, string | URL>();
extensionFilesOrContents.set('/statetree-configuration.json', languageConfigurationRaw);
extensionFilesOrContents.set('/statetree-grammar.json', monarchSyntaxRaw);

// Language Server preparation
const workerUrl = new URL(statetreeWorkerUrl, window.location.href);

const baseConfig: UserConfig = {
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
            extensionFilesOrContents: extensionFilesOrContents
            
        }
    },
    editorConfig: {
        languageId: 'statetree',
        useDiffEditor: false,
        automaticLayout: true,
        theme: 'vs-dark',
        code: example,
        editorOptions: {
            theme: 'vs-dark',
            minimap: { enabled: false }
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

const altConfig: UserConfig = {
    htmlElement: undefined as any,
    wrapperConfig: {
        useVscodeConfig: false
    },
    editorConfig: {
        languageId: 'javascript',
        useDiffEditor: false,
        automaticLayout: true,
        theme: 'vs-dark',
        code: `function sayHello(): string {
    return "Hello";
};`
    },
    languageClientConfig: {
        enabled: false
    }
};

type Props = { 
    language: string
    file: string
    theme: string
    code: string
    onChange: (code: string) => void
    onModelCreated: (model:Statemachine) => void 
}

// This function is used to active the JSX syntax highlighting
export const activateMonacoJSXHighlighter = async (monacoEditor, monaco) => {
    const { default: traverse } = await import('@babel/traverse')
    const { parse } = await import('@babel/parser')
    const { default: MonacoJSXHighlighter } = await import(
        'monaco-jsx-highlighter'
    )

    const monacoJSXHighlighter = new MonacoJSXHighlighter(
        monaco,
        parse,
        traverse,
        monacoEditor
    )

    monacoJSXHighlighter.highlightOnDidChangeModelContent()
    monacoJSXHighlighter.addJSXCommentCommand()

    return {
        monacoJSXHighlighter,
    }
}

export function Editor ({ language, file, code, onChange, onModelCreated }: Props) {
  const monacoEditor = useRef<MonacoEditorReactComp>(null)
  const userConfig = useMemo(() => ({...altConfig, editorConfig: { ...baseConfig.editorConfig, code, languageId: language }}), [code, language])
  console.log('userConfig', userConfig)
  console.log(language, file)
  return <MonacoEditorReactComp
      ref={monacoEditor}
      userConfig={userConfig}
      onLoad={() => {
        if (!monacoEditor.current) {
            throw new Error("Unable to get a reference to the Monaco Editor");
        }
        const editor = monacoEditor.current.getEditorWrapper().getEditor()
        // monacoEditor.current.getEditorWrapper().getMonacoEditorWrapper()?.getEditor()
        // monacoEditor.current.getEditorWrapper().getMonacoEditorWrapper()?.getEditor
        console.log('activate highlighter')
        activateMonacoJSXHighlighter(editor, monaco)
        // verify we can get a ref to the language client
        const lc = monacoEditor.current.getEditorWrapper()
            ?.getLanguageClient();
        // if (!lc) {
        //     throw new Error("Could not get handle to Language Client on mount");
        // }

        // // register to receive DocumentChange notifications
        // lc.onNotification("browser/DocumentChange", (resp: DocumentChangeResponse) =>{
        //     console.log('change!', file, resp)
        //     if (file === '/machine.statetree') {
        //         // decode the received Ast
        //         const statemachineAst = new LangiumAST().deserializeAST(resp.content) as Statemachine;
        //         // this.preview.current?.startPreview(statemachineAst, resp.diagnostics);
        //         console.log({ statemachineAst })
        //         onModelCreated(statemachineAst)
        //     }
        // });

        /**
         * Callback invoked when the document processed by the LS changes
         * Invoked on startup as well
         * @param resp Response data
         */
        function onDocumentChange(resp: DocumentChangeResponse) {

        }
      }}
      onTextChanged={(text, dirty) => onChange(text)}
    //   onTextChanged={(text, isDirty) => { handleTextChanged(text) }}
      style={{
          'paddingTop': '5px',
          'height': '100%'
      }}
  />;
}