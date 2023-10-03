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
    return <StateMachinePlantUmlPane />;
  },
  statetree: (props: IDockviewPanelProps<{ someProps: string; }>) => {
    return <StatetreeEditorPane />;
  },
  editor: (props: IDockviewPanelProps<{ filename: string; afterEdit: (code: string|undefined)=> void; language?: string; }>) => {
    // afterEdit: (code: string)=> void;
    return <div>
      {/* editor for:{props.params.filename} or {props.params.filename} */}
      <SandpackMonacoEditor afterEdit={props.params.afterEdit} filename={props.params.filename} language={props.params.language} />
    </div>;
  },
  preview: HoistedDockviewPanel((props: IDockviewPanelProps<{ someProps: string; }>) => {
    const dimensions = useRef({ height: 0, width: 0 })    
    useEffect(() => {
      console.log('first time')
      const{dispose} = props.api.onDidDimensionsChange((event) => {
        console.log('dimensions', { height: event.height, width: event.width });        
        const { height, width } = event
        dimensions.current = ({ height, width })
      });      
      // props.api.onDidDimensionsChange
      // const disposable = props.api.onDidFocusChange(() => {
      //     // write some code
      // });
      return () => {
          dispose();
      };
    })    
    // const { height, width } = dimensions.current
    props.api.onDidVisibilityChange(e => {
      console.log({visibility: e})
    })
    return <SandpackPreviewPane style={{ height: '400px' }}/>
    
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
