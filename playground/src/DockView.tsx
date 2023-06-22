import {
    DockviewReact,
    DockviewReadyEvent,
    PanelCollection,
    IDockviewPanelProps,
    IDockviewPanelHeaderProps,
} from 'dockview';
import 'dockview/dist/styles/dockview.css';

const components: PanelCollection<IDockviewPanelProps> = {
    default: (props: IDockviewPanelProps<{ someProps: string }>) => {
      return <div>{props.params.someProps}</div>;
    },
    viz: (props: IDockviewPanelProps<{ someProps: string }>) => {
      return <div>viz for:{props.params.someProps}</div>;
    },
    editor: (props: IDockviewPanelProps<{ someProps: string }>) => {
      return <div>editor for:{props.params.someProps}</div>;
    },
    preview: (props: IDockviewPanelProps<{ someProps: string }>) => {
      return <div>Preview for:{props.params.someProps}</div>;
    },
};

const headers: PanelCollection<IDockviewPanelHeaderProps> = {
    customTab: (props: IDockviewPanelHeaderProps) => {
        return (
            <div>
                <span>{props.api.title}</span>
                <span onClick={() => props.api.close()}>{'[x]'}</span>
            </div>
        );
    },
};

export const DockView = () => {
    const onReady = (event: DockviewReadyEvent) => {
        event.api.addPanel({
          id: 'machine.statetree',
          component: 'editor',
          // tabComponent: 'customTab', // optional custom header
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
            id: 'App.jsx',
            component: 'editor',
            // tabComponent: 'customTab', // optional custom header
            params: {
                someProps: 'App',
            },
            position: { referencePanel: 'machine.statetree', direction: 'below' },
        });
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