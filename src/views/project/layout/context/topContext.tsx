import { createContext, PropsWithChildren } from "react";

interface TopContextType {
  topData?: {
    title?: string;
    subTitle?: string;
  };
}
const TopContext = createContext<TopContextType>({
  topData: {
    title: "我是原始标题",
    subTitle: "我是原始副标题",
  },
} as TopContextType);

interface TopContextProviderType extends PropsWithChildren<TopContextType> {}

function TopContextProvider(props: TopContextProviderType) {
  const { topData, children } = props;
  return (
    <TopContext.Provider value={{ topData }}>{children}</TopContext.Provider>
  );
}
export { TopContextProvider, TopContext };
