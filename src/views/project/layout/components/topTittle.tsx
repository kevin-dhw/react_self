import React from "react";

interface TopTittleProps {
  titleContent?: () => React.ReactNode;
}

const TopTittle: React.FC<TopTittleProps> = (props) => {
  const { titleContent } = props;
  return (
    <div className=" flex mx-2 mt-4">
      <div className=" flex-1">标题</div>
      <div>{titleContent && titleContent()}</div>
    </div>
  );
};
export default TopTittle;
