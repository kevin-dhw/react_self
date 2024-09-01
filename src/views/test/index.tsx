import React, { useRef } from "react";
import { Button } from "antd";
import { Select as DuSelect, SelectItemType, SelectRef } from "duhw-ui";
import { selectData } from "./data";

// import Editor from "../lowcode/editor85";

// export interface ObjProps<NameType extends string = any> {
//   name: NameType;
// }
// const obj: ObjProps<string> = { name: "jack" };
// console.log(obj);

const Test: React.FC = () => {
  const selectRef = useRef<SelectRef>(null);
  return (
    <div className=" h-[100vh]">
      {/* <Editor /> */}
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
        isRadio={true}
      ></DuSelect>
    </div>
  );
};

export default Test;
