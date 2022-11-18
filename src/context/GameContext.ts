import { createContext } from "react";

export interface GameContextModel {}

const defaultValues: GameContextModel = {};

const GameContext = createContext(defaultValues);

export default GameContext;
