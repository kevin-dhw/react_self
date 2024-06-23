import { ColumnType } from "antd/lib/table";
import isEqual from "lodash/isEqual";
import omit from "lodash/omit";
import React from "react";

export function memoEqual<T extends Record<string, any>>(
  objA: T,
  objB: T,
  options: {
    omit?: (keyof T)[];
  } = {}
) {
  const tempObjA = omit(objA, options.omit || []);
  const tempObjB = omit(objB, options.omit || []);
  return isEqual(tempObjA, tempObjB);
}

//
export function getField(
  key?: ColumnType<any>["key"],
  dataIndex?: ColumnType<any>["dataIndex"]
) {
  return String(key ?? dataIndex);
}

//
export function getReadCellContext(
  children: React.ReactNode[],
  content: React.ReactNode,
  prefixCls: string
) {
  const child = children[1];
  if (
    React.isValidElement(child) &&
    child.props.className?.includes(`${prefixCls}-cell-content`)
  ) {
    const finalContent = (content as any)?.[1]?.props?.className?.includes(
      `${prefixCls}-cell-content`
    )
      ? (content as any)[1].props.children
      : content;

    return React.cloneElement(child, {}, finalContent);
  } else {
    return content;
  }
}
