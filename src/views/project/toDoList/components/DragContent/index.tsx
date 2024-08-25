import React, { useMemo } from "react";
import DragList from "../DragList";
import useToDoListStore from "../../stores";
import { ListType } from "../../interface";

const DragContent: React.FC = () => {
  const { curTab, dragListData } = useToDoListStore();
  if (curTab === undefined) return;
  const data = dragListData[curTab].list[0];

  const getItemByValue = (val: string, itemData: ListType[]) => {
    let res = {};
    itemData.map((ele) => {
      ele.list.map((subEle) => {
        subEle.doing.map((subEle2) => {
          if (subEle2.value === val) {
            res = subEle2;
            return;
          }
        });
      });
    });
    return Object.keys(res).length ? res : "暂无";
  };

  const value = useMemo(() => {
    return getItemByValue("next2", dragListData);
  }, [dragListData]);
  console.log(value, "1111");

  return (
    <div className=" flex gap-3">
      <div className=" flex-1 h-[400px]">
        <DragList item={data.todo} />
      </div>
      <div className=" flex-1">
        <DragList item={data.doing} />
      </div>
      <div className=" flex-1">
        <DragList item={data.done} />
      </div>
    </div>
  );
};

export default DragContent;
