/*
import React, { useRef } from "react";
import Select from "../practice/components/select";
import { SelectRef } from "../practice/components/select/select";
import { Button } from "antd";
import { selectData } from "./data";
import { SelectItemType } from "../practice/components/select/interface";

const Test: React.FC = () => {
  const selectRef = useRef<SelectRef>(null);

  return (
    <>
      <Button
        onClick={() => {
          selectRef.current?.open();
        }}
      >
        出现
      </Button>
      <Select
        ref={selectRef}
        getSelectedData={(item: SelectItemType | SelectItemType[]) => {
          console.log(item, "item");
        }}
        isRadio={false}
        selectData={selectData}
      />
    </>
  );
};

export default Test;



*/