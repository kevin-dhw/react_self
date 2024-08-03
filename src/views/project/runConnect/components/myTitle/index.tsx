import React from "react";
import * as Style from "./style";

export interface RunConnectProps {
  title?: string;
  titleColr?: string;
}

const MyTitle: React.FC<RunConnectProps> = (props) => {
  const { title, titleColr } = props;
  return (
    <Style.MyTitleContent>
      <Style.RightIcon>
        <Style.RightIconIn></Style.RightIconIn>
      </Style.RightIcon>
      <Style.MiddleLine></Style.MiddleLine>
      <Style.RightWord $color={titleColr}>{title}</Style.RightWord>
    </Style.MyTitleContent>
  );
};

export default MyTitle;
