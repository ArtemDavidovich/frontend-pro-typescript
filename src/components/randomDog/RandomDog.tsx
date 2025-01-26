import { useEffect, useState } from "react";
import style from "./randomDog.module.css";

export default function RandomDog(): JSX.Element {
  const [URL, setURL] = useState<string>("");

  async function loadPicture(): Promise<void> {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const obj = await res.json();
    console.log(obj);
    const {message} = obj;
    setURL(message);
  }

  useEffect(() => {
    loadPicture();
  }, []);

  return (
    <div className={style.containerRandomDog}>
      <h1 className={style.h1RandomDog}>Random Dog</h1>
      <div className={style.imageContainerRandomDog}>
        <img className={style.imageRandomDog} src={URL} alt="random-dog" />
      </div>
      <button
        className={style.btnRandomDog}
        type="button"
        onClick={() => loadPicture()}
      >Doge</button>
    </div>
  );
}
