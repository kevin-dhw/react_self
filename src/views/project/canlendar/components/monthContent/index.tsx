import React from "react";
import "./index.scss";
import { WeekDataType } from "../../interface";
import { CanlendarProps } from "../../calendar";

interface MonthContentProps extends CanlendarProps {
  weekData: WeekDataType[];
}

const MonthContent: React.FC<MonthContentProps> = (props) => {
  const { weekData, getCurWeekData } = props;

  return (
    <div className="month-content flex flex-wrap">
      {weekData.length &&
        weekData.map((item, index) => {
          return (
            <div key={index} className="month-content-item">
              <div className="month-content-item-title">
                {item.isCurWeek ? (
                  <div>本周(第{item.week}周)</div>
                ) : (
                  <div>第{item.week}周</div>
                )}
                <div
                  onClick={() => getCurWeekData?.(item)}
                  className="month-content-item-title-write"
                >
                  写周报
                </div>
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
