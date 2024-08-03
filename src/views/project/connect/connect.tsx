import React, { useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export interface ConnectProps {}
const data = [
  {
    id: "1",
    value: "哈哈",
    children: [
      {
        id: "1-1",
        value: "哈哈哈哈",
        children: [
          { id: "1-1-1", value: "哈哈哈哈", children: [] },
          { id: "1-2-2", value: "哈哈哈", children: [] },
        ],
      },
      { id: "1-2", value: "哈哈哈", children: [] },
    ],
  },
  {
    id: "2",
    value: "哈就开始空间",
    children: [
      { id: "2-1", value: "案件哈吉奥", children: [] },
      {
        id: "2-2",
        value: "哈急啊急啊",
        children: [
          { id: "2-1-1", value: "哈哈哈哈", children: [] },
          { id: "2-2-2", value: "哈哈哈", children: [] },
        ],
      },
    ],
  },
];

function handleData(data: any) {
  const dfs = (data: any) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].children.length) {
        data[i].state = "展开";
        dfs(data[i].children);
      } else {
        data[i].state = "";
      }
    }
  };
  dfs(data);
  return data;
}
console.log(handleData(data), "111");

const Connect: React.FC<ConnectProps> = () => {
  const navigate = useNavigate();
  const [resData, setResData] = useState<any[]>(handleData(data));
  const handleBtn = () => {
    navigate("/connectDetail", { state: { name: "jack", age: 18 } });
  };

  const handleState1 = (index: number) => {
    console.log(resData[index], "11");

    // const newArr = resData.map((item, index) => {

    // })
    // setResData((resData: any) => {
    //   const arr = [...resData];
    //   let state = "";
    //   if (arr[index].state === "展开") {
    //     state = "收起";
    //   } else {
    //     state = "展开";
    //   }
    //   let newArr = resData.map(item => {

    //   })
    //   return arr;
    // });
    // console.log(index, resData);
  };
  const handleState2 = (index: number, idx: number) => {
    console.log(index, idx);
  };
  const handleToggle3 = (item: any) => {
    console.log(item, "item");
  };

  return (
    <div>
      <Button onClick={handleBtn}>跳转</Button>
      <div className=" w-[300px] h-[500px] rounded-lg border-[2px] m-2">
        {resData?.map((item, index) => {
          return (
            <div key={index}>
              <div className=" flex">
                <div className=" flex-1">{item.value}</div>
                {item.children?.length !== 0 && (
                  <div onClick={() => handleState1(index)}>{item.state}</div>
                )}
              </div>
              {item.state === "展开" &&
                Array.isArray(item.children) &&
                item.children?.map((ele: any, idx: number) => (
                  <div key={idx}>
                    <div className=" flex ml-[20px]">
                      <div className=" flex-1">{ele.value}</div>
                      {ele.children?.length !== 0 && (
                        <div onClick={() => handleState2(index, idx)}>
                          {ele.state}
                        </div>
                      )}
                    </div>
                    {ele.state === "展开" &&
                      Array.isArray(ele.children) &&
                      ele.children.map((subEle: any, subIdx: number) => (
                        <div key={subIdx}>
                          <div className=" flex ml-[40px]">
                            <div className=" flex-1">{subEle.value}</div>
                            {subEle.children?.length !== 0 && (
                              <div onClick={() => handleToggle3(subEle)}>
                                {subEle.state}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connect;
