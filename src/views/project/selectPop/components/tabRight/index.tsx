import React, { useState, useEffect } from "react";
import { TabProps } from "../tab";
import { Button } from "antd";
import classNames from "classnames";

interface TabRightProps extends TabProps {}

const TabRight: React.FC<TabRightProps> = (props) => {
  const { rightData, getCurRightItem } = props;
  const [isAllChosed, setIsAllChosed] = useState("");

  useEffect(() => {
    setIsAllChosed(
      rightData?.every((item) => item.isChoose) ? "取消全选" : "全选"
    );
  }, [rightData]);

  const handleAllChosed = () => {
    rightData?.forEach((item, index) => {
      if (isAllChosed === "取消全选") {
        item.isChoose = false;
        setIsAllChosed("取消全选");
      } else {
        item.isChoose = true;
        setIsAllChosed("全选");
      }
      getCurRightItem?.(item, index);
    });
  };

  return (
    <div>
      <div className=" flex justify-around mt-4">
        {rightData?.length &&
          rightData.map((item, index) => {
            return (
              <div
                className={classNames(
                  " px-4",
                  item.isChoose ? "bg-blue-300 text-white" : ""
                )}
                key={index}
                onClick={() => {
                  item.isChoose = !item.isChoose;
                  getCurRightItem?.(item, index);
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

export default TabRight;
