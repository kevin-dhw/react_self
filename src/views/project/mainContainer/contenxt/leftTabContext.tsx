import { createContext } from "react";

import { TabsType } from "../type";

interface LeftTabContextType {
  tabs?: TabsType<number>[];
  getTabItem?: (tabItem: TabsType<number>) => void;
  getSearchValue?: (value: string) => void;
}
const leftTabContext = createContext<LeftTabContextType>({});

interface CurTabValueType {
  tabItem?: TabsType<number>;
}
const curTabValue = createContext<CurTabValueType>({});

export { leftTabContext, curTabValue };
