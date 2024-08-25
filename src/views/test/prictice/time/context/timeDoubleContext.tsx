import React, { PropsWithChildren } from "react";

export interface TimeDoubleContextType {
  timeAll?: {
    year?: string;
    mouth?: string;
  };
}

const TimeDoubleContext = React.createContext<TimeDoubleContextType>({
  timeAll: {
    year: "2024",
    mouth: "8",
  },
} as TimeDoubleContextType);
export interface TimeDoubleProviderType
  extends PropsWithChildren<TimeDoubleContextType> {}

const TimeDoubleProvider = (props: TimeDoubleProviderType) => {
  const { children, timeAll } = props;
  return (
    <TimeDoubleContext.Provider value={{ timeAll }}>
      {children}
    </TimeDoubleContext.Provider>
  );
};

export { TimeDoubleContext, TimeDoubleProvider };
