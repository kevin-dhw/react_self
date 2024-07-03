import React from "react";
import Extand from "./components/extand";
import { MainDataType, ListType } from "./interface";

export interface ReportContentProps {
  mainData: MainDataType[];
  getEditValue?: (item: ListType) => void;
}

const ReportContent: React.FC<ReportContentProps> = (props) => {
  return (
    <>
      <Extand {...props}></Extand>
    </>
  );
};

export default ReportContent;
