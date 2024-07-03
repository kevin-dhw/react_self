import { useContext } from "react";
import { SelectContext, SelectContextProps } from "../context/selectContext";

function useSelectContext() {
  return useContext<SelectContextProps>(SelectContext);
}

export default useSelectContext;
