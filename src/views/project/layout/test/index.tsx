/*

import React, { useRef } from "react";
import Layout from "../project/layout";
import { LongTaskDatasBtn } from "./data";
import { LongTaskItem } from "../project/layout/components/longTask";
import BottomContext from "../project/layout/context/bottomComtext";
import { TopContextProvider } from "../project/layout/context/topContext";
import { layOutRefType } from "../project/layout";

const Test: React.FC = () => {
  const layoutRef = useRef<layOutRefType>(null);
  function del(data: Record<string, any>) {
    console.log(data, "执行删除");
  }
  function add(data: Record<string, any>) {
    console.log(data, "执行编辑");
  }
  function edit(data: Record<string, any>) {
    console.log(data, "执行编辑");
  }
  function handleBtn(type: string, item: LongTaskItem[]): void {
    if (type === "del") {
      del(item);
    } else if (type === "add") {
      add(item);
    } else if (type === "edit") {
      edit(item);
    }
  }

  function handleTittle() {
    console.log("点击tittle");
  }

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
          <Layout
            ref={layoutRef}
            style={{ marginTop: "20px", backgroundColor: "pink" }}
            longTaskDatas={LongTaskDatasBtn}
            handleBtn={handleBtn}
            titleContent={() => {
              return (
                <div onClick={() => handleTittle()}>
                  我是tittle右边的内容
                  <br />
                </div>
              );
            }}
          ></Layout>
        </BottomContext.Provider>
      </TopContextProvider>
    </>
  );
};

export default Test;


*/
