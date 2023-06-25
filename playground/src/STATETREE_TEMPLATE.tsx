import { REACT_TEMPLATE } from "@codesandbox/sandpack-react";
import AppJS from './fiddle/App.js?raw';

function addPrototypingResources(template: any = {}) {
  template.options ||= {};
  template.options.externalResources ||= [];
  template.options.externalResources.push(
    "https://cdn.tailwindcss.com"
  );
  template.options.externalResources.push(
    "https://cdn.jsdelivr.net/npm/daisyui@3.1.6/dist/full.css"
  );
}
export const STATETREE_TEMPLATE: any = {
  files: {
    '/App.js': AppJS,
    '/styles.css': REACT_TEMPLATE.files["/styles.css"].code + `
    html, body, #root { height: 100%; }
    `,
    '/Wrapper.js': `export default ({ children }) => (<h2>
      Hello {children}!
      </h2>)`,
    'machine.statetree': '',
    'machine.json': '{}',
    'state.json': '"not_set"'
  },
  customSetup: {
    dependencies: {
      "nanostores": "latest",
      "@nanostores/react": "latest",
      "@heroicons/react": "latest",
    }
  }
};
addPrototypingResources(STATETREE_TEMPLATE);
