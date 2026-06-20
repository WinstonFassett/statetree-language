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
        (window as any).__dockviewApi = event.api;

        // event.api.addPanel({
        //     id: 'machine2.statetree',
        //     component: 'statetree',
        //     tabComponent: 'customTab', // optional custom header
        //     params: {
        //         someProps: 'machine2.statetree',
        //     },
        //     position: { referencePanel: 'machine.statetree', direction: 'below' }
        //   });
        event.api.fromJSON({
            grid: {
                root: {
                    type: 'branch',
                    data: [
                        {
                            type: 'branch',
                            data: [
                                { type: 'leaf', data: { views: ['DSL'], activeView: 'DSL', id: '1' }, size: 426 },
                                { type: 'leaf', data: { views: ['Matchina'], activeView: 'Matchina', id: '2' }, size: 426 },
                                { type: 'leaf', data: { views: ['XState'], activeView: 'XState', id: '3' }, size: 426 },
                            ],
                            size: 335,
                        },
                        {
                            type: 'branch',
                            data: [
                                { type: 'leaf', data: { views: ['React JSX'], activeView: 'React JSX', id: '4' }, size: 426 },
                                { type: 'leaf', data: { views: ['Viz'], activeView: 'Viz', id: '5' }, size: 426 },
                                { type: 'leaf', data: { views: ['Preview'], activeView: 'Preview', id: '6' }, size: 426 },
                            ],
                            size: 335,
                        },
                    ],
                    size: 671,
                },
                width: 1278,
                height: 671,
                orientation: 'VERTICAL',
            },
            panels: {
                'DSL': { id: 'DSL', contentComponent: 'statetree', tabComponent: 'customTab', params: { someProps: 'machine.statetree' }, title: 'DSL' },
                'Matchina': { id: 'Matchina', contentComponent: 'editor', tabComponent: 'customTab', params: { filename: '/machine.matchina.ts', language: 'typescript' }, title: 'Matchina' },
                'XState': { id: 'XState', contentComponent: 'editor', tabComponent: 'customTab', params: { filename: '/machine.json', language: 'json' }, title: 'XState' },
                'React JSX': { id: 'React JSX', contentComponent: 'editor', tabComponent: 'customTab', params: { filename: '/App.js', language: 'javascript' }, title: 'React JSX' },
                'Viz': { id: 'Viz', contentComponent: 'matchina-viz', tabComponent: 'customTab', params: {}, title: 'Viz' },
                'Preview': { id: 'Preview', contentComponent: 'preview', tabComponent: 'customTab', params: {}, title: 'Preview' },
            },
            activeGroup: '1',
        } as any);
        
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


      
