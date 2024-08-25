import React from "react";
import {
  TimeDoubleContext,
  TimeDoubleContextType,
} from "../context/timeDoubleContext";

const useTimeDoubleContext = () => {
  return React.useContext<TimeDoubleContextType>(TimeDoubleContext);
};

export default useTimeDoubleContext;
