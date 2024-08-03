import React, { useState } from "react";

const FixContent: React.FC = () => {
  const [isShowFixBottomContent, setIsShowFixBottomContent] =
    useState<Boolean>(true);

  const handleIsShowBottomContent = () => {
    setIsShowFixBottomContent(false);
  };
  return (
    <div>
      <div className=" fixed bottom-44 right-0 cursor-pointer">上面</div>
      {isShowFixBottomContent && (
        <div
          onClick={handleIsShowBottomContent}
          className=" group fixed bottom-2 right-0 h-[150px] w-[80px] 
                    bg-yellow-600 cursor-pointer rounded"
        >
          {/* invisible */}
          <div className=" group-hover:visible">内容</div>
        </div>
      )}
    </div>
  );
};

export default FixContent;
