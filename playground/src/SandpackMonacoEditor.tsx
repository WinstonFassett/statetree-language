import {   useSandpack
} from "@codesandbox/sandpack-react";
import MonacoReactEditor from './MonacoReactEditorWithJsxLibThing'

export function SandpackMonacoEditor ({ filename, ...rest }: { filename: string } & Record<string,any>) {
  const { sandpack } = useSandpack();
  // console.log('files', sandpack.files)
  const code = sandpack.files[filename].code
  return <div>
    {/* <p>monaco editor for {filename}</p> */}
    <MonacoReactEditor {...rest} code={code} onChange={code => {
      // console.log({code})
      sandpack.updateFile(filename, code)
    }}  />
  </div>
}