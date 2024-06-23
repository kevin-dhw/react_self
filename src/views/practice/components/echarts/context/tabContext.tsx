import React from "react";

interface TabContextProps {
  num: number;
}

const TabContext = React.createContext<TabContextProps>({} as TabContextProps);

export default TabContext;
