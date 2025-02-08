import { createContext, PropsWithChildren } from "react";

interface DoubleContextProps {
  info: {
    gender: string;
    age: number;
  };
}

const DoubleContext = createContext<DoubleContextProps>({
  info: {
    gender: "man",
    age: 20,
  },
});

interface DoubleContextProvider extends PropsWithChildren<DoubleContextProps> {}

function DoubleProvider(props: DoubleContextProvider) {
  const { info, children } = props;
  return (
    <DoubleContext.Provider value={{ info }}>{children}</DoubleContext.Provider>
  );
}

export { DoubleProvider, DoubleContext };
