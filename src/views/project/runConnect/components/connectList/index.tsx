import React from "react";
import * as Style from "./style";

const itemList = [
  {
    name: "小李",
    age: 20,
  },
  {
    name: "小李",
    age: 20,
  },
  {
    name: "小李",
    age: 20,
  },
  {
    name: "小李",
    age: 20,
  },
  {
    name: "小李",
    age: 20,
  },
  {
    name: "小李",
    age: 20,
  },
];

const ConnectList: React.FC = () => {
  return (
    <Style.ConnectList>
      <Style.TopContent>
        <Style.TopContentIcon>icon</Style.TopContentIcon>
        <Style.TopContentMiddle>哈哈哈</Style.TopContentMiddle>
        <Style.TopContentRight>right</Style.TopContentRight>
      </Style.TopContent>
      <Style.BottomContent>
        {itemList?.length &&
          itemList.map((item, index) => {
            return (
              <Style.ConenetcItem key={index}>
                <Style.ItemIcon>icon</Style.ItemIcon>
                <Style.ItemName>{item.name}</Style.ItemName>
                <Style.ItemAge>{item.age}</Style.ItemAge>
              </Style.ConenetcItem>
            );
          })}
      </Style.BottomContent>
    </Style.ConnectList>
  );
};

export default ConnectList;
