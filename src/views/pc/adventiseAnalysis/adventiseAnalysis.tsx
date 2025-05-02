import React from "react";
import Tab from "./components/tab";
import MainContent from "./components/mainContent";

const AdventiseAnalysis: React.FC = () => {
  return (
    <div className=" flex h-full">
      <div className=" w-[20%] h-full">
        <Tab></Tab>
      </div>
      <div className=" flex-1">
        <MainContent></MainContent>
      </div>
    </div>
  );
};

export default AdventiseAnalysis;
