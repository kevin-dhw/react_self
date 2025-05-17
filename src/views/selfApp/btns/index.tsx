import React from "react";
import AllBtns from "./components/btns";
import deviceImg from "./components/btns/img/device.png";
import homeImg from "./components/btns/img/home.png";
import peopleImg from "./components/btns/img/people.png";

const Btns: React.FC = () => {
  const btns = [
    {
      type: "cancel",
      text: "取消",
      icon: deviceImg,
    },
    {
      type: "confirm",
      text: "确定",
      icon: homeImg,
    },
    {
      type: "send",
      text: "上报",
      icon: peopleImg,
    },
    {
      type: "pulish",
      text: "发布",
      icon: peopleImg,
    },
    // {
    //   type: "complete",
    //   text: "完成",
    //   icon: peopleImg,
    // },
  ];
  console.log(btns);
  const handleClickBtn = (text: string) => {
    console.log(text, "text11");
  };

  return (
    <div className=" flex flex-col h-full">
      <div className=" bg-slate-400 flex-1">main</div>
      <div className=" gap-4">
        <AllBtns btns={btns} handleClickBtn={handleClickBtn}></AllBtns>
      </div>
    </div>
  );
};

export default Btns;
