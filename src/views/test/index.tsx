import React from "react";
// import ToDoList from "../project/toDoList";
import Editor from "../lowcode/editor85";

// export interface ObjProps<NameType extends string = any> {
//   name: NameType;
// }
// const obj: ObjProps<string> = { name: "jack" };
// console.log(obj);

const Test: React.FC = () => {
  return (
    <div className=" h-[100vh]">
      {/* <ToDoList /> */}
      <Editor />
    </div>
  );
};

export default Test;
