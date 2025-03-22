import { SearchItemType } from "./interface";

export const searchData: SearchItemType[] = [
  {
    title: "隐患登记",
    field: "issue",
    type: "single",
    showType: "select",
    list: [
      {
        value: "0",
        subTitle: "一般隐患",
      },
      {
        value: "1",
        subTitle: "较大隐患",
      },
      {
        value: "2",
        subTitle: "重大隐患",
      },
    ],
  },
  {
    title: "隐患来源",
    field: "sorce",
    type: "double",
    showType: "select",
    list: [
      {
        value: "0",
        subTitle: "一般隐患1",
      },
      {
        value: "1",
        subTitle: "较大隐患2",
      },
      {
        value: "2",
        subTitle: "重大隐患3",
      },
    ],
  },
  {
    title: "设备电压登记",
    field: "electricLevel",
    type: "double",
    showType: "select",
    list: [
      {
        value: "0",
        subTitle: "交流110kv",
      },
      {
        value: "1",
        subTitle: "交流120kv",
      },
      {
        value: "2",
        subTitle: "交流210kv",
      },
      {
        value: "3",
        subTitle: "交流220kv",
      },
      {
        value: "4",
        subTitle: "交流300kv",
      },
      {
        value: "5",
        subTitle: "交流400kv",
      },
      {
        value: "6",
        subTitle: "交流500kv",
      },
    ],
  },
];
