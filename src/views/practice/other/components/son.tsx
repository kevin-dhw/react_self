import React from "react";
import useOtherContext from "../hooks/useOtherContext";

const Son: React.FC = () => {
  const { num, str } = useOtherContext();
  return (
    <>
      <br />
      {num} {str}
    </>
  );
};

export default Son;
