import React, { useRef, useState, useEffect } from "react";
import Header from "./components/header";
import Search from "./components/search";
import SearchDialog, { SearchDialogRef } from "./components/searchDialog";
import SearchTitle from "./components/searchTitle";
// import { Button } from "antd";

const WorkSearch: React.FC = () => {
  const searchDialogRef = useRef<SearchDialogRef>(null);
  const [recieveData, setReieveData] = useState<any[]>();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const params: Record<string, any> = {
      inputValue,
    };
    recieveData?.forEach((item) => {
      for (const k in item) {
        params[k] = item[k];
      }
    });
  }, [recieveData, inputValue]);

  const getData = () => {
    const obj: Record<string, any> = {};
    recieveData?.forEach((item) => {
      for (const k in item) {
        obj[k] = item[k];
      }
    });
    return obj;
  };

  return (
    <div>
      <Header
        handleChoose={() => {
          const data = recieveData?.length
            ? getData()
            : {
                issue: ["0"],
                sorce: ["1", "2"],
              };

          searchDialogRef.current?.open(data, (data) => {
            setReieveData(data as any[]);
          });
        }}
      ></Header>
      <Search
        handleSearch={(value) => {
          setInputValue(value);
        }}
      ></Search>
      <SearchDialog ref={searchDialogRef}></SearchDialog>
      <SearchTitle></SearchTitle>
    </div>
  );
};

export default WorkSearch;
