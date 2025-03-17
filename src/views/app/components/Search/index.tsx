import React, { useState, useRef } from "react";
import { Input } from "antd";
import Select, { SelectRef } from "../select";
import type { SelectItemType } from "../../standardCard/interface";

export interface SearchInputProps {
  getSearchInputValue?: (value: string) => void;
  getSelectValue?: (value: SelectItemType) => void;
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
  const { getSearchInputValue, getSelectValue } = props;
  const [inputValue, setInputValue] = useState("");
  const selectRef = useRef<SelectRef>(null);

  return (
    <div className=" w-full flex justify-between items-center pt-3">
      <div style={{ width: "86%" }} className="">
        <Input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
          suffix={
            <div
              onClick={() => {
                getSearchInputValue?.(inputValue);
              }}
            >
              搜索
            </div>
          }
          placeholder="请输入"
        />
      </div>
      <div
        onClick={() => {
          selectRef.current?.handleHiddenSelect?.();
        }}
      >
        下拉
      </div>
      {/* 下拉组件 */}
      <Select ref={selectRef} getSelectValue={getSelectValue}></Select>
    </div>
  );
};

export default SearchInput;
