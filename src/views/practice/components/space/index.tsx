import React, {
  HTMLAttributes,
  CSSProperties,
  useMemo,
  useContext,
} from "react";
import classNames from "classnames";
import { SpaceContext } from "./context";
import "./index.scss";

export type SizeType = "small" | "middle" | "large" | number | undefined;
export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: CSSProperties;
  size?: SizeType | [SizeType, SizeType];
  direction?: "horizontal" | "vertical";
  align?: "start" | "end" | "center" | "baseline";
  split?: React.ReactNode;
  wrap?: boolean;
}

const Space: React.FC<SpaceProps> = (props) => {
  const { space } = useContext(SpaceContext);
  const {
    className,
    style,
    size = space?.size || "small",
    direction = "horizontal",
    align,
    split,
    wrap = false,
    ...otherProps
  } = props;

  const childNodes = React.Children.toArray(props.children);
  const nodes = childNodes.map((child: any, i: number) => {
    const key = (child && child.key) || `space-item-${i}`;
    return (
      <>
        <div className="space-item" key={key}>
          {child}
        </div>
        {i < childNodes.length && split && (
          <span className={`${className}-split`} style={style}>
            {split}
          </span>
        )}
      </>
    );
  });

  const mergedAlign =
    direction === "horizontal" && align === undefined ? "center" : align;
  const cn = classNames(
    "space",
    `space-${direction}`,
    { [`space-align-${mergedAlign}`]: mergedAlign },
    className
  );

  const spaceSize = {
    small: 8,
    middle: 16,
    large: 24,
  };
  function getNumberSize(size: SizeType) {
    return typeof size === "string" ? spaceSize[size] : size || 0;
  }

  const otherStyle: CSSProperties = {};
  const [horizontalSize, verticalSize] = useMemo(
    () =>
      ((Array.isArray(size) ? size : [size, size]) as [SizeType, SizeType]).map(
        (item) => getNumberSize(item)
      ),
    [size]
  );
  otherStyle.columnGap = horizontalSize;
  otherStyle.rowGap = verticalSize;

  if (wrap) {
    otherStyle.flexWrap = "wrap";
  }

  return (
    <div className={cn} style={{ ...style, ...otherStyle }} {...otherProps}>
      {nodes}
    </div>
  );
};

export default Space;
