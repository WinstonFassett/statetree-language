import {
  PanelCollection,
  IDockviewPanelProps,
  IDockviewPanelHeaderProps
} from 'dockview';

import { SandpackPreview, useSandpack } from '@codesandbox/sandpack-react';
import { SandpackMonacoEditor } from '../sandpack/SandpackMonacoEditor';
import { StateMachinePane } from '../statetree-machine/StateMachinePane';
import { DebugPane } from '../older/DebugPane';
import { StateMachineForceGraph } from '../viz/StateMachineForceGraphPane';
import { StatetreeEditorPane } from '../sandpack/StateTreeEditorPane';
import { StateMachineMermaidPane } from '../viz/StateMachineMermaidPane';
import { StateMachinePlantUmlPane } from '../viz/StateMachinePlantUmlPane';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { SandpackPreviewPane } from '../sandpack/SandpackPreviewPane';
import { HoistedDockviewPanel } from './HoistedDockViewPanel';
import { RenderWhenVisible } from './RenderWhenVisible';

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
  // mermaid: (props: IDockviewPanelProps<{}>) => {
  //   return (<StateMachineMermaidPane />)
  // },
  // forceGraph: (props: IDockviewPanelProps<{ someProps: string; }>) => {
  //   return (<StateMachineForceGraph />);
  // },
  plantuml: (props: IDockviewPanelProps<{ someProps: string; }>) => {
    const PlantUml = RenderWhenVisible(StateMachinePlantUmlPane)
    return <PlantUml {...props} />;
  },
  statetree: (props: IDockviewPanelProps<{ someProps: string; }>) => {
    return <StatetreeEditorPane />;
  },
  editor: (props: IDockviewPanelProps<{ filename: string; afterEdit: (code: string|undefined)=> void; language?: string; }>) => {
    // afterEdit: (code: string)=> void;
    const Editor = RenderWhenVisible((props: IDockviewPanelProps<{ filename: string; afterEdit: (code: string|undefined)=> void; language?: string; }>) => {
      return <SandpackMonacoEditor afterEdit={props.params.afterEdit} filename={props.params.filename} language={props.params.language} />
    })
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
      <div>
        <span>{props.api.title}</span>
        {/* <span onClick={() => props.api.close()}>{'[x]'}</span> */}
      </div>
    );
  },
};
