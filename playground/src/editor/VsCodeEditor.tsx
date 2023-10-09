import React, { useEffect, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { MonacoEditorReactComp } from './monaco-editor-react';
import { UserConfig } from 'monaco-editor-wrapper';

// import getExtensionServiceOverride from 'vscode/service-override/extensions'
// import ExtensionHostWorker from 'vscode/workers/extensionHost.worker?worker'
import 'vscode/default-extensions/theme-defaults'
import 'vscode/default-extensions/javascript'
// import 'vscode/default-extensions/typescript-basics'
// import 'vscode/default-extensions/typescript-language-features'
import 'vscode/default-extensions/json'
import 'vscode/default-extensions/theme-seti'
import 'vscode/default-extensions/references-view'
import * as vscode from 'vscode'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'
// import getLanguagesServiceOverride from 'vscode/service-override/languages'

// import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js'; 
import 'monaco-editor/esm/vs/language/typescript/monaco.contribution.js';
// import 'monaco-editor/esm/vs/language/'

import '../userWorker'
// import { toWorkerConfig } from './vscode/tools/workers';

monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
jsx: monaco.languages.typescript.JsxEmit.Preserve,
target: monaco.languages.typescript.ScriptTarget.ES2020,
esModuleInterop: true,
});

export function ReactTs({
  code,
  filename,
  language = 'javascript',
  onChange,
}: {
  code: string;
  filename: string;
  language?: string;
  onChange?: (code: string, isDirty: boolean) => void;
}) {
  const ref = useRef<MonacoEditorReactComp>(null);
  const latestCode = useRef<string|undefined>(code)
  // console.log({ filename, language });
  const userConfig: UserConfig = useMemo(() =>({
    htmlElement: undefined as any,
    wrapperConfig: {
      serviceConfig: {
        // userServices: {
        //   ...getExtensionServiceOverride(toWorkerConfig(ExtensionHostWorker)),
        // },
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
          $type: 'vscodeApi',
          languageId: language,
          useDiffEditor: false,
          // theme: 'vs-dark',
          code,
          codeUri: filename,
          userConfiguration: {
            json: `{
"workbench.colorTheme": "Default Dark Modern",
"editor.guides.bracketPairsHorizontal": "active",
"editor.lightbulb.enabled": true,
"editor.minimap.enabled": false
}`
        }
      }
    }
  }), [code, filename]);
  // useEffect(() => {
  //   console.log('code changed',{ code, ref })
  // }, [code])
  
  useEffect(() => {
    if (latestCode.current !== code) {
      console.log('file was changed outside of editor', filename)
      ref.current?.getEditorWrapper().updateModel({
        code
      })
    }
  },[code, filename])
  const onTextChanged = (text: string, isDirty: boolean) => {
    latestCode.current = text
    if (onChange) { onChange(text, isDirty) }
  };

  return (
    <MonacoEditorReactComp
      className="editor"
      ref={ref}
      userConfig={userConfig}
      style={{
        paddingTop: '5px',
        height: '100%',
      }}
      onLoad={() => {
        const reactEditor = ref.current;
        const wrapper = (reactEditor!).getEditorWrapper();
        const editor = wrapper.getEditor()!
        const model = editor.getModel()
        // console.log({ model, editor, wrapper });

      }}
      onTextChanged={onTextChanged}
    />
  );
}
