import React, { useState, ChangeEvent } from "react";
import * as Style from "./style";
import { Input } from "antd";

interface SearchProps {
  getValue: (val: string) => void;
}

const Search: React.FC<SearchProps> = (props) => {
  const { getValue } = props;
  const [value, setValue] = useState("");

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    getValue(value);
  };
  return (
    <>
      <Style.SearchTitle>输入搜索内容：</Style.SearchTitle>
      <Input onChange={(e) => handleValue(e)} style={{ width: "200px" }} />
    </>
  );
};
export default Search;
