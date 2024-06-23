/*

import React, { useRef } from "react";
import Layout from "../project/layout";
import { Button } from "antd";
import { btns, longTaskDatas } from "./data";
import BottomContext from "../project/layout/context/bottomComtext";
import { TopContextProvider } from "../project/layout/context/topContext";
import { layOutRefType } from "../project/layout";

const Test: React.FC = () => {
  const layoutRef = useRef<layOutRefType>(null);
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

  const handleOpen = () => {
    console.log(11111);
    layoutRef.current?.open({ name: "jack" });
  };
  // function getDetailData(item: LongTaskItem[]) {
  //   setDetailData(item);
  //   console.log(item);
  // }
  const bottomData = { name: "jack", age: 20 };
  return (
    <>
      <TopContextProvider
        topData={{
          title: "我是最外面的标题数据",
          subTitle: "我是最外面的副标题数据",
        }}
      >
        <BottomContext.Provider value={{ bottomData }}>
          <button onClick={handleOpen}>执行打开</button>
          <Layout
            ref={layoutRef}
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
        </BottomContext.Provider>
      </TopContextProvider>
    </>
  );
};

export default Test;


*/
