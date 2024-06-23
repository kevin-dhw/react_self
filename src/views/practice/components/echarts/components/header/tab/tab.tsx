import React, { useState } from "react";

const Tab: React.FC = () => {
  const arr = [1, 2, 3];
  const [num, setNum] = useState<number | undefined>();
  return (
    <div className="tab">
      tab
      <br />
      {arr.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
};
export default Tab;
