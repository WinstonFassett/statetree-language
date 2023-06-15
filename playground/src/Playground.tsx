import { useState, lazy, Suspense } from "react";
import { State, Statemachine } from "../../src/language/generated/ast";
import { Visualization } from "./AstVisualization";

const Editor = lazy(
  () => import('./Editor').then(module => ({ default: module.Editor }))
);

export function Playground() {
  const [model, setModel] = useState<Statemachine>()
  return (
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 w-full border-b">
          <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <h1 className="text-3xl pl-2">Statetree Playground</h1>

            {/* <MainNav items={docsConfig.mainNav}>
              <DocsSidebarNav items={docsConfig.sidebarNav} />
            </MainNav> */}
            <div className="flex flex-1 items-center space-x-4 sm:justify-end">
              <div className="flex-1 sm:grow-0">
                {/* <DocsSearch /> */}
              </div>
              <nav className="flex space-x-4">

                {/* <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.gitHub className="h-7 w-7" />
                  <span className="sr-only">GitHub</span>
                </Link> */}
              </nav>
            </div>
          </div>
        </header>
        {/* 
         */}
        
        {/* <Editor
          height="50vh"
          defaultLanguage="json"
          defaultValue={JSON.stringify({ abcd: 1234 }, null, 2)}
        /> */}
        <div className="flex-1 flex items-stretch justify-stretch">
          <div style={{ flex: 1, position: 'relative' }}>
            <Suspense fallback={<div>Loading editor...</div>}>
              <Editor onModelCreated={(model) => { setModel(model) }} />
            </Suspense>
          </div>
          <div className="flex-1 pt-2">
            {!!model && <Visualization model={model} />}
          </div>
        </div>         
      </div>    
  )
}

// function extractStates({ states }: { states: State[] }) {
//   if (states) {
//     return states.map(({ name, transitions }) => ({ 
//       name,
//       transitions: transitions?.map(transition) 
//     }))
//   }
// }
