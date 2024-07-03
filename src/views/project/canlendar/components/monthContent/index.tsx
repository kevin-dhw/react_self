import React from "react";
import "./index.scss";
import { WeekDataType } from "../../interface";

interface MonthContentProps {
  weekData: WeekDataType[];
}

const MonthContent: React.FC<MonthContentProps> = (props) => {
  const { weekData } = props;
  return (
    <div className="month-content flex flex-wrap">
      {weekData.length &&
        weekData.map((item, index) => {
          return (
            <div key={index} className="month-content-item">
              <div className="month-content-item-title">
                <div>{item.week}</div>
                <div>写周报</div>
              </div>
              <div>
                {item.startDate}-{item.endDate}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MonthContent;
