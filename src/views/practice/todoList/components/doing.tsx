import { useContext } from "react";
import { StateEventContext } from "../context/stateEventContext";

const Doing = () => {
  const { contextNum } = useContext(StateEventContext);
  return (
    <div>
      doing
      <br />
      {contextNum}
    </div>
  );
};
export default Doing;
