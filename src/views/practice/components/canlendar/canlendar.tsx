import React from "react";
import MonthCanlendar from "./components/monthCalendar";
import { Dayjs } from "dayjs";
import "./index.scss";

export interface CalendarProps {
  value: Dayjs;
}

const Canlendar: React.FC<CalendarProps> = (props) => {
  const { value } = props;
  console.log(value);

  return (
    <div className="calendar">
      <MonthCanlendar {...props} />
    </div>
  );
};

export default Canlendar;
