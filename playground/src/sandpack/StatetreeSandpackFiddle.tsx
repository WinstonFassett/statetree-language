import {
  SandpackFileExplorer,
  SandpackLayout,
  SandpackProvider,
  SandpackStack,
} from "@codesandbox/sandpack-react";
import { DockView } from "../dockview/DockView";
import { STATETREE_TEMPLATE } from "./STATETREE_TEMPLATE";
import { useStatetreeSandpackFiddle } from "./useSandpackStatetreeFiddle";
import { useStore } from "@nanostores/react";
import * as store from "../store";
import "./sandpack.css";
import { ShareButton } from "./ShareButton";
import { useActiveClass } from "../lib/useActiveClass";

export default function StatetreeSandpackFiddle() {
  const isDark = useStore(store.theme.dark);
  useActiveClass(['dark', 'light'], isDark ? 'dark' : 'light')
  return (
    <SandpackProvider
      template="react"
      theme={isDark!==false ? "dark" : "light"}
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
  const isDark = useStore(store.theme.dark)
  return (
    <div className="h-full w-full">
      <SandpackStack className="m-0 flex flex-col">
        <div className="flex items-center p-2">
          <div className="pl-4 flex-1 text-2xl font-extrabold">
            Statetree Fiddle
          </div>
          <button className="btn btn-ghost" onClick={store.theme.toggleDark}>{isDark ? 'Dark' : 'Light'}</button>
          <ShareButton />
        </div>
        <SandpackLayout className="relative flex-1">
          <SandpackFileExplorer className="h-full border-solid border-red-600" style={{ height: '100%' }} />
          <div className="flex-1">
            <DockView />
          </div>
        </SandpackLayout>
        
      </SandpackStack>
    </div>
  );
}
