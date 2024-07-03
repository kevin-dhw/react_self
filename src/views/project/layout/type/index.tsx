import { LongTaskItem } from "../components/longTask";
export interface BtnsType {
  type?: string;
  content: string;
}
export interface LongTaskDatasType {
  longTaskData: LongTaskItem[];
}

export interface LongTaskDatasBtnProps {
  btns?: BtnsType[];
  longTaskData: LongTaskItem[];
}

// export interface LongTaskDatasBtnType {
//   LongTaskDatasBtn: LongTaskDatasBtnProps[];
// }
