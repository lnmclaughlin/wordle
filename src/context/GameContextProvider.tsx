import { ReactNode } from "react";
import GameContext from "./GameContext";

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
};
