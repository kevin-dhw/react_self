import React from "react";
import TimeContext, { TimeType } from "../context/timeContenxt";

const useTimeHooks = () => {
  return React.useContext<TimeType>(TimeContext);
};

export default useTimeHooks;
