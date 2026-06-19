import {
  PanelCollection,
  IDockviewPanelProps,
  IDockviewPanelHeaderProps
} from 'dockview';

import { SandpackPreview, useSandpack } from '@codesandbox/sandpack-react';
import { StateMachinePane } from '../statetree-machine/StateMachinePane';
import { DebugPane } from '../older/DebugPane';
import { StateMachineForceGraph } from '../viz/StateMachineForceGraphPane';
import { StatetreeEditorPane } from '../sandpack/StateTreeEditorPane';
import { StateMachineMermaidPane } from '../viz/StateMachineMermaidPane';
import { Suspense, lazy, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { SandpackPreviewPane } from '../sandpack/SandpackPreviewPane';
import { HoistedDockviewPanel } from './HoistedDockViewPanel';
import { RenderWhenVisible } from './RenderWhenVisible';
import { MatchinavizPane } from '../viz/MatchinavizPane';

const StateMachinePlantUmlPane = lazy(() => import('../viz/StateMachinePlantUmlPane'));

const SandpackMonacoEditor = lazy(() => import('../sandpack/SandpackMonacoEditor'))

const PlantUml = RenderWhenVisible(({}) => {
  return <Suspense fallback={<Loader />}><StateMachinePlantUmlPane /></Suspense>
})
const Editor = RenderWhenVisible((props: IDockviewPanelProps<{ filename: string; afterEdit: (code: string|undefined)=> void; language?: string; }>) => {
  return <Suspense fallback={<Loader />}><SandpackMonacoEditor afterEdit={props.params.afterEdit} filename={props.params.filename} language={props.params.language} /></Suspense>
})

const Loader = () => <div>Itsa Loading...</div>


export const components: PanelCollection<IDockviewPanelProps> = {
  default: (props: IDockviewPanelProps<{ someProps: string; }>) => {
    return <div>{props.params.someProps}</div>;
  },
  debug: (props: IDockviewPanelProps<{ someProps: string; }>) => {
    return (<DebugPane />);
  },
  viz: (props: IDockviewPanelProps<{ someProps: string; }>) => {
    return (<StateMachinePane />);
  },
  'matchina-viz': (props: IDockviewPanelProps<{}>) => {
    return (<MatchinavizPane />);
  },
  // mermaid: (props: IDockviewPanelProps<{}>) => {
  //   return (<StateMachineMermaidPane />)
  // },
  // forceGraph: (props: IDockviewPanelProps<{ someProps: string; }>) => {
  //   return (<StateMachineForceGraph />);
  // },
  plantuml: (props: IDockviewPanelProps<{ someProps: string; }>) => {

    return <PlantUml {...props} />;
  },
  statetree: (props: IDockviewPanelProps<{ someProps: string; }>) => {
    return <StatetreeEditorPane />;
  },
  editor: (props: IDockviewPanelProps<{ filename: string; afterEdit: (code: string|undefined)=> void; language?: string; }>) => {
    // afterEdit: (code: string)=> void;


    return (
      <Editor {...props} />
    )
  },
  preview: HoistedDockviewPanel((props: IDockviewPanelProps<{ someProps: string; }>) => {
    return <SandpackPreview showOpenInCodeSandbox={false} showSandpackErrorOverlay={true} />
  }),
};
export const headers: PanelCollection<IDockviewPanelHeaderProps> = {
  customTab: (props: IDockviewPanelHeaderProps) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', height: '100%', padding: '0 12px', fontSize: 13, fontFamily: 'var(--font-sans)' }}>
        <span>{props.api.title}</span>
      </div>
    );
  },
};
