import React from "react";

export interface SpaceContextProps {
  num?: number;
  str?: string;
}

export const SpaceContext = React.createContext<SpaceContextProps>({
  num: 10,
  str: "hahhah",
} as SpaceContextProps);
