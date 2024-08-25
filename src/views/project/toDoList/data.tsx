import { ListType, TabType } from "./interface";

export const dragListData: ListType[] = [
  {
    list: [
      {
        todo: [{ value: "react1" }, { value: "vue1" }],
        doing: [{ value: "ts1" }, { value: "next1" }],
        done: [{ value: "css1" }, { value: "js1" }],
      },
    ],
  },
  {
    list: [
      {
        todo: [{ value: "react2" }, { value: "vue2" }],
        doing: [{ value: "ts2" }, { value: "next2" }],
        done: [{ value: "css2" }, { value: "js2" }],
      },
    ],
  },
  {
    list: [
      {
        todo: [{ value: "react3" }, { value: "vue3" }],
        doing: [{ value: "ts3" }, { value: "next3" }],
        done: [{ value: "css3" }, { value: "js3" }],
      },
    ],
  },
  {
    list: [
      {
        todo: [{ value: "react4" }, { value: "vue4" }],
        doing: [{ value: "ts4" }, { value: "next4" }],
        done: [{ value: "css4" }, { value: "js4" }],
      },
    ],
  },
];

export const tabData: TabType[] = [
  { value: "一", label: "01" },
  { value: "二", label: "02" },
  { value: "三", label: "03" },
  { value: "四", label: "04" },
];
