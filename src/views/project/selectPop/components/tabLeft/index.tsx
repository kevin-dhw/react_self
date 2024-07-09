import React, { useState, useEffect } from "react";
import { TabProps } from "../tab";
import { Button } from "antd";
import classNames from "classnames";

interface TabLeftProps extends TabProps {}

const TabLeft: React.FC<TabLeftProps> = (props) => {
  const { leftData, getCurLeftItem } = props;
  const [isAllChosed, setIsAllChosed] = useState("");

  useEffect(() => {
    setIsAllChosed(
      leftData?.every((item) => item.isChoose) ? "取消全选" : "全选"
    );
  }, [leftData]);

  const handleAllChosed = () => {
    leftData?.forEach((item, index) => {
      if (isAllChosed === "全选") {
        item.isChoose = true;
        setIsAllChosed("取消全选");
      } else {
        item.isChoose = false;
        setIsAllChosed("全选");
      }
      getCurLeftItem?.(item, index);
    });
  };

  return (
    <div>
      <div className=" flex justify-around mt-4">
        {leftData?.length &&
          leftData.map((item, index) => {
            return (
              <div
                className={classNames(
                  "  px-4",
                  item.isChoose ? "bg-blue-300 text-white" : ""
                )}
                key={index}
                onClick={() => {
                  item.isChoose = !item.isChoose;
                  getCurLeftItem?.(item, index);
                }}
              >
                {item.name}
              </div>
            );
          })}
      </div>
      <Button onClick={handleAllChosed} size="small">
        {isAllChosed}
      </Button>
    </div>
  );
};

export default TabLeft;
