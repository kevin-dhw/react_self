import React from "react";
import Layout from "../project/layout";
import { Button } from "antd";

const longTaskDatas = [
  {
    data: [
      {
        title: "哈哈哈",
        titleColor: "blue",
        content: "号都i哦萨迪克",
      },
      {
        title: "哈",
        titleColor: "blue",
        content: "号都i哦萨迪克",
      },
      {
        title: "哈哈",
        content: "号都i哦克",
      },
      {
        title: "哈哈哈",
        content: "号都i哦萨迪克哦萨迪克",
      },
    ],
  },
  {
    data: [
      {
        title: "哈",
        content: "号都i哦",
      },
      {
        title: "哈还哦",
        content: "号都i哦萨",
      },
      {
        title: "哈哈",
        titleColor: "pink",
        content: "号都i哦",
      },
      {
        title: "哈哈哈",
        titleColor: "red",
        content: "号都i哦萨迪",
      },
    ],
  },
];
const btns = [
  {
    content: "删除",
  },
  {
    content: "添加",
  },
  {
    content: "编辑",
  },
];

const Test: React.FC = () => {
  const changeContextNum = () => {
    console.log(111);
  };
  function handleBtn(type: string): void {
    console.log(type);
  }
  return (
    <>
      <button onClick={() => changeContextNum()}>改变</button>
      <Layout
        renderBottom={() => {
          return btns.map((item) => {
            return (
              <div key={item.content}>
                <Button onClick={() => handleBtn(item.content)}>
                  {item.content}
                </Button>
              </div>
            );
          });
        }}
      ></Layout>
    </>
  );
};

export default Test;
