import { useTodoListStore } from "../../../../store/atodoList";
import { TodoListProps } from "..";
// import className from "className";

interface LeftContentProps extends TodoListProps {}

const LeftContent = (props: LeftContentProps) => {
  const { leftList } = useTodoListStore();
  const { curNum, changeCurNum } = props;
  console.log(curNum);

  /**
   * 
   * {className(
          " m-auto my-4 p-10 rounded-md ",
          index === curNum ? "bg-pink-300" : "bg-purple-400"
       )}
        广发7-10：5.47 4.04 6.56
        南方7-10：5.27 3.67 6.83
        西部： 5.22 3.85 4.75
       东方：6.41 2.49 7.14
       长盛：6.46
       广发双：6.28 2.54 3.71
       中加：5.71 3.58 5.22
   */

  return (
    <div className=" w-60 border-black-200">
      LeftContent
      <br />
      <div className=" flex">
        {leftList &&
          leftList.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  changeCurNum?.(index);
                }}
                className=" m-auto my-4 p-10 rounded-md"
              >
                {item.content}
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default LeftContent;
