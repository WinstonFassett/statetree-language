import {
  SandpackLayout,
  SandpackProvider,
  SandpackStack,
} from "@codesandbox/sandpack-react";
import { DockView } from "./DockView";
import { STATETREE_TEMPLATE } from "./STATETREE_TEMPLATE";
import { useStatetreeSandpackFiddle } from "./useSandpackStatetreeFiddle";
import { useStore } from "@nanostores/react";
import * as store from "./store";
import "./sandpack.css";
import { useComponentSize } from "react-use-size";

export default function StatetreeSandpackFiddle() {
  const isDark = useStore(store.theme.dark);
  return (
    <SandpackProvider
      template="react"
      theme={isDark ? "dark" : "light"}
      customSetup={STATETREE_TEMPLATE.customSetup}
      files={STATETREE_TEMPLATE.files}
      options={STATETREE_TEMPLATE.options}
    >
      <SandpackLayout>
        <TheStack />
      </SandpackLayout>
    </SandpackProvider>
  );
}

function TheStack() {
  useStatetreeSandpackFiddle();
  return (
    <div className="h-full w-full">
      <SandpackStack className="m-0 flex flex-col">
        <div className="flex items-center p-2">
          <div className="pl-4 flex-1 text-2xl font-extrabold">
            Statetree Fiddle
          </div>
        </div>
        <div className="relative flex-1">
          <DockView />
        </div>
      </SandpackStack>
    </div>
  );
}
