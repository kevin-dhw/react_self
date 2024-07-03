/*
import React, { useState, useEffect } from "react";
import Content from "../project/content";
import type { TabType, PickType, BtnType } from "../project/content";
import { tabData, pickData, mainData } from "./data";
import PickContext from "../project/content/context";

const Test: React.FC = () => {
  const [tabValue, setTabValue] = useState<string>("0");

  useEffect(() => {
    // setTabValue("0");
    console.log("setTabValue");
  }, [tabValue]);

  return (
    <>
      <PickContext.Provider value={{ num: 1000 }}>
        <Content
          tabData={tabData}
          pickData={pickData}
          mainData={mainData}
          isShowPick={tabValue === "0"}
          getTabValue={(item: TabType) => {
            setTabValue(item.value);
          }}
          getPickValue={(item: PickType) => {
            console.log(item, "123");
          }}
          handleBtn={(item: BtnType) => {
            console.log(item, "btn");
          }}
        ></Content>
      </PickContext.Provider>
    </>
  );
};

export default Test;

*/
