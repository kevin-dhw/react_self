interface MainInfoType {
  No: string;
  place: string;
  group: string;
  user: string;
}
interface SubInfoType {
  startTime: string;
}

export interface ListDataItemType {
  title: string;
  type: string;
  mainInfo: MainInfoType[];
  subInfo: SubInfoType[];
  content: string;
}

export const listData: ListDataItemType[] = [
  {
    title: "交流1kv",
    type: "待办",
    mainInfo: [
      {
        No: "1234",
        place: "江苏",
        group: "第一组",
        user: "负责人",
      },
    ],
    subInfo: [
      {
        startTime: "2024/5/30",
      },
    ],
    content: "今天我干了什么",
  },
  {
    title: "交流2kv",
    type: "进行中",
    mainInfo: [
      {
        No: "1234",
        place: "江苏",
        group: "第一组",
        user: "负责人",
      },
    ],
    subInfo: [
      {
        startTime: "2024/5/30",
      },
    ],
    content: "今天我干了什么",
  },
  {
    title: "交流3kv",
    type: "已完成",
    mainInfo: [
      {
        No: "1234",
        place: "江苏",
        group: "第一组",
        user: "负责人",
      },
    ],
    subInfo: [
      {
        startTime: "2024/5/30",
      },
    ],
    content: "今天我干了什么",
  },
  {
    title: "交流4",
    type: "待办",
    mainInfo: [
      {
        No: "1234",
        place: "江苏",
        group: "第一组",
        user: "负责人",
      },
    ],
    subInfo: [
      {
        startTime: "2024/5/30",
      },
    ],
    content: "今天我干了什么",
  },
  {
    title: "交流5",
    type: "进行中",
    mainInfo: [
      {
        No: "1234",
        place: "江苏",
        group: "第一组",
        user: "负责人",
      },
    ],
    subInfo: [
      {
        startTime: "2024/5/30",
      },
    ],
    content: "今天我干了什么",
  },
  {
    title: "交流3",
    type: "已完成",
    mainInfo: [
      {
        No: "1234",
        place: "江苏",
        group: "第一组",
        user: "负责人",
      },
    ],
    subInfo: [
      {
        startTime: "2024/5/30",
      },
    ],
    content: "今天我干了什么",
  },
  {
    title: "交流2",
    type: "已完成",
    mainInfo: [
      {
        No: "1234",
        place: "江苏",
        group: "第一组",
        user: "负责人",
      },
    ],
    subInfo: [
      {
        startTime: "2024/5/30",
      },
    ],
    content: "今天我干了什么",
  },
];