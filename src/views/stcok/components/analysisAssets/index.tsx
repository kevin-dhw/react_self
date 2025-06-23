import {
  useState,
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from "react";
import HeaderBack from "../headerBack";

export interface AnalysisAssetsProps {}
export interface AnalysisAssetsRef {
  open: () => void;
  close: () => void;
}

const InnerAnalysisAssets: ForwardRefRenderFunction<
  AnalysisAssetsRef,
  AnalysisAssetsProps
> = (props, ref) => {
  console.log(props);
  const [isShow, setIsShow] = useState(false);

  const open = () => {
    setIsShow(true);
  };
  const close = () => {
    setIsShow(false);
  };

  useImperativeHandle(ref, () => {
    return { open, close };
  });

  if (isShow) {
    return (
      <div className=" fixed top-0 bottom-0 right-0 left-0 bg-white">
        <div className=" px-[10px]">
          <HeaderBack
            handleBack={() => {
              close();
            }}
            title="analysis assets"
          ></HeaderBack>
        </div>
        <div>content</div>
      </div>
    );
  }
};

const AnalysisAssets = forwardRef(InnerAnalysisAssets);

export default AnalysisAssets;
