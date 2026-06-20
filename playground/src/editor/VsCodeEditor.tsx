import React, { lazy, useEffect, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom/client';
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
const MonacoEditorReactComp = lazy(() => import('./monaco-editor-react')) ;
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
      // File changed outside the editor (e.g. example switch seeding /App.js
      // via sandpack.updateFile). Push it into the monaco model AND record it
      // as the latest known code — otherwise this ref stays stale and the next
      // external update (or the echo of the user's own edit) re-fires
      // updateModel, clobbering edits and desyncing the rebundle.
      latestCode.current = code
      const comp = ref.current as any
      // updateModel is async: it disposes the old monaco model and creates a new
      // one. The onDidChangeContent subscription was bound to the OLD (now
      // disposed) model, so once the swap settles we must re-bind to the new
      // model — otherwise edits after an example switch never reach sandpack and
      // the preview stops updating. Re-bind without re-emitting (the new content
      // was just pushed by the host; echoing it would clobber the host file).
      Promise.resolve(comp?.getEditorWrapper().updateModel({ code })).then(() => {
        comp?.subscribeToModel?.(false)
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
