import { useState } from "react";

export default function useReducer<StateType, ActionType>(
  reducer: Function,
  initialState: StateType
): [StateType, (arg: ActionType) => void] {
  const [state, setState] = useState(initialState);

  function dispatch(action: ActionType) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}
