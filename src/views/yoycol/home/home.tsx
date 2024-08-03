import React from "react";
import TitleContent from "./components/TitleContent";
import PlusTab from "./components/PlusTab";
import LongInput from "./components/LongInput";
import { tabData } from "./data";
import FixContent from "./components/fixContent";

const Home: React.FC = () => {
  return (
    <div>
      <TitleContent />
      <PlusTab tabData={tabData} />
      <div className=" my-[20px]">
        <LongInput />
      </div>
      <FixContent></FixContent>
    </div>
  );
};
export default Home;
