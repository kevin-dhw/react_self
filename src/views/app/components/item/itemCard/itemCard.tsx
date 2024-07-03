import React, { PropsWithChildren } from "react";
import "./itemCard.scss";

export interface ItemCardProps extends PropsWithChildren {
  title?: string;
}

const ItemCard: React.FC<ItemCardProps> = (props) => {
  const { title = "我是默认标题", children } = props;

  return (
    <div className="item-card">
      <div className="item-card-content">
        <div className="item-card-content-title">{title}</div>
        <div className="item-card-content-main">{children && children}</div>
      </div>
    </div>
  );
};
export default ItemCard;
