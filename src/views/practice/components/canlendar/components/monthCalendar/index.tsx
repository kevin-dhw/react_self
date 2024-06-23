import React from "react";
import { Dayjs } from "dayjs";
import cs from "classnames";
import { CalendarProps } from "../../canlendar";
import { getAllDays } from "../../utils";

interface MonthCanlendarProps extends CalendarProps {}

function MonthCalendar(props: MonthCanlendarProps) {
  const { value } = props;
  const weekList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

  const allDays = getAllDays(value);
  console.log(allDays);

  // 准备渲染的数据
  function renderDays(
    days: Array<{ date: Dayjs; currentMonth: boolean }>,
    dateRender: MonthCanlendarProps["dateRender"],
    dateInnerContent: MonthCanlendarProps["dateInnerContent"],
    value: Dayjs,
    selectHandler: MonthCanlendarProps["selectHandler"]
  ) {
    const rows = [];
    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        const item = days[i * 7 + j];
        row[j] = (
          <div
            className={
              "calendar-month-body-cell " +
              (item.currentMonth ? "calendar-month-body-cell-current" : "")
            }
            onClick={() => selectHandler?.(item.date)}
          >
            {dateRender ? (
              dateRender(item.date)
            ) : (
              <div className="calendar-month-body-cell-date">
                <div
                  className={cs(
                    "calendar-month-body-cell-date-value",
                    value.format("YYYY-MM-DD") ===
                      item.date.format("YYYY-MM-DD")
                      ? "calendar-month-body-cell-date-selected"
                      : ""
                  )}
                >
                  {item.date.date()}
                </div>
                <div className="calendar-month-body-cell-date-content">
                  {dateInnerContent?.(item.date)}
                </div>
              </div>
            )}
          </div>
        );
      }
      rows.push(row);
    }

    return rows.map((row, index) => (
      <div className="calendar-month-body-row" key={index}>
        {row}
      </div>
    ));
  }

  return (
    <div className="calendar-month">
      <div className="calendar-month-week-list">
        {weekList.map((week) => (
          <div className="calendar-month-week-list-item" key={week}>
            {week}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthCalendar;
