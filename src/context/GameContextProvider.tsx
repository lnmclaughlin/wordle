import { ReactNode, useState } from "react";
import Word from "../db/Word";
import GameContext from "./GameContext";

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState("");
  const [wordOfTheDay, setWordOfTheDay] = useState<typeof Word | null>([]);

  return (
    <GameContext.Provider
      value={{
        alert,
        setAlert,
        setWordOfTheDay,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
