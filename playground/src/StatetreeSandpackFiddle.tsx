import {
  SandpackLayout,
  SandpackProvider,
  SandpackStack
} from "@codesandbox/sandpack-react";
import { DockView } from "./DockView";
import { STATETREE_TEMPLATE } from "./STATETREE_TEMPLATE";
import { useStatetreeSandpackFiddle } from "./useSandpackStatetreeFiddle";

export default function StatetreeSandpackFiddle() {
  return (
    <SandpackProvider template="react" theme="dark" 
      customSetup={STATETREE_TEMPLATE.customSetup}
      files={STATETREE_TEMPLATE.files} options={STATETREE_TEMPLATE.options}>
      <SandpackLayout>
        <TheStack />
      </SandpackLayout>
    </SandpackProvider>
  );
}

function TheStack() {
  useStatetreeSandpackFiddle();
  return (
    <SandpackStack style={{ height: "100vh", margin: 0 }}>
      <DockView />
    </SandpackStack>
  );
}
