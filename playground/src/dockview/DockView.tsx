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
        event.api.addPanel({
          id: 'debug',
          component: 'debug',
          params: {
              someProps: 'World',
          },
        //   position: { referencePanel: 'forceGraph', direction: 'below' },
        });
        event.api.addPanel({
          id: 'machine.json',
          component: 'editor',
          // tabComponent: 'customTab', // optional custom header
          params: {
              someProps: '/machine.json',
          },          
        });        
        // event.api.addPanel({
        //     id: 'xstate.json',
        //     component: 'editor',
        //     // tabComponent: 'customTab', // optional custom header
        //     params: {
        //         someProps: '/xstate.json',
        //         language: 'json'
        //     },
        //     // position: { referencePanel: 'machine.statetree', direction: 'below' },
        // });
        
        // event.api.addPanel({
        //   id: 'state.json',
        //   component: 'editor',
        //   // tabComponent: 'customTab', // optional custom header
        //   params: {
        //       someProps: '/state.json',
        //   },
        // })
        event.api.addPanel({
            id: 'App.js',
            component: 'editor',
            // tabComponent: 'customTab', // optional custom header
            params: {
                someProps: '/App.js',
            },
            position: { referencePanel: 'machine.statetree', direction: 'below' },
        });
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
        event.api.addPanel({
            id: 'preview',
            component: 'preview',
            params: {
                someProps: 'World',
            },
            position: { referencePanel: 'viz', direction: 'below' },
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

export const DockView2 = () => {
  const onReady = (event: SplitviewReadyEvent) => {
      event.api.addPanel({
          id: 'panel_1',
          component: 'default',
          params: {
              title: 'Panel 1',
          },
      });
      event.api.addPanel({
          id: 'panel_2',
          component: 'default',
          params: {
              title: 'Panel 2',
          },
      });

      
  };
  const isDark = useStore(theme.dark)
  return (
      <SplitviewReact
          components={splitViewComponents}
          onReady={onReady}
          orientation={Orientation.VERTICAL}
          className={`dockview-theme-${isDark ? "dark" : "light"}`}
      />
  );
};