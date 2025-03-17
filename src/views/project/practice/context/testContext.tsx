import { createContext } from "react";

export interface TestContextProps {
  name: string;
  age: number;
}

const TestContext = createContext({
  name: "jack",
  age: 30,
} as TestContextProps);

export default TestContext;
