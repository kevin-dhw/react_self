import React from "react";
import Item from "./components/item";
import Gap from "./components/gap";
import useToDoListStore from "../../stores";

const List: React.FC = () => {
  const { list } = useToDoListStore();
  return (
    <div className=" p-[14px] pt-[0px] h-full overflow-auto">
      {list.length ? (
        list.map((item, index) => {
          return (
            <div key={index}>
              <Gap id={item.id} />
              <Item item={item} />
            </div>
          );
        })
      ) : (
        <div className=" pt-[10px]">暂无数据</div>
      )}
      <Gap />
    </div>
  );
};
export default List;
