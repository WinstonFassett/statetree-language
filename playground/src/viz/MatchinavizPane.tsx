import { useMemo } from 'react';
import type { MachineShape, StateNode } from 'matchina/shape';
import { SvgInspector } from '@matchina/viz-svg';
import { useStateMachineContext } from '../statetree-machine/useStateMachine';

/**
 * Correct the `isCompound` flag on a flattened MachineShape.
 *
 * matchina's `buildFlattenedShape` (createHSM's shape) sets
 * `isCompound: parentKey !== undefined` — i.e. it marks *children* as compound
 * instead of *containers*. SvgInspector relies on `isCompound` to decide what
 * to draw as a nested box, so with the upstream value nested states collapse
 * (only top-level states render). Here we recompute it correctly: a node is
 * compound iff some other node names it as its parent.
 *
 * TODO: fix upstream in matchina/shape/builders.ts and drop this shim.
 */
function fixCompound(shape: MachineShape): MachineShape {
  const parents = new Set<string>();
  for (const parent of shape.hierarchy.values()) {
    if (parent) parents.add(parent);
  }
  const states = new Map<string, StateNode>();
  for (const [key, node] of shape.states) {
    states.set(key, { ...node, isCompound: parents.has(key) });
  }
  return { ...shape, states };
}

export function MatchinavizPane() {
  const machine = useStateMachineContext();
  const stateName: string = machine.stateKey ?? '';

  // Authoritative shape comes from the live machine, not a re-derivation of the
  // AST — but normalize the upstream isCompound bug before handing it to the viz.
  const shape = useMemo(
    () => (machine.shape ? fixCompound(machine.shape) : null),
    [machine.shape]
  );

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
