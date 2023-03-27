import { useState } from "react";
import dividerDesktop from "./images/pattern-divider-desktop.svg";
import diceIcon from "./images/icon-dice.svg";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <span className={styles.adviceNumber}>ADVICE #</span>
      <h1 className={styles.adviceText}>
        
      </h1>
      <img src={dividerDesktop} alt="dividerLine" />
      <div className={styles.randomizeButton}>
        <img src={diceIcon} alt="diceIcon" />
      </div>
    </div>
  );
}

export default App;
