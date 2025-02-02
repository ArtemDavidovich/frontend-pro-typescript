import { useState } from "react";
import MyButton from "../myButton/MyButton";
import styles from './feedback.module.css'

export default function Feedback(): JSX.Element {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const handleLike = (): void => {
    setLike((prev) => prev + 1);
  };

  const handleDislike = (): void => {
    setDislike((prev) => prev + 1);
  };

  const handleReset = (): void => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div className={styles.containerHmwrk04}>
      <h1>Rating counter</h1>
      <div className={styles.divHmwrk04}>
        <h2>{like}</h2>
        <MyButton text={"Like"} type={"button"} func={handleLike} variant="primary"/>
      </div>
      <div className={styles.divHmwrk04}>
        <MyButton text={"Dislike"} type={"button"} func={handleDislike} variant="danger"/>
        <h2>{dislike}</h2>
      </div>
      <MyButton text={"Reset Results"} type={"button"} func={handleReset} />
    </div>
  );
}
