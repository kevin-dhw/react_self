import React from "react";

import Canlendar, { WeekDataType } from "../project/canlendar";
import dayjs from "dayjs";

const Test: React.FC = () => {
  console.log(dayjs().date(), dayjs().month() + 1, dayjs(), "1234");

  return (
    <>
      <Canlendar
        getCurWeekData={(item: WeekDataType) => {
          console.log(item);
        }}
      />
    </>
  );
};

export default Test;
