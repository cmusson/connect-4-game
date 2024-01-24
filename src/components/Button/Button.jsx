import React, { useContext } from "react";
import styles from "./Button.module.css";
import { GameContext } from "../../context/GameContext";

const Button = () => {
  const { resetBoard } = useContext(GameContext);
  return <button onClick={() => resetBoard()}>New Game</button>;
};

export default Button;
