import React, { createContext, useState } from "react";

type Column = string[] | null[];

interface GameState {
  starter: boolean;
  setStarter: React.Dispatch<React.SetStateAction<boolean>>;
  currentPlayer: string;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>;
  score: { a: number; b: number };
  setScore: React.Dispatch<
    React.SetStateAction<{
      a: number;
      b: number;
    }>
  >;
  gameColumns: { [key: number]: Column };
  setGameColumns: (
    value: React.SetStateAction<{
      [key: number]: Column;
    }>
  ) => void;
  resetBoard: () => void;
}

const initialGameState: GameState = {
  starter: true,
  setStarter: () => {},
  currentPlayer: "a",
  setCurrentPlayer: () => {},
  score: { a: 0, b: 0 },
  setScore: () => {},
  gameColumns: {
    0: [null, null, null, null, null, null],
    1: [null, null, null, null, null, null],
    2: [null, null, null, null, null, null],
    3: [null, null, null, null, null, null],
    4: [null, null, null, null, null, null],
    5: [null, null, null, null, null, null],
    6: [null, null, null, null, null, null],
  },
  setGameColumns: () => {},
  resetBoard: () => {},
};

const GameContext = createContext(initialGameState);

const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [starter, setStarter] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState("a");
  const [score, setScore] = useState({ a: 0, b: 0 });
  const columns: { [key: number]: Column } = {
    0: [null, null, null, null, null, null],
    1: [null, null, null, null, null, null],
    2: [null, null, null, null, null, null],
    3: [null, null, null, null, null, null],
    4: [null, null, null, null, null, null],
    5: [null, null, null, null, null, null],
    6: [null, null, null, null, null, null],
  };
  for (let i = 0; i < 7; i++) {
    columns[i] = [null, null, null, null, null, null];
  }
  const [gameColumns, setGameColumns] = useState(columns);

  const resetBoard = () => {
    setGameColumns(columns);
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
        setGameColumns,
        resetBoard,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
