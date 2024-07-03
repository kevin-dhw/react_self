import React, { useState, ChangeEvent, useRef } from "react";
import { Input, Button } from "antd";
import { ExtandProps } from "../extand";
import { ListType, OptionItemType } from "../../interface";
import Select, { SelectRef } from "../select";

export interface ItemProps extends Pick<ExtandProps, "getEditValue"> {
  itemData: ListType;
}

const Item: React.FC<ItemProps> = (props) => {
  const { itemData, getEditValue } = props;
  const [isEdit, setIsEdit] = useState("notEdit");
  const [value, setValue] = useState(itemData.value);
  const selectRef = useRef<SelectRef>(null);

  const renderEditContent = () => {
    if (isEdit === "edit") {
      if (itemData.type === "input") {
        return <Input value={value} onChange={(e) => handleChange(e)} />;
      }
    } else {
      return <>{itemData.value}</>;
    }
  };

  const handleEdit = () => {
    // 处理input类型 弹出的是inout框
    if (itemData.type === "input") {
      if (isEdit === "edit") {
        setIsEdit("notEdit");
      } else {
        setIsEdit("edit");
      }
      // 处理select
    } else if (itemData.type === "select") {
      selectRef.current?.handleIsShow?.(itemData.option!);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const confirmEdit = (itemData: ListType) => {
    setIsEdit("notEdit");
    itemData.value = value;
    getEditValue?.(itemData);
  };

  const getSelectValue = (item: OptionItemType) => {
    itemData.value = item.value;
    getEditValue?.(itemData);
  };
  return (
    <>
      <div className=" flex justify-between my-2 border-b-2">
        <div>{itemData.subTitle}</div>
        <div className=" flex">
          <div className=" mb-2">{renderEditContent()}</div>
          {isEdit === "edit" && (
            <Button onClick={() => confirmEdit(itemData)}>确定</Button>
          )}
          <span onClick={() => handleEdit()} className=" ml-2">
            {itemData.type !== "disable" && <>&</>}
          </span>
        </div>
      </div>
      <Select getSelectValue={getSelectValue} ref={selectRef}></Select>
    </>
  );
};
export default Item;
