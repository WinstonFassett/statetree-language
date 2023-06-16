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

import Editor from "@monaco-editor/react";

function MonacoEditor() {
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();
  const { activeFile } = sandpack
  const language = activeFile && getLanguageOfFile(activeFile);

  return (
    <SandpackStack style={{ height: "100vh", margin: 0 }}>
      <FileTabs />
      <div style={{ flex: 1, paddingTop: 8, background: "#1e1e1e" }}>
        <Editor
          width="100%"
          height="100%"
          language={language}
          theme="vs-dark"
          key={sandpack.activeFile}
          defaultValue={code}
          onChange={(value) => updateCode(value || "")}
        />
      </div>
    </SandpackStack>
  );
}

export default function MonacoSandpack() {
  return (
    <SandpackProvider template="react" theme="dark" files={{
      '/Wrapper.js': `export default ({ children }) => (<h2>Hello {children}!</h2>)`,
      '/App.js': 
`import Wrapper from './Wrapper'
export default function App() {
  return <div className="bg-green-500 rounded m-2 p-4 text-3xl">
    <Wrapper>World</Wrapper>
  </div>
}`
    }} options={{
      externalResources: ["https://cdn.tailwindcss.com"]
    }}>
      <SandpackLayout>
        <MonacoEditor />
        <SandpackPreview style={{ height: "100vh" }} />
      </SandpackLayout>
    </SandpackProvider>
  );
}

function getLanguageOfFile(filePath: string) {
  const extensionDotIndex = filePath.lastIndexOf(".");
  const extension = filePath.slice(extensionDotIndex + 1);

  switch (extension) {
    case "js":
    case "jsx":
    case "ts":
    case "tsx":
      return "javascript";
    case "vue":
    case "html":
      return "html";
    case "css":
    case "scss":
    case "less":
      return "css";
    default:
      return "javascript";
  }
}