import { useContext } from "react";
import { SpaceContext, SpaceContextProps } from "../context/spaceContext";

const useSpaceContext = () => {
  return useContext<SpaceContextProps>(SpaceContext);
};

export default useSpaceContext;
