import { useStore } from '@nanostores/react';
import { SvgInspector } from '@matchina/viz-svg';
import { buildShapeFromAst } from '../../../src/language/codegen';
import * as store from '../store';
import { useMemo } from 'react';
import { useStateMachineContext } from '../statetree-machine/useStateMachine';

export function MatchinavizPane() {
  const model = useStore(store.latestValidModel);
  const machine = useStateMachineContext();
  const stateName: string = machine.stateKey ?? '';

  const shape = useMemo(() => {
    if (!model) return null;
    try {
      return buildShapeFromAst(model);
    } catch {
      return null;
    }
  }, [model]);

  if (!shape) {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background)', color: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)', fontSize: 12 }}>
        no model
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', background: 'var(--background)' }}>
      <SvgInspector
        shape={shape}
        value={stateName}
        onFire={(event: string) => machine.send(event)}
      />
    </div>
  );
}
