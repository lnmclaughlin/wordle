import { createContext } from "react";
import Word from "../db/Word";

export interface GameContextModel {
  alert: string;
  setAlert: (s: string) => void;
  setWordOfTheDay: (w: typeof Word | null) => void;
}

const defaultValues: GameContextModel = {
  alert: "",
  setAlert: () => {},
  setWordOfTheDay: () => {},
};

const GameContext = createContext(defaultValues);

export default GameContext;
