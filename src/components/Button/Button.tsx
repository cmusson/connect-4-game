import { useContext } from "react";
import styles from "./Button.module.css";
import { GameContext } from "../../context/GameContext";

const Button = () => {
  const { resetBoard, setScore } = useContext(GameContext);
  const resetScore = () => {
    setScore({ a: 0, b: 0 });
  };
  return (
    <button
      className={styles.button}
      onClick={() => {
        resetBoard();
        resetScore();
      }}
    >
      New Game
    </button>
  );
};

export default Button;
