import {
    DockviewReact,
    DockviewReadyEvent,
    PanelCollection,
    IDockviewPanelProps,
    IDockviewPanelHeaderProps,
} from 'dockview';
import 'dockview/dist/styles/dockview.css';

import { StatetreeEditor } from './StatetreeEditor'
import { Visualization } from './AstVisualization';
import { useContext } from 'react';
import { ModelContext } from './ModelContext';
import { SandpackPreview } from '@codesandbox/sandpack-react';
import { SandpackMonacoEditor } from './SandpackMonacoEditor';
import { StateMachinePane } from './StateMachinePane';
import { DebugPane } from './DebugPane';


const components: PanelCollection<IDockviewPanelProps> = {
    default: (props: IDockviewPanelProps<{ someProps: string }>) => {
      return <div>{props.params.someProps}</div>;
    },
    debug: (props: IDockviewPanelProps<{ someProps: string }>) => {
      return (<DebugPane />)
    },    
    viz: (props: IDockviewPanelProps<{ someProps: string }>) => {
      return (<StateMachinePane />)
    },
    statetree: (props: IDockviewPanelProps<{ someProps: string }>) => {
      const {model, setModel} = useContext(ModelContext)
      return <StatetreeEditor onModelCreated={setModel}  />;
    },
    editor: (props: IDockviewPanelProps<{ someProps: string, language?: string }>) => {
      return <div>
        {/* editor for:{props.params.someProps} or {props.params.someProps} */}
        <SandpackMonacoEditor filename={props.params.someProps} language={props.params.language} />
      </div>;
    },
    preview: (props: IDockviewPanelProps<{ someProps: string }>) => {
      return <div>
        Preview for:{props.params.someProps}
        <SandpackPreview style={{ height: "100vh" }} />
      </div>;
    },
};

const headers: PanelCollection<IDockviewPanelHeaderProps> = {
    customTab: (props: IDockviewPanelHeaderProps) => {
        return (
            <div>
                <span>{props.api.title}</span>
                {/* <span onClick={() => props.api.close()}>{'[x]'}</span> */}
            </div>
        );
    },
};

export const DockView = () => {
    const onReady = (event: DockviewReadyEvent) => {
        event.api.addPanel({
          id: 'machine.statetree',
          component: 'statetree',
          tabComponent: 'customTab', // optional custom header
          params: {
              someProps: 'machine.statetree',
          },
        });
        event.api.addPanel({
            id: 'viz',
            component: 'viz',
            params: {
                someProps: 'World',
            },
            position: { referencePanel: 'machine.statetree', direction: 'right' },
        });
        event.api.addPanel({
          id: 'debug',
          component: 'debug',
          params: {
              someProps: 'World',
          },
        });      
      //   event.api.addPanel({
      //       id: 'App.js',
      //       component: 'editor',
      //       // tabComponent: 'customTab', // optional custom header
      //       params: {
      //           someProps: '/App.js',
      //       },
      //       position: { referencePanel: 'machine.statetree', direction: 'below' },
      //   });
      //   event.api.addPanel({
      //     id: 'state.json',
      //     component: 'editor',
      //     // tabComponent: 'customTab', // optional custom header
      //     params: {
      //         someProps: '/state.json',
      //         language: 'json'
      //     },
      //     // position: { referencePanel: 'machine.statetree', direction: 'below' },
      // });
      //   event.api.addPanel({
      //       id: 'preview',
      //       component: 'preview',
      //       params: {
      //           someProps: 'World',
      //       },
      //       position: { referencePanel: 'viz', direction: 'below' },
      //   });
    };

    return (
        <DockviewReact
            components={components}
            tabComponents={headers} // optional headers renderer
            onReady={onReady}
        />
    );
};