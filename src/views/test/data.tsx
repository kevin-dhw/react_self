interface MainInfoType {
  No: string;
  place: string;
  group: string;
  user: string;
}
interface SubInfoType {
  startTime: string;
}

interface ListDataItemType {
  title: string;
  mainInfo: MainInfoType[];
  subInfo: SubInfoType[];
  content: string;
}

export const listData: ListDataItemType[] = [
  {
    title: "交流220kv",
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
    title: "交流220kv",
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
