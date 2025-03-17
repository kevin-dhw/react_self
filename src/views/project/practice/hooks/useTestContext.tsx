import { useContext } from "react";
import TestContext from "../context/testContext";

function useTestContext() {
  return useContext(TestContext);
}
export default useTestContext;
