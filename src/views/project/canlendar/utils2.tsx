import dayjs, { Dayjs } from "dayjs";

export function getweekData(curYear: number | undefined) {
  //   默认当前是那年
  const defaultYear = dayjs().year();
  //   点击选择的年份
  const date: Dayjs = dayjs(`${curYear ? curYear : defaultYear}-01-01`);
  //  当前月份的星期几 (今年第一天星期几)
  const day = date.startOf("month").day();

  //   这年有多少天
  const dayOfThisYear = dayjs(
    `${curYear ? curYear : defaultYear}-12-31`
  ).dayOfYear();
  //   console.log(dayOfThisYear, "dayOfThisYear");
  //  可以利用dayjs的add方法对日期天数进行加

  //   第一周几天
  const firstWeekOfDay = 7 - (day === 0 ? day : day - 1);
  //  计算第一周结束的日期
  const firstWeek = {
    week: "1",
    startDate: "01月01日",
    subEndDate: `01-0${firstWeekOfDay}`,
    endDate: `01月0${firstWeekOfDay}日`,
  };
  //   console.log(firstWeekOfDay, "firstWeekOfDay");

  //   计算最后一周结束的日期
  const lastWeekOfDay = (dayOfThisYear - firstWeekOfDay) % 7;
  //   console.log(lastWeekOfDay, "lastWeekOfDay");

  //   console.log(firstWeek, lastWeek, "firstWeek");

  //  全年除去第一周和最后一周所剩的天数
  const leftDays = dayOfThisYear - firstWeekOfDay - lastWeekOfDay;
  //   console.log(leftDays, "leftDays");

  const dataArr: Record<string, any>[] = [firstWeek];
  //   全年天数除去第一周
  //   const countWeek: any = {};
  for (let i = 1; i < leftDays / 7 + 1; i++) {
    dataArr[i] = {};
    dataArr[i].week = String(i + 1);
    // 开始的日期 等一上一个结束
    // dataArr[i].startDate = date.add(7 * i, "day").format("MM月DD日");
    dataArr[i].startDate = dataArr[i - 1].endDate;

    // 上个结束的,等于这个开始的
    const temp = dayjs(
      `${curYear ? curYear : defaultYear}-${dataArr[i - 1].subEndDate}`
    );

    // 结束的日期
    dataArr[i].endDate = temp.add(7, "day").format("MM月DD日");
    // console.log(date.add(7 * i, "day").format("YYYY-MM-DD"), "2222", i);
    // console.log(date.add(7 * i, "day").format("MM月DD日"), "2222", 111111);
    dataArr[i].subEndDate = temp.add(7, "day").format("MM-DD");
  }
  const lastWeek = {
    week: String(dataArr.length + 1),
    startDate: dataArr[dataArr.length - 1].endDate,
    endDate: `12月31日`,
  };

  dataArr.push(lastWeek);
  return dataArr;
}
