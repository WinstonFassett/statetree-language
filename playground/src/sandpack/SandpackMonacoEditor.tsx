import {   useSandpack
} from "@codesandbox/sandpack-react";
import MonacoReactEditor from '../editor/MonacoReactEditorWithJsxLibThing'
import { useEffect, useMemo, useRef } from "react";
import { getLanguageOfFile } from "../editor/getLanguageOfFile";

export function SandpackMonacoEditor ({ filename, ...rest }: { filename: string } & Record<string,any>) {
  const { sandpack } = useSandpack();
  const code = sandpack.files[filename].code
  const latestCode = useRef<string|undefined>(code)
  const language = useMemo(() => getLanguageOfFile(filename), [filename])
  useEffect(() => {
    if (latestCode.current !== code) {
      console.log('file was changed outside of editor', filename)
    }
  },[code])
  return <div>
    <MonacoReactEditor {...rest} language={language} code={code} onChange={code => {
      latestCode.current = code
      sandpack.updateFile(filename, code)
    }}  />
  </div>
}