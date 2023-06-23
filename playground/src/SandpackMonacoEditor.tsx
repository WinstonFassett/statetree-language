import {   useSandpack
} from "@codesandbox/sandpack-react";
import MonacoReactEditor from './MonacoReactEditorWithJsxLibThing'

export function SandpackMonacoEditor ({ filename }: { filename: string }) {
  const { sandpack } = useSandpack();
  console.log('files', sandpack.files)
  const code = sandpack.files[filename].code
  return <div>
    <p>monaco editor for {filename}</p>
    <MonacoReactEditor code={code}  />
  </div>
}