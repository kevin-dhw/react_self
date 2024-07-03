import { useContext } from "react";
import otherContext, { OtherContextType } from "../context/otherContext";

function useOtherContext() {
  return useContext<OtherContextType>(otherContext);
}

export default useOtherContext;
