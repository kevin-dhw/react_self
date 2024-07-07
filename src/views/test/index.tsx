import React, { useState } from "react";
import SelectPop, { DataItemType } from "../project/selectPop";
import { tabList, rightData, leftData } from "./data";

const Test: React.FC = () => {
  const [curRightData, setCurRightData] = useState(rightData);
  const [curLeftData, setCurLeftData] = useState(leftData);

  return (
    <>
      <SelectPop
        getCurRightItem={(item: DataItemType, index: number) => {
          setCurRightData((leftData) => {
            const result = [...leftData];
            if (index === -1) {
              result.forEach((ele, idx) => {
                if (ele.name === item.name) {
                  result[idx] = item;
                }
              });
            } else {
              result[index] = item;
            }
            return result;
          });
        }}
        getCurLeftItem={(item: DataItemType, index: number) => {
          setCurLeftData((rightData) => {
            const result = [...rightData];
            if (index === -1) {
              result.forEach((ele, idx) => {
                if (ele.name === item.name) {
                  result[idx] = item;
                }
              });
            } else {
              result[index] = item;
            }
            return result;
          });
        }}
        tabList={tabList}
        leftData={curLeftData}
        rightData={curRightData}
      />
    </>
  );
};
// if (index === -1) {
//   setCurLeftData((leftData) => {
//     const result = [...leftData];
//     // const idx = result.findIndex((ele) => ele.name === item.name);
//     result.forEach((ele) => {
//       if (ele.name === item.name) {
//         ele = item;
//       }
//     });
//     return result;
//   });
// } else {
//   setCurLeftData((leftData) => {
//     const result = [...leftData];
//     result[index] = item;
//     return result;
//   });
// }

export default Test;
