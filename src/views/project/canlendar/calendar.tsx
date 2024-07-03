import React, { useState } from "react";
import Header from "./components/header";
import MonthContent from "./components/monthContent";
import dayjs from "dayjs";
import { getweekData } from "./utils";
import weekOfYear from "dayjs/plugin/weekOfYear";
import dayOfYear from "dayjs/plugin/dayOfYear";
dayjs.extend(weekOfYear);
dayjs.extend(dayOfYear);

const Canlendar: React.FC = () => {
  const [curYear, setCurYear] = useState<number>();
  const weekData = getweekData(curYear);

  return (
    <div>
      <Header
        getCurYear={(curYear: number) => {
          setCurYear(curYear);
        }}
      ></Header>
      <MonthContent weekData={weekData}></MonthContent>
    </div>
  );
};

export default Canlendar;
