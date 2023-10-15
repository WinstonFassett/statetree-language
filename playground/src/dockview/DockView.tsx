import {
    DockviewReact,
    DockviewReadyEvent,
    SplitviewReadyEvent,
    SplitviewReact,
    Orientation,
    ISplitviewPanelProps,
} from 'dockview';
import 'dockview/dist/styles/dockview.css';

import { Visualization } from '../viz/AstVisualization';
import { useStore } from '@nanostores/react';
import { theme } from '../store';
import { components, headers } from './components';
import debounce from 'lodash.debounce'
import { useSandpack } from '@codesandbox/sandpack-react';
import { importXState } from '../sandpack/codegen';

export const DockView = () => {
    const { sandpack } = useSandpack()
    const onReady = (event: DockviewReadyEvent) => {


        // event.api.addPanel({
        //     id: 'machine2.statetree',
        //     component: 'statetree',
        //     tabComponent: 'customTab', // optional custom header
        //     params: {
        //         someProps: 'machine2.statetree',
        //     },
        //     position: { referencePanel: 'machine.statetree', direction: 'below' }
        //   });
        event.api.addPanel({
            id: 'XState',
            component: 'editor',
            tabComponent: 'customTab',
            params: {
                filename: '/machine.json',
                language: 'json',
                // afterEdit:  debounce((code: string, filename: string) => {
                //   // try import and update statetree
                // //   console.log('user changed machine.json')
                // //   console.log('todo: import xstate', code)
                //   // let data
                //   // try {
                //   //     importXState(sandpack, code)
                //   //     data = JSON.parse(code)
                //   //     console.log({ data })
                      
                //   // } catch (err) {
                //   //     console.log('failed to import xstate', err)
                //   // }
                // }, 500)
            },          
          });
        event.api.addPanel({
            id: 'DSL',
            component: 'statetree',
            tabComponent: 'customTab',
            params: {
                someProps: 'machine.statetree',
            },
        });
        event.api.addPanel({
            id: 'Code',
            component: 'editor',
            tabComponent: 'customTab',
            params: {
                filename: '/App.js',
                language: 'json',
            },
            position: { referencePanel: 'DSL', direction: 'below' },
        });          
       
       
        // event.api.addPanel({
        //   id: 'forceGraph',
        //   component: 'forceGraph',
        //   params: {
        //       someProps: 'World',
        //   },
        //   position: { referencePanel: 'viz', direction: 'right' },
        // });
        // event.api.addPanel({
        //     id: 'mermaid',
        //     component: 'mermaid',
        //     params: {},            
        //   });
        // event.api.addPanel({
        //   id: 'debug',
        //   component: 'debug',
        //   params: {
        //       someProps: 'World',
        //   },
        //   position: { referencePanel: 'machine.statetree', direction: 'right' },
        // });
        
        event.api.addPanel({
            id: 'Diagram',
            component: 'plantuml',
            tabComponent: 'customTab',
            params: {
                someProps: 'World',
            },
            position: { referencePanel: 'DSL', direction: 'right' },
        });
        event.api.addPanel({
            id: 'State',
            component: 'viz',
            tabComponent: 'customTab',
            params: {
                someProps: 'World',
            },
            // position: { referencePanel: 'machine.statetree', direction: 'right' },
        }); 
        // event.api.addPanel({
        //     id: 'xstate.json',
        //     component: 'editor',
        //     // tabComponent: 'customTab', // optional custom header
        //     params: {
        //         filename: '/xstate.json',
        //         language: 'json'
        //     },
        //     // position: { referencePanel: 'machine.statetree', direction: 'below' },
        // });
        
        // event.api.addPanel({
        //   id: 'state.json',
        //   component: 'editor',
        //   // tabComponent: 'customTab', // optional custom header
        //   params: {
        //       filename: '/state.json',
        //   },
        // })

      //   event.api.addPanel({
      //     id: 'state.json',
      //     component: 'editor',
      //     // tabComponent: 'customTab', // optional custom header
      //     params: {
      //         filename: '/state.json',
      //         language: 'json'
      //     },
      //     // position: { referencePanel: 'machine.statetree', direction: 'below' },
      // });
        event.api.addPanel({
            id: 'Preview',
            component: 'preview',
            tabComponent: 'customTab',
            params: {
                someProps: 'World',
            },
            position: { referencePanel: 'Code', direction: 'right' },
        });        
        
    };

    return (
        <DockviewReact
            components={components}
            tabComponents={headers} // optional headers renderer
            onReady={onReady}
        />
    );
};
const splitViewComponents = {
  default: (props: ISplitviewPanelProps<{ title: string }>) => {
      return <div style={{ padding: '20px' }}>{props.params.title}</div>;
  },
};


      
