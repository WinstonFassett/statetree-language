import {   useSandpack
} from "@codesandbox/sandpack-react";
import { ReactTs as MonacoReactEditor } from '../editor/VsCodeEditor'
import { useEffect, useMemo, useRef } from "react";
import { getLanguageOfFile } from "../editor/getLanguageOfFile";

export function SandpackMonacoEditor ({ filename, afterEdit, ...rest }: { filename: string, afterEdit?: (code: string|undefined) => void } & Record<string,any>) {
  const ref = useRef<typeof MonacoReactEditor>(null);
  const { sandpack } = useSandpack();
  const code = sandpack.files[filename].code
  const latestCode = useRef<string|undefined>(code)
  const language = useMemo(() => getLanguageOfFile(filename), [filename])
  // useEffect(() => {
  //   if (latestCode.current !== code) {
  //     console.log('file was changed outside of editor', filename)
  //   }
  // },[code])
  return <MonacoReactEditor {...rest} language={language} code={code} filename={filename} onChange={code => {
    // console.log('onchange', {code})
    latestCode.current = code
    // before update
    sandpack.updateFile(filename, code)
    // after update
    if (afterEdit) {
      afterEdit(code)
    }
  }}  />  
}