import styles from './Editor.module.css';
import monarchSyntaxRaw from "../../../syntaxes/statetree.tmLanguage.json?raw";
import React, { lazy, useMemo, useRef } from 'react';

import type { UserConfig } from 'monaco-editor-wrapper';
import statetreeWorkerUrl from '../../libs/statetree-server-worker.js?url'

import languageConfigurationRaw from '../../../language-configuration.json?raw'
import responseStatetreeTmRaw from '../../out/syntaxes/statetree.monarch.js?raw'
import { getWorker } from '../userWorker'
import { useDebouncedCallback } from 'use-debounce'
import { generateJavaScript } from '../../../src/language/codegen';
import { DocumentChangeResponse, LangiumAST } from '../../../src/langium-utils/langium-ast';
import { Statemachine } from '../../../src/language/generated/ast';
import { code as codeStore, theme } from '../store'
import { useStore } from '@nanostores/react';

const MonacoEditorReactComp = lazy(() => import('./monaco-editor-react')) ;

const extensionFilesOrContents = new Map<string, string | URL>();
extensionFilesOrContents.set('/statetree-configuration.json', languageConfigurationRaw);
extensionFilesOrContents.set('/statetree-grammar.json', monarchSyntaxRaw);

// Language Server preparation
const workerUrl = new URL(statetreeWorkerUrl, window.location.href);

const getTheme = (isDark: boolean) => isDark ? 'Default Dark+' : 'Default Light+'

export function StatetreeEditor ({ value, onChange, onAstCreated, ...rest }: { value: string, onChange: (value:string) => void, onAstCreated: (astJson: string) => void } & Record<string,any>) {
  const monacoEditor = useRef<typeof MonacoEditorReactComp>(null)
  const isDark = useStore(theme.dark)
  const userConfig: UserConfig = useMemo(
    () => ({
      htmlElement: undefined as unknown as any,
      wrapperConfig: {
        serviceConfig: {
          enableThemeService: true,
          enableTextmateService: true,
          enableModelService: true,
          configureEditorOrViewsService: {},
          configureConfigurationService: {
            defaultWorkspaceUri: "/tmp/",
          },
          enableLanguagesService: true,
          enableKeybindingsService: true,
          debugLogging: true,
        },
        editorAppConfig: {
          $type: "vscodeApi",
          languageId: "statetree",
          code: value,
          useDiffEditor: false,
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
              "workbench.colorTheme": "${getTheme(isDark)}",
              "workbench.iconTheme": "vs-seti",
"not.workbench.colorTheme": "Default Dark Modern",
"editor.guides.bracketPairsHorizontal": "active",
"editor.lightbulb.enabled": true
}`,
          },
        },
      },
      languageClientConfig: {
        options: {
          $type: "WorkerDirect",
          worker: getWorker(null, 'statetree'),
        },
      },
    }),
    [isDark]
  );
  return <MonacoEditorReactComp
      ref={monacoEditor}
      userConfig={userConfig}      
      onTextChanged={text => {
        codeStore.set(text)
        onChange && onChange(text)
      }}
      onLoad={() => {
        // console.log('LOAD STATETREE EDITOR', {editor, monaco})
        if (!monacoEditor.current) {
            throw new Error("Unable to get a reference to the Monaco Editor");
        }
        theme.dark.subscribe(isDark => {
          monacoEditor.current?.getEditorWrapper().updateEditorOptions({
            json: `{
              "workbench.colorTheme": "${getTheme(isDark)}"
            }`
          })
        })
        // verify we can get a ref to the language client
        const lc = monacoEditor.current.getEditorWrapper()
            ?.getLanguageClient();
        if (!lc) {
            throw new Error("Could not get handle to Language Client on mount");
        }
        // console.log('LC!', lc)
        // register to receive DocumentChange notifications
        lc.onNotification("browser/DocumentChange", (resp: DocumentChangeResponse) =>{
            // onChange && onChange(resp.content)
            onAstCreated && onAstCreated(resp.content)
        });

        /**
         * Callback invoked when the document processed by the LS changes
         * Invoked on startup as well
         * @param resp Response data
         */
        function onDocumentChange(resp: DocumentChangeResponse) {

        }
        // console.log('OK 👍')
      }}
    //   onTextChanged={(text, isDirty) => { handleTextChanged(text) }}
      style={{
          'paddingTop': '5px',
          'height': '100%'
      }}
  />;
}