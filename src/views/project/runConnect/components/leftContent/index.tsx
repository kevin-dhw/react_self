import React from "react";
import MyTitle from "../myTitle";
import * as Style from "./style";
import ConnectList from "../connectList";

const LeftContent: React.FC = () => {
  return (
    <Style.LeftContent>
      <MyTitle title="左边title" titleColr="yellow"></MyTitle>
      <Style.MainContent>
        <Style.MainContentTop>
          <ConnectList></ConnectList>
        </Style.MainContentTop>
        <Style.MainContentBottom>
          <ConnectList></ConnectList>
        </Style.MainContentBottom>
      </Style.MainContent>
    </Style.LeftContent>
  );
};

export default LeftContent;
