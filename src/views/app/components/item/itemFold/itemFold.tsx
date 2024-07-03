import React, { useState, PropsWithChildren } from "react";
import "./itemFold.scss";

interface ItemFoldProps extends PropsWithChildren {
  isShowContent?: boolean;
}

const ItemFold: React.FC<ItemFoldProps> = (props) => {
  const { children, isShowContent = false } = props;

  const [isShowContentState, setIsShowContent] =
    useState<boolean>(isShowContent);

  type StateType = "收起" | "展开";
  let stateValue: StateType;
  if (isShowContentState) {
    stateValue = "收起";
  } else {
    stateValue = "展开";
  }
  const [state, setState] = useState<StateType>(stateValue);

  const handleState = () => {
    if (state === "收起") {
      setState("展开");
      setIsShowContent(false);
    } else {
      setState("收起");
      setIsShowContent(true);
    }
  };
  return (
    <div className="item-fold">
      <div className="item-fold-title">
        <span>基本信息</span>
        <span onClick={handleState}>{state}</span>
      </div>
      {isShowContentState && children}
    </div>
  );
};
export default ItemFold;
