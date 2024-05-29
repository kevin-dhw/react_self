import WillDone from "./willDone";
import Doing from "./doing";
import Done from "./done";
import { useTodoListStore } from "../../../../store/atodoList";

const RightContent = () => {
  const { activeNum } = useTodoListStore();
  return (
    <div className=" ml-5">
      {activeNum === 0 ? <WillDone /> : activeNum === 1 ? <Done /> : <Doing />}
    </div>
  );
};
export default RightContent;
