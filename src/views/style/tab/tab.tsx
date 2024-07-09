import React, { useState } from "react";
import * as Style from "./style";
import { TabItemType } from "./interface";

interface TabProps {
  tabsData: TabItemType[];
}

const Tab: React.FC<TabProps> = (props) => {
  const { tabsData } = props;
  const [num, setNum] = useState(0);

  const handleClick = (index: number) => {
    setNum(index);
  };
  return (
    <>
      <Style.Tab>
        {tabsData.map((item, index) => {
          return (
            <Style.TabItem
              onClick={() => handleClick(index)}
              key={index}
              $bgColor={num === index ? "red" : ""}
            >
              <Style.Tab_Item $color={num === index ? "white" : ""}>
                {item.label}
              </Style.Tab_Item>
            </Style.TabItem>
          );
        })}
      </Style.Tab>
    </>
  );
};

export default Tab;
