import React from "react";

export interface pickContextProps {
  num: number;
}

const PickContext = React.createContext<pickContextProps>({ num: 100 });

export default PickContext;
