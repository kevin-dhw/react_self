import React, { PropsWithChildren } from "react";
import { SizeType } from ".";

interface SpaceContextType {
  space?: {
    size?: SizeType;
  };
}

export const SpaceContext = React.createContext<SpaceContextType>({
  space: {
    size: "small",
  },
});

interface SpaceContextProvider extends PropsWithChildren<SpaceContextType> {}

export function SpaceProvider(props: SpaceContextProvider) {
  const { space, children } = props;
  return (
    <SpaceContext.Provider value={{ space }}>{children}</SpaceContext.Provider>
  );
}
