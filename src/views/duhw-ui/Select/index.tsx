import React, { useRef } from "react";
import { Button } from "antd";
import { Select as DuSelect, SelectItemType, SelectRef } from "duhw-ui";
import { selectData } from "./data";

const Test: React.FC = () => {
  const selectRef = useRef<SelectRef>(null);
  return (
    <div className=" h-[100vh]">
      selecttest
      <br />
      <Button
        onClick={() => {
          selectRef.current?.open();
        }}
      >
        出现
      </Button>
      <DuSelect
        selectData={selectData}
        ref={selectRef}
        getSelectedData={(item: SelectItemType | SelectItemType[]) => {
          console.log(item, "item");
        }}
        isRadio={false}
      ></DuSelect>
    </div>
  );
};

export default Test;
