import React, { useContext } from "react";
import { TopContext } from "../context/topContext";

interface TopTittleProps {
  titleContent?: () => React.ReactNode;
}
const TopTittle: React.FC<TopTittleProps> = (props) => {
  const { titleContent } = props;
  const { topData } = useContext(TopContext);
  return (
    <>
      <div className=" flex mx-2 mt-4">
        <div className=" flex-1">标题12</div>
        <div>{titleContent?.()}</div>
      </div>
      <div>
        {topData?.title}
        {topData?.subTitle}
      </div>
    </>
  );
};
export default TopTittle;
