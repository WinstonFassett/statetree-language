import { State } from "../../src/language/generated/ast";

export function getParentState(state: State) {
  const { $container } = state;
  if ($container && $container.$type === 'State') {
    return $container;
  }
  return undefined;
}
