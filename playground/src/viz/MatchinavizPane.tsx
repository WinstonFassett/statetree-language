import { SvgInspector } from '@matchina/viz-svg';
import { useStateMachineContext } from '../statetree-machine/useStateMachine';

export function MatchinavizPane() {
  const machine = useStateMachineContext();
  const stateName: string = machine.stateKey ?? '';

  // Authoritative shape comes from the live machine, not a re-derivation of the AST.
  const shape = machine.shape ?? null;

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
