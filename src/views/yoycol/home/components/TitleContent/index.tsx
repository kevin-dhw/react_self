import React from "react";

const TitleContent: React.FC = () => {
  return (
    <div
      className=" h-[80px] border rounded-md box-border p-[10px] 
                  flex justify-between align-baseline items-center
                   shadow-gray-500
                  "
    >
      <div className=" text-yellow-400 text-lg bg-black">Yoycal</div>
      {/* flex布局子元素分开间距 */}
      <div className=" flex items-center">
        <div className=" mr-2 flex-1 cursor-pointer">icon</div>
        <div className=" mr-2 cursor-pointer">signin</div>
        <div
          className=" cursor-pointer bg-yellow-400 py-[8px] 
                      px-[12px] rounded text-[#fff]"
        >
          <span>Sign Up</span>
        </div>
      </div>
    </div>
  );
};
export default TitleContent;
