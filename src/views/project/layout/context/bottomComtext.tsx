import { createContext } from "react";

interface BomttomComtextType {
  bottomData?: Record<string, any>;
}

const BottomContext = createContext<BomttomComtextType>({});

export default BottomContext;
