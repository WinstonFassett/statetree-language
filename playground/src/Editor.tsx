import styles from './Editor.module.css';
import monarchSyntaxRaw from "../../syntaxes/statetree.tmLanguage.json?raw";
import example from '../../example/trafficlight.statetree?raw'
import React from 'react';
import { MonacoEditorReactComp } from '@typefox/monaco-editor-react';
import { UserConfig } from 'monaco-editor-wrapper';
import statetreeWorkerUrl from './generated/statetree-server-worker.js?url'
import languageConfigurationRaw from '../../language-configuration.json?raw'
import responseStatetreeTmRaw from './generated/syntaxes/statetree.monarch.js?raw'
import './userWorker'
import { useDebouncedCallback } from 'use-debounce'
import { generateStatements } from '../../src/codegen';

const extensionFilesOrContents = new Map<string, string | URL>();
console.log({
    languageConfigurationRaw,
    responseStatetreeTmRaw
})
extensionFilesOrContents.set('/statetree-configuration.json', languageConfigurationRaw);
extensionFilesOrContents.set('/statetree-grammar.json', monarchSyntaxRaw);

// Language Server preparation
const workerUrl = new URL(statetreeWorkerUrl, window.location.href);
console.log(`Langium worker URL: ${workerUrl}`);


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

export function Editor () {
  const handleTextChanged = useDebouncedCallback((text: string) => {
    console.log('text changed', text)
    // generateStatements(text)
  }, 500)
  return <MonacoEditorReactComp
      userConfig={userConfig}
      onTextChanged={(text, isDirty) => { handleTextChanged(text) }}
      style={{
          'paddingTop': '5px',
          'height': '80vh'
      }}
  />;
}