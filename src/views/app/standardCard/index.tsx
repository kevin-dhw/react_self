import React from "react";
// import Header from "../components/header";
import SearchInput from "../components/Search";
import type { SelectItemType } from "./interface";
import SelectChapter from "../components/selectChapter";

const StandardCard: React.FC = () => {
  const getSearchInputValue = (value: string) => {
    console.log(value, "value out");
  };
  const getSelectValue = (value: SelectItemType) => {
    console.log(value);
  };
  return (
    <div>
      {/* <Header title="我是标题">
        <div>11111</div>
      </Header> */}
      <div className=" px-4">
        <SearchInput
          getSearchInputValue={getSearchInputValue}
          getSelectValue={getSelectValue}
        ></SearchInput>
        <div className=" pt-1">
          <SelectChapter></SelectChapter>
          filter
        </div>
      </div>
    </div>
  );
};
export default StandardCard;
