/*

import React from "react";
import Layout from "../project/layout";
import { Button } from "antd";
import { btns, longTaskDatas } from "./data";

const Test: React.FC = () => {
  function del(id: number) {
    console.log(id, "执行删除");
  }
  function add(data: Record<string, any>) {
    console.log(data, "执行编辑");
  }
  function edit(data: Record<string, any>) {
    console.log(data, "执行编辑");
  }
  function handleBtn(type: string): void {
    if (type === "删除") {
      del(1);
    } else if (type === "添加") {
      add({ name: "jack", age: 18 });
    } else if (type === "编辑") {
      edit({ name: "jack", age: 18 });
    }
  }

  function handleTittle() {
    console.log("点击tittle");
  }
  return (
    <>
      <Layout
        style={{ marginTop: "20px", backgroundColor: "pink" }}
        longTaskDatas={longTaskDatas}
        titleContent={() => {
          return (
            <div onClick={() => handleTittle()}>
              我是tittle右边的内容
              <br />
            </div>
          );
        }}
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

*/