import { Reference } from 'langium';
import { State } from '../../../src/language/generated/ast';

// ReturnType<typeof useStateMachine>
export function getInitState(initialState: Reference<State> | undefined, states: State[] | undefined) {
  return initialState?.ref ?? states?.[0];
}
