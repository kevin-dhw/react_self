// import React, { useState } from "react";
// import { Button } from "antd";
// import ReportContent, {
//   ListType,
//   SelectContextProvider,
// } from "../project/reportContent";
// import { mainData } from "./data";
// import { getObjValue } from "./utils";

// const Test: React.FC = () => {
//   const [data, setData] = useState(mainData);
//   const [objValue, setObjValue] = useState<Record<string, any>>({});

//   const getEditValue = (item: ListType) => {
//     setData((data) => {
//       const tempData = [...data];
//       tempData.forEach((ite) => {
//         ite.list.forEach((ele) => {
//           if (ele.field === item.field) {
//             ele = item;
//           }
//         });
//       });
//       setObjValue(getObjValue(tempData));
//       return tempData;
//     });
//   };

//   const getValue = () => {
//     console.log(objValue);
//   };
//   return (
//     <>
//       <Button onClick={() => getValue()}>获取值</Button>
//       <SelectContextProvider selectData={{ num: 1000 }}>
//         <ReportContent
//           mainData={data}
//           getEditValue={getEditValue}
//         ></ReportContent>
//       </SelectContextProvider>
//     </>
//   );
// };

// export default Test;
