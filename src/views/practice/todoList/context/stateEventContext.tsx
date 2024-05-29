import { createContext } from "react";

interface StateEventType {
  contextNum: number;
}

const StateEventContext = createContext<StateEventType>({
  contextNum: 0,
});
export { StateEventContext };
