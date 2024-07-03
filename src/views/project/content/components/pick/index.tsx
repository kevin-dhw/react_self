import React from "react";
import { ContentProps } from "../../content";
import usePickContext from "../../hooks/usePickContext";

export interface PickProps
  extends Pick<ContentProps, "pickData" | "getPickValue"> {}

const Pick: React.FC<PickProps> = (props) => {
  const { pickData, getPickValue } = props;
  const { num } = usePickContext();

  return (
    <>
      {pickData.length &&
        pickData.map((item, index) => {
          return (
            <div key={index} onClick={() => getPickValue(item)}>
              {item.pickVabel}
            </div>
          );
        })}
      {num}
    </>
  );
};
export default Pick;
