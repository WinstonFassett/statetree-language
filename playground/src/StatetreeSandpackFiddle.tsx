import {
  SandpackProvider,
  // ClasserProvider,
  SandpackPreview,
  useActiveCode,
  SandpackLayout,
  SandpackStack,
  FileTabs,
  useSandpack
} from "@codesandbox/sandpack-react";
import { Suspense, lazy, useState } from "react";
import { DockView } from "./DockView";
import { Statemachine } from "../../src/language/generated/ast";
import { getLanguageOfFile } from "./getLanguageOfFile";

export default function StatetreeSandpackFiddle() {
  return (
    <SandpackProvider template="react" theme="dark" files={{
'/App.js': 
`import Wrapper from './Wrapper'
export default function App() {
  return <div className="bg-green-500 rounded m-2 p-4 text-3xl">
    <Wrapper>World</Wrapper>
  </div>
}`,
'/Wrapper.js': `export default ({ children }) => (<h2>
  Hello {children}!
  </h2>)`,
'machine.statetree': 'soon:example',
    }} options={{
      externalResources: ["https://cdn.tailwindcss.com"]
    }}>
      <SandpackLayout>
        {/* <DockView /> */}
        <TheStack />
        {/* 
        <SandpackPreview style={{ height: "100vh" }} /> */}
      </SandpackLayout>

    </SandpackProvider>
  );
}


function TheStack() {
  const [model, setModel] = useState<Statemachine>()
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();
  const { activeFile } = sandpack
  const language = activeFile && getLanguageOfFile(activeFile);

  return (
    <SandpackStack style={{ height: "100vh", margin: 0 }}>
      {/* <FileTabs /> */}
      <div style={{ flex: 1, paddingTop: 8, background: "#1e1e1e" }}>
        {/* <Editor
          width="100%"
          height="100%"
          language={language}
          theme="vs-dark"
          key={sandpack.activeFile}
          defaultValue={code}
          onChange={(value) => updateCode(value || "")}
        /> */}
        {/* <Suspense fallback={<div>Loading editor...</div>}>
          <MonacoReactEditor key={sandpack.activeFile} 
            language={language}
            file={sandpack.activeFile}
            theme="vs-dark"
            code={code} 
            onChange={(value) => updateCode(value || "")} 
            onModelCreated={(model) => { setModel(model) }} 
          />
        </Suspense>         */}
        <DockView />
      </div>
    </SandpackStack>
  );
}
