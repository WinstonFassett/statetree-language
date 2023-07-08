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
    console.log('rendering', chart)
    mermaid.contentLoaded();
    node?.removeAttribute("data-processed");
    console.log('rendered')
  }, [chart]);
  if (!chart) return null;
  return (
    <div ref={(e) => (node = e)} className="mermaid">
      {chart}
    </div>
  );
};

function toStateDiagram(definition: Statemachine, machine: StateMachineInstance, callbackName: string) {
  console.log('statediagram', { definition, machine })
  const rows = [] as any[];
  let indents = 0

  // at each level,
  // render transitions, then composite states
  const renderedStates = new Set()
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
%%    direction LR
${rows.join('\n')}
`
// classDef active fill:aquamarine;
  // console.log(diagram)
  return diagram;
  function indent() {
    return Array(indents*4).fill(' ').join('')
  }

  function addStates (states: State[]) {
    const allStates = new Set()

    indents +=1
    const compositeStates: State[] = []

    // determine if transition is local
    // handle non-local transitions
    // add end-thingy, then named transition from main state to container with new state, etc

    states.forEach((state, index) => {
      allStates.add(state)
      const key = state.name
      const isActive = key === machine.state?.name
      // const state = definition.states[key];
      // console.log("state", key, state);
      const ifactive = key === machine.state?.name ? ":::active" : "";
      // rows.push(["    ", key, ifactive].join(""));
      let renderedState = false
      if (state.transitions) {
        state.transitions.forEach((transition) => {
          // console.log("transition", transition);
          const target = transition.to?.ref?.name;
          if (target) {
            const event = transition.event
            // rows.push(`    ${key}-->|${event}| ${target}[${target}]`);
            rows.push(`${indent()}${key} --> ${target}: ${event}`);
            renderedStates.add(state)
            renderedStates.add(transition.to.ref)
            renderedState = true
          }
        });
      } else {
        rows.push(`${indent()}${state.name} --> [*]`)
        // need something here so the state appears?
        // end node
      }
      if (!renderedState) {

      }

      // if composite
      if (state.states && state.states.length>0) {
        compositeStates.push(state)        
      }
      // rows.push(["   ", "click", key, callbackName].join(" "));
    });

    compositeStates.forEach(state => {
      rows.push(`${indent()}state ${state.name} {`)
      addStates(state.states)

      rows.push(`${indent()}}`)
    })

    const unrenderedStates = states.filter(state => !renderedStates.has(state))
    unrenderedStates.forEach(state => {
      // rows.push(`${indent()}[*] --> ${state.name}`)
    })

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
  const [id] = useState(uuid.v4())
  const chart = useMemo(() => toStateDiagram(instance.model, instance, id), [instance, instance.model, id]);
  if (!chart) return null;
  console.log('chart', chart)
  // const ref = useMermaid({ chart })
  // return <div ref={ref}>{chart}</div>
  // const id = "mermaidCallback";
  // (window as any)[id] = (...args: any[]) => {
  //   console.log("callback", args);
  // };
  
  return (
    <>
      <Mermaid chart={chart} />
      {/*<pre>{diagram}</pre>*/}
      {/*<pre>{JSON.stringify(definition, null, 2)}</pre>*/}
    </>
  );
}
