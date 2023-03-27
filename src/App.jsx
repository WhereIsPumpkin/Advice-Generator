import { useEffect, useState } from "react";
import dividerDesktop from "./images/pattern-divider-desktop.svg";
import dividerMobile from "./images/pattern-divider-mobile.svg";
import diceIcon from "./images/icon-dice.svg";
import styles from "./App.module.scss";

function App() {
  const [id,setId] = useState("")
  const [advice,setAdivce] = useState("");

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setId(data.slip.id)
        setAdivce(data.slip.advice)
      })
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.adviceNumber}>ADVICE #{id}</span>
      <h1 className={styles.adviceText}>{advice}</h1>
      <img src={dividerDesktop} alt="dividerLine" className={styles.desktopDiv}/>
      <img src={dividerMobile} alt="dividerLine" className={styles.mobileDiv}/>

      <div
       className={styles.randomizeButton}
       onClick={fetchAdvice}
       >
        <img src={diceIcon} alt="diceIcon" />
      </div>
    </div>
  );
}

export default App;
