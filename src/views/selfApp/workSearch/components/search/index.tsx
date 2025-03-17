import React, {
  useState,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from "react";
import { Input } from "antd";

export interface SearchRef {
  value: string;
}
export interface SearchProps {
  handleSearch?: (value: string) => void;
}

const InnerSearch: ForwardRefRenderFunction<SearchRef, SearchProps> = (
  props,
  ref
) => {
  const { handleSearch } = props;
  const [value, setValue] = useState("");

  useImperativeHandle(ref, () => {
    return { value };
  });
  return (
    <div>
      <div className=" flex py-[20px] px-[25px] items-center gap-4">
        <div className=" flex-1">
          <Input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></Input>
        </div>
        <div onClick={() => handleSearch?.(value)}>搜索</div>
      </div>
    </div>
  );
};

const Search = React.forwardRef(InnerSearch);
export default Search;
