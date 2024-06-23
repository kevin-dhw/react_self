import React from "react";
import Tab from "./tab/tab";
import "./index.scss";

const Header: React.FC = () => {
  return (
    <div className="echart-header">
      <div>
        <Tab></Tab>
      </div>
      <div>selected</div>
    </div>
  );
};
export default Header;
