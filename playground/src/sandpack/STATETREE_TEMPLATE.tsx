import { REACT_TEMPLATE } from "@codesandbox/sandpack-react";
import AppJS from './fiddle/AppAuthFlow.js?raw';
import useSharedStateJS from './fiddle/useSharedState?raw'
import example from '../../../example/auth-flow.statetree?raw'

const externalResources: string[] = [
  "https://cdn.tailwindcss.com",
  "https://cdn.jsdelivr.net/npm/daisyui@3.1.6/dist/full.css",
]

export const DERIVED_FILENAMES = ['/machine.json', '/machine.matchina.ts']
const SUPPORT_FILENAMES = ['useSharedState.js']
export const STATETREE_TEMPLATE = {
  files: {
    '/App.js': AppJS,
    '/styles.css': REACT_TEMPLATE.files["/styles.css"].code + `
    html, body, #root { height: 100%; }

    /* Sync daisyUI primary to editorial accent (#8fb9d6 light-blue).
       Must beat daisyUI's [data-theme=dark] specificity — use !important
       since our styles.css loads before Tailwind but after daisyUI CDN,
       and [data-theme=dark] on a parent div overrides our :root block. */
    :root, [data-theme] {
      --p: 203 42% 69% !important;
      --pc: 40 19% 8% !important;
      --pf: 203 42% 59% !important;
    }
    /* Kill daisyUI's forced uppercase on buttons */
    .btn { text-transform: none; }
    `,
    '/Wrapper.js': `export default ({ children }) => (<h2>
      Hello {children}!
      </h2>)`,
    '/machine.statetree': example,
    '/machine2.statetree': example,
    // '/xstate.json': '{}',
    '/machine.json': '{}',
    '/machine.matchina.ts': '',
    '/useSharedState.js': useSharedStateJS
  },
  customSetup: {
    dependencies: {
      "nanostores": "latest",
      "@nanostores/react": "latest",
      "@heroicons/react": "latest",
    }
  }, 
  options: { 
    externalResources
  }
};
