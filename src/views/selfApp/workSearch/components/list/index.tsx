import React from "react";
import useTabStore from "../../store/useTabStore";

const List: React.FC = () => {
  const { curTab } = useTabStore();

  return (
    <div>
      <div>{curTab.component()}</div>
    </div>
  );
};

export default List;
