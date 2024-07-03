import React from "react";
import pickContext, { pickContextProps } from "../context";

function usePickContext() {
  return React.useContext<pickContextProps>(pickContext);
}

export default usePickContext;
