import { REACT_TEMPLATE } from "@codesandbox/sandpack-react";
import AppJS from './fiddle/App.js?raw';
import example from '../../../example/trafficlight.statetree?raw'

const externalResources = [
  "https://cdn.tailwindcss.com",
  "https://cdn.jsdelivr.net/npm/daisyui@3.1.6/dist/full.css"
]

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
    '/machine.json': '{}',
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
