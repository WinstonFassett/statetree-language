import React, { useEffect, useMemo, useRef, useState } from "react";
import mermaid from "mermaid";
import * as uuid from 'uuid';
import { State, Statemachine } from "../../../src/language/generated/ast";
import { StateMachineInstance } from "../statetree-machine/useStateMachine";

mermaid.initialize({
  // startOnLoad: true
});


const Mermaid = ({ chart }: any) => {
  let node: HTMLDivElement|null;
  useEffect(() => {
    // console.log('rendering', chart)
    mermaid.contentLoaded();
    node.removeAttribute("data-processed");
    // console.log('rendered')
    node?.removeAttribute("data-processed");
  }, [chart]);
  if (!chart) return null;
  return (
    <div ref={(e) => (node = e)} className="mermaid">
      {chart}
    </div>
  );
};

function toStateDiagram(definition: Statemachine, machine: StateMachineInstance, callbackName: string) {
  const rows = [] as any[];
  let indents = 0
  addStates(definition.states)
  const example = `
stateDiagram-v2
    direction LR
    PoweredOn --> Broken: switch
    Broken --> PoweredOn: switch
    state PoweredOn {
        Red --> Green: tick
        Green --> Yellow: tick
        Yellow --> Red: tick
    }
    state Broken {
        RedOn --> RedOff: flash
        RedOff --> RedOn: flash
    }
`;
const diagram = `
stateDiagram-v2
${rows.join('\n')}
`
// classDef active fill:aquamarine;
  // console.log(diagram)
  return example;
  function indent() {
    return Array(indents*4).fill(' ').join('')
  }
  function addStates (states: State[]) {
    indents +=1
    states.forEach((state, index) => {
      const key = state.name
      const isActive = key === machine.state?.name
      // const state = definition.states[key];
      // console.log("state", key, state);
      const ifactive = key === machine.state?.name ? ":::active" : "";
      // rows.push(["    ", key, ifactive].join(""));
      rows.push(`${indent()}state ${state.name} {`)
      if (state.transitions) {
        indents+=1
        state.transitions.forEach((transition) => {
          // console.log("transition", transition);
          const target = transition.to?.ref?.name;
          if (target) {
            const event = transition.event
            // rows.push(`    ${key}-->|${event}| ${target}[${target}]`);
            rows.push(`${indent()}${key} --> ${target}: ${event}`);
          }
        });
        indents-=1
      }
      if (state.states) {
        addStates(state.states)
        // state.states.forEach(state => {
        //   rows.push(`state ${state.name} {
  
        //   }`)
        // })
      }
      rows.push(`${indent()}}`)
      // rows.push(["   ", "click", key, callbackName].join(" "));
    });
    indents -=1;
  }
}


function toGraphDiagram(definition: Statemachine, machine: StateMachineInstance, callbackName: string) {
  const rows = [] as any[];
  addStates(definition.states)
  const output = `
graph LR
${rows.join("\n")}
    classDef active fill:aquamarine;
`;
  // console.log({ output })
  return output;

  function addStates (states: State[]) {
    states.forEach((state, index) => {
      const key = state.name
      // const state = definition.states[key];
      // console.log("state", key, state);
      const ifactive = key === machine.state?.name ? ":::active" : "";
      rows.push(["    ", key, ifactive].join(""));
      if (state.transitions) {
        state.transitions.forEach((transition) => {
          // console.log("event", event);
          const target = transition.to.ref?.name;
          const event = transition.event
          rows.push(`    ${key}-->|${event}| ${target}[${target}]`);
        });
      }
      if (state.states) {
        addStates(state.states)
        // state.states.forEach(state => {
        //   rows.push(`state ${state.name} {
  
        //   }`)
        // })
      }
      // rows.push(["   ", "click", key, callbackName].join(" "));
    });
  }
}

export default function StateMachineMermaidDiagram({ machine: instance }: { machine: StateMachineInstance}) {
  //const [id] = useState(uuid.v4())
  const id = "mermaidCallback";
  (window as any)[id] = (...args: any[]) => {
    console.log("callback", args);
  };
  const diagram = toStateDiagram(instance.model, instance, id);
  return (
    <>
      <Mermaid chart={diagram} />
      {/*<pre>{diagram}</pre>*/}
      {/*<pre>{JSON.stringify(definition, null, 2)}</pre>*/}
    </>
  );
}
