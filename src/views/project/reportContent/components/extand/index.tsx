import React, { useState } from "react";
import { ReportContentProps } from "../../reportContent";
import Item from "../item";

export interface ExtandProps
  extends Pick<ReportContentProps, "mainData" | "getEditValue"> {}

const Extand: React.FC<ExtandProps> = (props) => {
  const { mainData, getEditValue } = props;
  const fillArr = ["收起"].concat(new Array(mainData.length - 1).fill("展开"));
  const [arr, setArr] = useState(fillArr);

  const handleShow = (idx: number) => {
    setArr((arr) => {
      const result = [...arr];
      result.map((ele, index) => {
        if (idx !== index) {
          result[index] = "展开";
        } else {
          if (ele === "收起") {
            result[index] = "展开";
          } else {
            result[index] = "收起";
          }
        }
      });
      return result;
    });
  };
  return (
    <>
      {mainData.length &&
        mainData.map((item, index) => {
          return (
            <div key={index} className=" m-2">
              <div className=" bg-gray-100" onClick={() => handleShow(index)}>
                <div className=" flex justify-between">
                  <div>{item.title}</div>
                  <div>{arr[index]}</div>
                </div>
              </div>
              {arr[index] === "收起" && (
                <div>
                  {item.list.length &&
                    item.list.map((ele, idx) => {
                      return (
                        <div key={idx}>
                          <Item itemData={ele} getEditValue={getEditValue} />
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          );
        })}
    </>
  );
};

export default Extand;
