import { IDockviewPanelProps } from 'dockview';
import * as React from 'react';

export function RenderWhenVisible (
    Component: React.FunctionComponent<any>
) {
    const HigherOrderComponent = (props: IDockviewPanelProps & React.ComponentProps<typeof Component> ) => {
        const [visible, setVisible] = React.useState<boolean>(
            props.api.isVisible
        );

        React.useEffect(() => {
            const disposable = props.api.onDidVisibilityChange((event) =>
                setVisible(event.isVisible)
            );

            return () => {
                disposable.dispose();
            };
        }, [props.api]);

        if (!visible) {
            return <></>;
        }

        return <Component {...props as any} />;
    };
    return HigherOrderComponent;
}