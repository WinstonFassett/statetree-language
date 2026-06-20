import {
  SandpackLayout,
  SandpackProvider,
  SandpackStack,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { useEffect } from "react";
import { DockView } from "../dockview/DockView";
import { STATETREE_TEMPLATE } from "./STATETREE_TEMPLATE";
import { useStatetreeSandpackFiddle } from "./useSandpackStatetreeFiddle";
import { useStore } from "@nanostores/react";
import * as store from "../store";
import { requestedDslContent } from "../store";
import "./sandpack.css";
import { ShareButton } from "./ShareButton";
import { useActiveClass } from "../lib/useActiveClass";

import trafficLight from "../../../example/trafficlight.statetree?raw";
import trafficLightLoop from "../../../example/trafficlight-loop.statetree?raw";
import trafficLightHsm from "../../../example/trafficlight-hsm.statetree?raw";
import trafficLightHsmLoop from "../../../example/trafficlight-hsm-loop.statetree?raw";
import toggle from "../../../example/toggle.statetree?raw";
import authFlow from "../../../example/auth-flow.statetree?raw";
import rockPaperScissors from "../../../example/rock-paper-scissors.statetree?raw";
import fetcherAdvanced from "../../../example/fetcher-advanced.statetree?raw";
import comboboxHsm from "../../../example/combobox-hsm.statetree?raw";
import hsmCheckout from "../../../example/hsm-checkout.statetree?raw";

import defaultAppJs from "./fiddle/App.js?raw";
import appAuthFlow from "./fiddle/AppAuthFlow.js?raw";
import appRPS from "./fiddle/AppRPS.js?raw";
import appCheckout from "./fiddle/AppCheckout.js?raw";
import appCombobox from "./fiddle/AppCombobox.js?raw";

// Examples adapted from the Matchina example gallery
// (https://github.com/WinstonFassett/matchina) — topology only, since the DSL
// models states + events and has no state data.
const EXAMPLES = [
  {
    label: "Auth Flow",
    description: "Login / register / reset — returns full circle to logged out",
    code: authFlow,
    appJs: appAuthFlow,
  },
  {
    label: "Traffic Light",
    description: "Three states, explicit Red → Green → Yellow transitions",
    code: trafficLight,
  },
  {
    label: "Traffic Light (loops)",
    description: "Same cycle written with a single looping event",
    code: trafficLightLoop,
  },
  {
    label: "Traffic Light (HSM)",
    description: "Broken / Working / Maintenance; Working runs the light cycle",
    code: trafficLightHsm,
  },
  {
    label: "Traffic Light (HSM loops)",
    description: "On / Off, each wrapping a loop",
    code: trafficLightHsmLoop,
  },
  {
    label: "Toggle",
    description: "Two states, on/off with explicit events",
    code: toggle,
  },
  {
    label: "Rock Paper Scissors",
    description: "Round loop with game-over branch",
    code: rockPaperScissors,
    appJs: appRPS,
  },
  {
    label: "Fetcher (advanced)",
    description: "Fetch lifecycle with refetch/reset from every terminal state",
    code: fetcherAdvanced,
  },
  {
    label: "Combobox (HSM)",
    description: "Inactive / Active, with Empty ↔ Suggesting child states",
    code: comboboxHsm,
    appJs: appCombobox,
  },
  {
    label: "Checkout (HSM)",
    description: "Cart → Shipping → Payment submachine → Review → Confirmation",
    code: hsmCheckout,
    appJs: appCheckout,
  },
];

export default function StatetreeSandpackFiddle() {
  const isDark = useStore(store.theme.dark);
  const theme = isDark !== false ? "editorial-dark" : "editorial";
  useActiveClass(['dockview-theme-dark', 'dockview-theme-light'], isDark ? 'dockview-theme-dark' : 'dockview-theme-light')
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    return () => document.documentElement.removeAttribute('data-theme');
  }, [theme]);
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
  const { sandpack } = useSandpack()

  function loadExample(ex: typeof EXAMPLES[number]) {
    requestedDslContent.set(ex.code);
    sandpack.updateFile('/App.js', ex.appJs ?? defaultAppJs);
  }

  return (
    <div className="h-full w-full" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <SandpackStack className="m-0 flex flex-col">
        <div className="flex items-center gap-2 px-4 py-2 border-b" style={{ borderColor: 'var(--border)', fontFamily: 'var(--font-sans)' }}>
          <div className="flex-1 flex items-baseline gap-3">
            <span className="text-base font-semibold tracking-tight" style={{ color: 'var(--foreground)' }}>
              Statetree
            </span>
            <span className="text-xs" style={{ color: 'var(--text-mute)' }}>
              A minimal HSM language → Matchina, XState, live preview
            </span>
          </div>
          <select
            className="text-sm px-2 py-1 rounded border"
            style={{
              background: 'var(--muted)',
              color: 'var(--foreground)',
              borderColor: 'var(--border)',
              fontFamily: 'var(--font-sans)',
            }}
            defaultValue=""
            onChange={e => {
              const ex = EXAMPLES.find(x => x.label === e.target.value);
              if (ex) loadExample(ex);
              e.target.value = "";
            }}
          >
            <option value="" disabled>Examples</option>
            {EXAMPLES.map(ex => (
              <option key={ex.label} value={ex.label}>{ex.label}</option>
            ))}
          </select>
          <button
            className="px-3 py-1 text-sm rounded transition-colors"
            style={{ color: 'var(--muted-foreground)', background: 'transparent' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--muted)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            onClick={store.theme.toggleDark}
          >
            {isDark ? 'Light' : 'Dark'}
          </button>
          <ShareButton />
        </div>
        <div className="relative flex-1">
          <DockView />
        </div>
      </SandpackStack>
    </div>
  );
}
