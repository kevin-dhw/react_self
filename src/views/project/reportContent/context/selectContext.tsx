import React, { PropsWithChildren } from "react";

export interface SelectContextProps {
  selectData?: {
    num: number;
  };
}
export const SelectContext = React.createContext<SelectContextProps>(
  {} as SelectContextProps
);

interface SelectContextProviderProps
  extends PropsWithChildren<SelectContextProps> {}
export function SelectContextProvider(props: SelectContextProviderProps) {
  const { selectData, children } = props;
  return (
    <SelectContext.Provider value={{ selectData }}>
      {children}
    </SelectContext.Provider>
  );
}
