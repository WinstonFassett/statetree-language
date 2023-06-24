import {   useSandpack
} from "@codesandbox/sandpack-react";
import MonacoReactEditor from './MonacoReactEditorWithJsxLibThing'
import { useEffect, useMemo, useRef } from "react";
import { getLanguageOfFile } from "./getLanguageOfFile";

export function SandpackMonacoEditor ({ filename, ...rest }: { filename: string } & Record<string,any>) {
  const { sandpack } = useSandpack();
  const code = sandpack.files[filename].code
  const latestCode = useRef<string|undefined>(code)
  console.log({ code, latest: latestCode.current })

  // console.log('files', sandpack.files)
  const language = useMemo(() => getLanguageOfFile(filename), [filename])
  useEffect(() => {
    if (latestCode.current !== code) {
      console.log('file was changed outside of editor', filename)
      
    }
  },[code])
  return <div>
    {/* <p>monaco editor for {filename}</p> */}
    <MonacoReactEditor {...rest} language={language} code={code} onChange={code => {
      // console.log({code})
      latestCode.current = code
      sandpack.updateFile(filename, code)
    }}  />
  </div>
}