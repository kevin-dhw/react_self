import React from "react";
import * as Style from "./style";
import LeftContent from "./components/leftContent";

const RunConnect: React.FC = () => {
  return (
    <Style.RunConnectContent>
      <Style.LeftContent>
        <LeftContent></LeftContent>
      </Style.LeftContent>
      <Style.MiddleContent>
        <Style.MiddleContentIn></Style.MiddleContentIn>
      </Style.MiddleContent>
      <Style.RightContent>
        <span>right</span>
      </Style.RightContent>
    </Style.RunConnectContent>
  );
};

export default RunConnect;
