import React from "react";
import { Select as DuSelect } from "duhw-ui";
import { selectData } from "./data";

/*
 <Select
  ref={selectRef}
  getSelectedData={(item: SelectItemType | SelectItemType[]) => {
    console.log(item, "item");
  }}
  isRadio={false}
  selectData={selectData}
/>
*/

const Select: React.FC = () => {
  return (
    <div>
      select222
      <br />
      <DuSelect selectData={selectData}></DuSelect>
    </div>
  );
};

export default Select;
