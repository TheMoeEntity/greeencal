import { Helpers } from "@/Helpers";
import { donationType, testimonialsType } from "@/Helpers/types";
import { createContext, useState } from "react";

export type backendContextType = {
  data1: testimonialsType[];
  data2: donationType[];
};
export const menu = createContext<backendContextType | null>(null);

const Context = async ({ children }: { children: React.ReactNode }) => {
  const data = await Helpers.getData("testimonials");
  const donations = await Helpers.getData("donations");
  const [testi] = useState(data as testimonialsType[]);
  const [dona] = useState(donations as donationType[]);

  return (
    <menu.Provider value={{ data1: testi, data2: dona }}>
      {children}
    </menu.Provider>
  );
};
export default Context;
