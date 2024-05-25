import RightContent from "./components/rightContent";
import LeftContent from "./components/leftContent";
import TopContent from "./components/topContent";

export interface TodoListProps {
  curNum?: number;
  changeCurNum?: (num: number) => void;
}

const TodoList = (props: TodoListProps) => {
  return (
    <>
      {/* 123 */}
      <TopContent></TopContent>
      <div className=" flex">
        <LeftContent {...props} />
        <RightContent />
      </div>
    </>
  );
};
export default TodoList;
