import React, { createContext, useState } from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [starter, setStarter] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState("a");
  const [score, setScore] = useState({ a: 0, b: 0 });
  const columns = {};
  for (let i = 0; i < 7; i++) {
    columns[i] = [null, null, null, null, null, null];
  }
  const [gameColumns, setGameColums] = useState(columns);

  const resetBoard = () => {
    setGameColums(columns);
    if (starter === true) {
      setStarter(false);
      setCurrentPlayer("b");
    }
    if (starter === false) {
      setStarter(true);
      setCurrentPlayer("a");
    }
  };

  return (
    <GameContext.Provider
      value={{
        starter,
        setStarter,
        currentPlayer,
        setCurrentPlayer,
        score,
        setScore,
        gameColumns,
        setGameColums,
        resetBoard,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
