import { createContext } from "react";

interface InfoProps {
  job: string;
  city: string;
}

const InfoContext = createContext<InfoProps>({
  job: "programmer",
  city: "shanghai",
});

export default InfoContext;
