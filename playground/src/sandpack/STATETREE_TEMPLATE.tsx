import { REACT_TEMPLATE } from "@codesandbox/sandpack-react";
import AppJS from './fiddle/App.js?raw';
import useSharedStateJS from './fiddle/useSharedState?raw'
import example from '../../../example/trafficlight.statetree?raw'

const externalResources: string[] = []

export const DERIVED_FILENAMES = ['/machine.json', '/machine.matchina.ts']
const SUPPORT_FILENAMES = ['useSharedState.js']
export const STATETREE_TEMPLATE = {
  files: {
    '/App.js': AppJS,
    '/styles.css': REACT_TEMPLATE.files["/styles.css"].code + `
    html, body, #root { height: 100%; }
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
