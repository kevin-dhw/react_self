import React, { useState, useMemo, useEffect } from "react";
import { Button } from "antd";
import useToDoListStore from "../../stores";
import classNames from "classnames";

const TabContent: React.FC = () => {
  const { tabData, setCurTab } = useToDoListStore();
  const [num, setNum] = useState<number | undefined>(undefined);
  const [statusNum, setStatusNum] = useState<number>(0);

  const handleTabChange = (index: number) => {
    setNum(index);
    setCurTab(index);
  };

  const memoStatusNum = useMemo(() => {
    if (statusNum % 2 === 0) {
      return true;
    }
    return false;
  }, [statusNum]);

  useEffect(() => {
    if (memoStatusNum) {
      console.log("true");
      return;
    }
    console.log("false");
  }, [memoStatusNum]);

  return (
    <div>
      {tabData.length
        ? tabData.map((item, index) => {
            return (
              <div key={index + item.value}>
                <span
                  onClick={() => handleTabChange(index)}
                  className={classNames(
                    "inline-block py-[6px] px-[16px] mb-[14px]",
                    " rounded-md flex-col",
                    typeof num === "number" && num === index
                      ? " bg-red-400"
                      : "bg-red-50 "
                  )}
                >
                  {item.value}
                </span>
              </div>
            );
          })
        : "暂无数据"}
      {memoStatusNum && <div>1111</div>}
      <Button
        onClick={() => {
          setStatusNum((num) => ++num);
        }}
      >
        改变状态 {statusNum}
      </Button>
    </div>
  );
};

export default TabContent;
