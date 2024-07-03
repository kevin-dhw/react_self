import { createContext } from "react";

export interface OtherContextType {
  num: number;
  str: string;
}

const otherContext = createContext<OtherContextType>({
  num: 10,
  str: "string",
} as OtherContextType);

export default otherContext;
