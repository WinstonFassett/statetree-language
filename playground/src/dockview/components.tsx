import {
  PanelCollection,
  IDockviewPanelProps,
  IDockviewPanelHeaderProps
} from 'dockview';

import { SandpackPreview } from '@codesandbox/sandpack-react';
import { SandpackMonacoEditor } from '../sandpack/SandpackMonacoEditor';
import { StateMachinePane } from '../statetree-machine/StateMachinePane';
import { DebugPane } from '../older/DebugPane';
import { StateMachineForceGraph } from '../viz/StateMachineForceGraphPane';
import { StatetreeEditorPane } from '../sandpack/StateTreeEditorPane';

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
  forceGraph: (props: IDockviewPanelProps<{ someProps: string; }>) => {
    return (<StateMachineForceGraph />);
  },
  statetree: (props: IDockviewPanelProps<{ someProps: string; }>) => {
    return <StatetreeEditorPane />;
  },
  editor: (props: IDockviewPanelProps<{ someProps: string; language?: string; }>) => {
    return <div>
      {/* editor for:{props.params.someProps} or {props.params.someProps} */}
      <SandpackMonacoEditor filename={props.params.someProps} language={props.params.language} />
    </div>;
  },
  preview: (props: IDockviewPanelProps<{ someProps: string; }>) => {
    return <SandpackPreview style={{ height: "100vh" }} />;
  },
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
