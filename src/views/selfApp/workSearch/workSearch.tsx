import React, { useRef, useState } from "react";
import Header from "./components/header";
import Search from "./components/search";
import SearchDialog, { SearchDialogRef } from "./components/searchDialog";
// import { Button } from "antd";

const WorkSearch: React.FC = () => {
  const searchDialogRef = useRef<SearchDialogRef>(null);
  const [obj, setObj] = useState({ name: "jack", age: "20" });

  return (
    <div>
      <Header
        handleChoose={() => {
          setObj({
            name: "jack",
            age: "30",
          });
          setTimeout(() => {
            searchDialogRef.current?.open(obj, (data) => {
              console.log(data, "1111");
            });
          });
        }}
      ></Header>
      <Search
        handleSearch={(value) => {
          console.log(value, "value");
        }}
      ></Search>
      <SearchDialog ref={searchDialogRef}></SearchDialog>
      {/* <Button
        onClick={() => {
          setObj({
            name: "jack",
            age: "30",
          });
        }}
      >
        改变
      </Button> */}
    </div>
  );
};

export default WorkSearch;
