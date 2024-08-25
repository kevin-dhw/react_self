import React from "react";

export interface TimeType {
  time: string;
}

const TimeContext = React.createContext<TimeType>({
  time: "2024/8/14",
});

export default TimeContext;
