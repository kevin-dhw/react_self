import React, { PropsWithChildren, CSSProperties, useMemo } from "react";
import classNames from "classnames";
import useSpaceContext from "./hooks/useSpaceContext";
import "./index.scss";

export type SizeType = "small" | "middle" | "large";
interface SpaceProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
  size?: SizeType | [SizeType, SizeType];
  direction?: "horizontal" | "vertical";
  align?: "start" | "end" | "center" | "baseline";
  split?: React.ReactNode;
  wrap?: boolean;
}

const sizeMap = {
  small: 8,
  middle: 16,
  large: 24,
};

function getNumberSize(size: SizeType) {
  return typeof size === "string" ? sizeMap[size] : size || 0;
}

const Space: React.FC<SpaceProps> = (props) => {
  const {
    className,
    style,
    children,
    size = "small",
    direction = "horizontal",
    align = "center",
    split,
    wrap = true,
    ...otherProps
  } = props;
  const { str, num } = useSpaceContext();

  const childNodes = React.Children.toArray(children);
  const nodes = childNodes.map((item, idx) => {
    return (
      <div key={idx}>
        <div className="space-item">{item}</div>
        {idx < childNodes.length - 1 && split && <>{split}</>}
      </div>
    );
  });

  const otherStyle: CSSProperties = {};
  const [horizontalSize, verticalSize] = useMemo(
    () =>
      (Array.isArray(size) ? size : ([size, size] as [SizeType, SizeType])).map(
        (item) => {
          return getNumberSize(item);
        }
      ),
    [size]
  );
  otherStyle.columnGap = horizontalSize;
  otherStyle.rowGap = verticalSize;
  if (wrap) {
    otherStyle.flexWrap = "wrap";
  }

  const cn = classNames(
    "space",
    `space-${direction}`,
    { [`space-align-${align}`]: align },
    className
  );
  return (
    <>
      <div className={cn} style={{ ...style, ...otherStyle }} {...otherProps}>
        {nodes}
      </div>
      {str}
      {num}
    </>
  );
};
export default Space;
