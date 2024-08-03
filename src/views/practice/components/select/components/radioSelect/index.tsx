import React, {useImperativeHandle} from "react";




const RadioSelect: React.FC = () => {
  return (
    <div>
      <div className=" fixed top-0 bottom-0 left-0 right-0">
        <div className=" w-full h-40% bg-slate-100 absolute bottom-0 rounded p-[10px]">
          <div className=" flex">
            <div className=" flex-1">取消</div>
            <div>确定</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioSelect;
