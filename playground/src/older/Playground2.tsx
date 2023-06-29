import React, { useEffect, useState, useRef, useMemo } from "react";
import { createRoot } from "react-dom/client";
import {ErrorBoundary} from 'react-error-boundary'
import { basicSetup } from "codemirror";
import { EditorView, keymap } from "@codemirror/view";
import { EditorState, Prec } from "@codemirror/state";
import { indentWithTab } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";
import {
  abbreviationTracker,
  expandAbbreviation,
  enterAbbreviationMode,
  balanceOutward,
  toggleComment,
  evaluateMath,
  goToNextEditPoint,
  goToPreviousEditPoint,
  goToTagPair,
  incrementNumber1,
  decrementNumber1,
  removeTag,
  selectNextItem,
  selectPreviousItem,
  splitJoinTag,
  wrapWithAbbreviation
} from "@emmetio/codemirror6-plugin";
import * as Babel from '@babel/standalone';

// Themes
// import { dracula } from "@uiw/codemirror-theme-dracula";
// import { vscodeDark } from "@uiw/codemirror-theme-vscode";
// import { oneDark } from "@codemirror/theme-one-dark";
import { atomone } from "@uiw/codemirror-theme-atomone";

// const initialCode = `function App(state) {
//   return <div>
//     <p>Hello world</p>
//     <pre><code>{JSON.stringify(Object.keys(state), null, 2)}</code></pre>
//   </div>
// }`

const initialCode = `function App ({ name, setName, count, setCount, inc }) {
  return <div className="h-full p-4">
    <Hello name={name} setName={setName} />
    <p className="my-2">The count is <span className="text-accent font-bold text-2xl">{count}</span></p>
    <Form {...{ name, setName, count, setCount, inc}} />
  </div>
}
function Hello({ name, setName }) {
  return <div className="">
    <h2 className="text-4xl font-bold text-primary">
      Hello <span className="text-accent">{name}!</span>
    </h2> 
    <p>from React+Babel</p>    
  </div>
}
function Form({count, inc, name, setName, setCount }) {
  return <div className="mt-4 flex-col gap-2">
    <div className="p-10 card bg-base-200">
      <h3 className="text-xl text-secondary">Edit Shared State</h3>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>       
        <input type="text" placeholder="name" className="input input-secondary" value={name} onChange={ev => setName(ev.target.value)} />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Count</span>
        </label>       
        <div className="flex items-center gap-2">
          <input
            type="number"
            className="flex-1 input input-secondary w-16"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button onClick={inc} className="btn btn-secondary">+</button>
        </div>
      </div>
    </div>
  </div>
}
`;


export function Playground2 ({}) {

  const [files, setFiles] = useState({
    Statetree: '',
    State: '{}',
    Prototype: initialCode
  })
  const [activeFile, setActiveFile] = useState('Prototype')
  function setFile(name:string, text:string) {
    setFiles(files => ({...files, [name]: text }))
  }
  const code = files[activeFile]

  return <div className="h-screen v-screen bg-content text-primary-content flex flex-col">    
    <div>split</div>
    <div className="flex-1 flex h-full">
      <div className="w-1/2 flex flex-col">
        <p>editor (statemachine, state, views)</p>
        <Tabs {...{files, activeFile, setActiveFile}} />
        <div className="flex-1 overflow-auto">
          <pre><code>{code}</code></pre>
        </div>
      </div>
      <div className="w-1/2 bg-primary">
        view preview, state vis
      </div>
      
    </div>
    <div className="bg-invert-0 px-2">footer</div>
  </div>
}

function Tabs ({ files, activeFile, setActiveFile }) {
  
  return <div className="tabs tabs-boxed">
    {Object.keys(files).map((name) => {
      return <a onClick={() => setActiveFile(name)} className={`tab ${name===activeFile ? 'tab-active': ''}`}>{name}</a>
    })}
</div>
}

export function Playground() {
  const previewRef = useRef(null);
  const [lastTwoValidComponents, setLastTwoValidComponents] = useState([]);
  const [jsxCode, setJsxCode] = useState(initialCode);
  const [transpileError, setTranspileError] = useState(null);
  const runtimeError = useRef(null);
  const [sharedState, setSharedState] = useState({ name: "world", count: 0 });
  const updateSharedState = (props) => {
    setSharedState((state) => ({
      ...state,
      ...(typeof props === "function" ? props(state) : props)
    }));
  };

  const inc = () => updateSharedState((state) => ({ count: state.count + 1 }));
  const setCount = (count) => updateSharedState({ count: parseInt(count, 10) });
  const setName = (name) => updateSharedState({ name });
  useEffect(
    () => {
      setTranspileError(null);
      renderJSX();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [jsxCode]
  );
  useEffect(
    () => {
      console.log("state changed", sharedState);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sharedState]
  );

  function renderJSX() {
    let Component;
    try {
      console.log("transpiling");
      const transpiledCode = Babel.transform(jsxCode, {
        presets: ["react"]
      }).code;
      Component = createRenderFunction(transpiledCode);
    } catch (error) {
      console.log("PARSE ERROR", error);
      setTranspileError(error);
    }
    if (Component) {
      setLastTwoValidComponents((state) => {
        const lastTwoValidComponents = [...state];
        if (lastTwoValidComponents.length > 2) {
          lastTwoValidComponents.shift();
        }
        lastTwoValidComponents.push(Component);
        return lastTwoValidComponents;
      });
    }
  }
  const handleTextareaChange = (event) => {
    setJsxCode(event.target.value);
  };
  const handleCodeChange = (code) => {
    setJsxCode(code);
  };
  const api = { useState, useMemo, useRef, React, inc, setName, setCount };
  const Component =
    lastTwoValidComponents.length &&
    lastTwoValidComponents[lastTwoValidComponents.length - 1];
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex items-center pr-2 mt-2">
        <div className="flex-1 pl-6">
          <h2 className="text-2xl font-bold">React JSX Fiddle</h2>
          <p className="text-xs">
            with{" "}
            <a
              href="https://docs.emmet.io/cheat-sheet/"
              className="link link-accent"
              target="_new"
            >
              emmet
            </a>{" "}
            (cmd+e)
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs">
            Shared
            <br />
            State:
          </div>
          <input
            placeholder="name"
            className="input input-secondary input-sm w-24"
            value={sharedState.name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            className="input input-secondary input-sm w-16"
            value={sharedState.count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="btn btn-secondary btn-sm" onClick={inc}>
            +
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-nowrap gap-2 p-2">
        {/* <textarea
          className="w-1/2 textarea textarea-primary font-mono"
          value={jsxCode}
          onChange={handleTextareaChange}
        ></textarea>
         */}
        <div className="w-1/2">
          <Editor code={jsxCode} onChange={handleCodeChange} />
        </div>
        <div className="w-1/2 flex flex-col bg-neutral p-2 rounded-lg">
          {!!transpileError && (
            <ErrorPane
              type="Syntax Error"
              error={transpileError.toString().replace("SyntaxError: ", "")}
            />
          )}
          <div className="flex-1">
            <div ref={previewRef} className="h-full">
              <Preview
                Component={Component}
                state={sharedState}
                api={api}
                code={jsxCode}
                PreviewWithErrors={PreviewWithErrors}
                onError={(error, info) => {
                  console.log("Runtime Error", error, info);
                  runtimeError.current = error;
                  setLastTwoValidComponents((state) => {
                    const lastTwoValidComponents = [...state];
                    lastTwoValidComponents.pop();
                    return lastTwoValidComponents;
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function PreviewWithErrors({ error: previewError }) {
    console.log("PreviewWithErrors", arguments);
    const Component =
      lastTwoValidComponents.length > 0 && lastTwoValidComponents[0];
    return (
      <div>
        {previewError && (
          <ErrorPane
            type="Runtime Error"
            error={previewError}
            stack={previewError.stack}
          />
        )}
        {!!Component && <p>Showing last successful build</p>}
        {!!Component && <Component {...sharedState} {...api} />}
      </div>
    );
  }
}


function useCodeMirror({
  code = "var a = 1;",
  extensions = [],
  onChange
} = {}) {
  const ref = useRef();
  const view = useRef(null);
  const addedExtensions = [];
  if (onChange) {
    const listener = EditorView.updateListener.of(function (e) {
      onChange(e.state.doc.toString());
    });
    addedExtensions.push(listener);
  }
  useEffect(() => {
    view.current = new EditorView({
      doc: code,
      extensions: [
        basicSetup,
        javascript({ jsx: true, typescript: true }),
        // abbreviationTracker({
        //   syntax: "jsx"
        // }),
        emmet(),
        keymap.of([indentWithTab]),
        // // Bind Expand Abbreviation command to keyboard shortcut
        // keymap.of([
        //   {
        //     key: "Cmd-e",
        //     run: expandAbbreviation
        //   }
        // ]),
        // dracula,
        // vscodeDark,
        // oneDark,
        atomone,
        ...addedExtensions,
        ...extensions
      ],
      parent: ref.current
    });
    return () => {
      view.current.destroy();
      view.current = null;
    };
  }, []);
  return [ref, view.current];
}

function emmet() {
  const tracker = abbreviationTracker({
    syntax: "jsx",
    config: {
      markup: {
        options: {
          "output.selfClosingStyle": "xhtml"
        },
        snippets: {
          foo: "ul.foo>li.bar+li.baz",
          nav:
            '(div[class="navbar bg-base-100"]>(div[class="flex-1"]>(a[class="btn btn-ghost normal-case text-xl"]{daisyUI}))+(div[class="flex-none gap-2"]>(div[class="form-control"]>input[type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" ])+(div[class="dropdown dropdown-end"]>(label[tabindex="0" class="btn btn-ghost btn-circle avatar"]>(div[class="w-10 rounded-full"]>img[src="/images/stock/photo-1534528741775-53994a69daeb.jpg" ]))+(ul[tabindex="0" class="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"]>(li>(a[class="justify-between"]{Profile            }>(span[class="badge"]{New})))+(li>(a{Settings}))+(li>(a{Logout}))))))',
          card: `(div[class="card my-4 bg-base-100 shadow-xl"]>(div[class="card-body"]>(h2[class="card-title"])+(p)+(div[class="card-actions justify-center"]>(button[class="btn btn-primary"]))))`,
          checkbox:
            '(div[class="form-control"]>(label[class="label cursor-pointer"]>(span[class="label-text"])+input[type="checkbox" checked="checked" class="checkbox checkbox-primary" ]))',
          stat: ".stats.shadow>.stat>(.stat-title+.stat-value+.stat-desc)",
          join:
            '.join>(input.join-item.btn[type="radio" name="options"][aria-label])*3',
          toggle:
            '.form-control>label.label.cursor-pointer>(span.label-text+input[type="checkbox"].toggle)',
          avatar:
            ".avatar.placeholder>.bg-neutral-focus.text-neutral-content.rounded-full.w-12>span",
          tooltip: ".tooltip[data-tip=]>",
          btn: "button.btn.btn-primary",
          collapse:
            '.collapse.bg-base-200.mt-2>(input[type="checkbox"]+.collapse-title.text-xl.font-medium+.collapse-content>p)',
          spinner: "span.loading.loading-spinner.loading-md",
          steps: "ul.steps>(li.step.step-primary+li.step.step)",
          "btn-circle":
            'button.btn.btn-circle>svg[xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"]>path[stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"]',
          "alert-error": ".alert.alert-error.mt-2",
          tabs: ".tabs.tabs-boxed>(a.tab+a.tab.tab-active+a.tab)",
          "text-field":
            ".form-control>(label.label>span.label-text)+input[type=text placeholder=].input.input-bordered",
          hero:
            "div.hero.min-h-screen.bg-base-200>div.hero-content.text-center>div.max-w-md>((h1.text-5xl.font-bold)+(p.py-6>{Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.})+button.btn.btn-primary{Get Started})"
        }
      }
    }
  });
  console.log("tracker", tracker);
  return [
    Prec.high(tracker),
    wrapWithAbbreviation(),
    keymap.of([
      {
        key: "Cmd-e",
        run: expandAbbreviation
      },
      {
        key: "Cmd-Shift-e",
        run: enterAbbreviationMode
      },
      {
        key: "Cmd-Shift-d",
        run: balanceOutward
      },
      {
        key: "Ctrl-/",
        run: toggleComment
      },
      {
        key: "Ctrl-y",
        run: evaluateMath
      },
      {
        key: "Ctrl-Alt-ArrowLeft",
        run: goToPreviousEditPoint
      },
      {
        key: "Ctrl-Alt-ArrowRight",
        run: goToNextEditPoint
      },
      {
        key: "Cmd+G",
        run: goToTagPair
      },
      {
        key: "Ctrl-Cmd-ArrowDown",
        run: incrementNumber1
      },
      {
        key: "Ctrl-Cmd-ArrowUp",
        run: decrementNumber1
      },
      {
        key: "Ctrl-'",
        run: removeTag
      },
      {
        key: "Ctrl-Shift-'",
        run: splitJoinTag
      },
      {
        key: "Ctrl-.",
        run: selectNextItem
      },
      {
        key: "Ctrl-,",
        run: selectPreviousItem
      }
    ])
  ];
}

function Editor(props = {}) {
  const [ref, view] = useCodeMirror(props);
  return (
    <div className="w-full h-full">
      <div ref={ref} className="h-full w-full" />
    </div>
  );
}

function Preview(props) {
  const { Component } = props;
  return (
    <ErrorBoundary
      FallbackComponent={props.PreviewWithErrors}
      resetKeys={[props.code]}
      onError={props.onError}
    >
      {!!Component && <Component {...props.state} {...props.api} />}
    </ErrorBoundary>
  );
}



function PreviewWithErrors({ error: previewError }) {
  console.log("PreviewWithErrors", arguments);
  const Component =
    lastTwoValidComponents.length > 0 && lastTwoValidComponents[0];
  return (
    <div>
      {previewError && (
        <ErrorPane
          type="Runtime Error"
          error={previewError}
          stack={previewError.stack}
        />
      )}
      {!!Component && <p>Showing last successful build</p>}
      {!!Component && <Component {...sharedState} {...api} />}
    </div>
  );
}

function createRenderFunction(code) {
// eslint-disable-next-line
  const factory = new Function("React", `${code}; return App;`);
  return factory(React);
}


function ErrorPane({ type, error, stack }) {
  return (
    <div className="mb-2 bg-error text-error-content p-2 rounded">
      <h3 className="text-xl">{type}</h3>
      {stack ? (
        <details>
          <summary>
            <code className="text-sm whitespace-pre">{error.toString()}</code>
          </summary>
          <code className="text-xs whitespace-pre">
            {error.stack.toString()}
          </code>
        </details>
      ) : (
        <code className="text-xs whitespace-pre">{error.toString()}</code>
      )}
    </div>
  );
}
