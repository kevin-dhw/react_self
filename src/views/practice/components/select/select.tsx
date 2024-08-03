import React, { useState } from "react";
import { SelectItemType } from "./interface";
import RadioSelect from "./components/radioSelect";

export interface SelectProps {
  selectData: SelectItemType[];
  isRadio: boolean;
}

const Select: React.FC<SelectProps> = (props) => {
  const { selectData, isRadio } = props;
  const [isShowSelectContent, setIsShowSelectContent] = useState(true);

  //   const handleCancel = () => {
  //     setIsShowSelectContent(false);
  //   };

  //   const handleVisible = () => {
  //     setIsShowSelectContent(true);
  //   };

  //   const handleComfirm = () => {
  //     console.log("确认");
  //     setIsShowSelectContent(false);
  //   };
  if (isShowSelectContent && isRadio) {
    return <RadioSelect></RadioSelect>;
  }
  return <div>多选</div>;
};
export default Select;
