import { RefObject, useEffect, useState } from "react";

const useScroll = (ref: RefObject<HTMLElement>): boolean => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {

  }, [ref])
};
