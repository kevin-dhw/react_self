import React, { useEffect } from "react";
import useDropHook from "../../../../hooks/useDropHook";
import classNames from "classnames";

interface GapProps {
  id?: string | undefined;
}

const Gap: React.FC<GapProps> = (props) => {
  const { id } = props;

  const { ref, isOver, drop } = useDropHook("new-item", id);

  useEffect(() => {
    drop(ref);
  });
  return (
    <div ref={ref}>
      <div
        className={classNames(" h-[14px]", isOver ? " bg-green-300" : "")}
      ></div>
    </div>
  );
};
export default Gap;
