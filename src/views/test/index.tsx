import React from "react";
import { Tab, Search, TabTaiWind } from "duhw-ui";
// import TabTaiWind from "../TabTaiwind";

const Test: React.FC = () => {
  const tabsData = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
  ];
  return (
    <>
      <Tab tabsData={tabsData}></Tab>
      <br />
      <Search
        getValue={(val) => {
          console.log(val);
        }}
      ></Search>
      <br />
      {/* <TabTaiWind tabsData={tabsData} /> */}
      <TabTaiWind tabsData={tabsData}></TabTaiWind>
    </>
  );
};

export default Test;
