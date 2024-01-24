import React, { useContext } from "react";
import styles from "./Score.module.css";
import { GameContext } from "../../context/GameContext";

function Score() {
  const { score } = useContext(GameContext);
  return (
    <div className={styles.container}>
      <h2>Score</h2>
      <div className={styles.scores}>
        <div className={styles.score}>
          <img className={styles.scoreToken} src="/player1.jpeg" alt="logo" />
          <h2>{score["a"]}</h2>
        </div>
        <div className={styles.score}>
          <img className={styles.scoreToken} src="/player2.png" alt="logo" />
          <h2>{score["b"]}</h2>
        </div>
      </div>
    </div>
  );
}

export default Score;
