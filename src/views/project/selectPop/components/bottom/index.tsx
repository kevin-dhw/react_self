import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { SelectPopProps } from "../../selectPop";
import { DataItemType } from "../../interface";

export interface BottomProps extends SelectPopProps {}

const Bottom: React.FC<BottomProps> = (props) => {
  const { rightData, leftData, getCurLeftItem, getCurRightItem } = props;
  const data = rightData?.concat(leftData!);
  const [isAllChosed, setIsAllChosed] = useState("");

  useEffect(() => {
    setIsAllChosed(data?.every((item) => item.isChoose) ? "取消全选" : "全选");
  }, [data]);

  const fillterData = data?.filter((item) => item.isChoose);

  const handleDel = (item: DataItemType) => {
    item.isChoose = !item.isChoose;
    if (item.type === "1") {
      getCurRightItem?.(item, -1);
    } else {
      getCurLeftItem?.(item, -1);
    }
  };

  const handleSelect = () => {
    data?.forEach((item) => {
      if (isAllChosed === "全选") {
        item.isChoose = true;
      } else {
        item.isChoose = false;
      }
      // -1代表不是通过数组去查找改变的 因为数据是集合在底部的
      if (item.type === "1") {
        getCurRightItem?.(item, -1);
      } else {
        getCurLeftItem?.(item, -1);
      }
    });
  };

  return (
    <>
      <div> {fillterData?.length}</div>
      <div>
        {fillterData?.map((item, index) => {
          return (
            <div key={index}>
              {item.name}
              <Button size="small" onClick={() => handleDel(item)}>
                删除
              </Button>
            </div>
          );
        })}
      </div>
      <Button onClick={handleSelect}>{isAllChosed}</Button>
    </>
  );
};
export default Bottom;
