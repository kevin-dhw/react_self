export interface TabType {
  label: string;
  value: string;
}

export interface PickType {
  pickVabel: string;
  pickValue: string;
}

type type = "add" | "del" | "edit";
export interface BtnType {
  value: string;
  type: type;
}

export interface MainDataType {
  title: string;
  name: string;
  dealName: string;
  btns: BtnType[];
}
