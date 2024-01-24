import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.title}>
      <img className={styles.titleImg} src="/player1.jpeg" alt="logo" />
      <h1> Connect 4</h1>
    </div>
  );
};

export default Header;
