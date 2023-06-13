import React from 'react';
import { MonacoEditorReactComp } from '@typefox/monaco-editor-react';
import { UserConfig } from 'monaco-editor-wrapper';
import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js';
import 'monaco-editor/esm/vs/language/typescript/monaco.contribution.js';

import { buildWorkerDefinition } from 'monaco-editor-workers';
buildWorkerDefinition('../node_modules/monaco-editor-workers/dist/workers', import.meta.url, false);


const userConfig: UserConfig = {
    htmlElement: document.getElementById('monaco-editor-root') as HTMLElement,
    wrapperConfig: {
        useVscodeConfig: true,
    },
    editorConfig: {
        languageId: 'typescript',
        useDiffEditor: false,
        theme: 'vs-dark',
        code: `function sayHello(): string {
    return "Hello";
};`
    },
    languageClientConfig: {
        enabled: false
    }
};

export function Editor () {
  return <MonacoEditorReactComp
      userConfig={userConfig}
      style={{
          'paddingTop': '5px',
          'height': '80vh'
      }}
  />;
}