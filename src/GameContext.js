import React, { Children, useContext } from "react";
import Board from "./Board";

const GameContext = React.createContext();

export function useGame() {
  return useContext(GameContext);
}

export function useGameUpdate(){
  return 
}

export function GameProvider({ children }) {
  const [game, setGame] = useState(new Board());

  return (
    <GameContext.Provider value={game}>
      {children}
    </GameContext.Provider>
  )
}