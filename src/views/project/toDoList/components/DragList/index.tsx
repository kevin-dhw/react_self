import React from "react";
import { InnerItemTYpe } from "../../interface";

interface DragListProps {
  item?: InnerItemTYpe[];
}

function fn(num: number) {
  return num > 3 ?? false;
}
console.log(fn(4));

const DragList: React.FC<DragListProps> = (props) => {
  const { item } = props;

  return (
    <div className=" h-full rounded-md border-[1px] border-black">
      {item!.length > 0
        ? item?.map((ele, idx) => {
            return (
              <div key={idx + ele.value} className=" p-[6px]">
                <div className=" bg-red-200 rounded-sm p-[6px] px-[16px]">
                  {ele.value}
                </div>
              </div>
            );
          })
        : "暂无数据"}
    </div>
  );
};

export default DragList;
