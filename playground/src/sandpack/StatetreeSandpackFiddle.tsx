import {
  SandpackLayout,
  SandpackProvider,
  SandpackStack,
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

const EXAMPLES = [
  {
    label: "Traffic Light (HSM)",
    description: "Hierarchical: On/Off wrapping tick loop",
    code: `initialState On\n\nstates {\n  On {\n    switch => Off\n    loop on tick { Red  Green  Yellow }\n  }\n  Off {\n    switch => On\n    loop on flash { RedOn  RedOff }\n  }\n}`,
  },
  {
    label: "Traffic Light",
    description: "Simple loop — one switch drives three states",
    code: `loop on switch {\n  On { loop on tick { Red  Green Yellow } }\n  Off { loop on flash { RedOn RedOff } }\n}`,
  },
  {
    label: "Traffic Light (minimal)",
    description: "Bare minimum — three states, one event",
    code: `loop on tick { Red  Green Yellow }`,
  },
  {
    label: "Auth Flow",
    description: "Multi-step: email → OTP → authenticated",
    code: `initialState Initializing\n\nstates {\n  Initializing {\n    validUser => Authenticated\n    noUser    => AwaitingEmail\n  }\n  AwaitingEmail {\n    gotEmail => CheckingEmail\n  }\n  CheckingEmail {\n    sentOtp => AwaitingOtp\n  }\n  AwaitingOtp {\n    submit => SubmittingOtp\n  }\n  SubmittingOtp {\n    valid   => Authenticated\n    invalid => OtpInvalid\n  }\n  OtpInvalid {\n    resend => RequestingNewOtp\n  }\n  RequestingNewOtp {\n    sentOtp => AwaitingOtp\n  }\n  Authenticated {}\n}`,
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

  function loadExample(code: string) {
    requestedDslContent.set(code);
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
              if (ex) loadExample(ex.code);
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
