import React from "react";
import styles from "./GameColumn.module.css";

function GameColumn({ col, onClick }) {
  return (
    <div className={styles.column} onClick={onClick}>
      {col.map((cell, index) => {
        if (cell === "a") {
          return (
            <img
              key={index}
              className={styles.token}
              src="/player1.jpeg"
              alt="logo"
            />
          );
        } else if (cell === "b") {
          return (
            <img
              key={index}
              className={styles.token}
              src="/player2.png "
              alt="logo"
            />
          );
        } else return <div className={styles.cell} key={index}></div>;
      })}
    </div>
  );
}

export default GameColumn;
