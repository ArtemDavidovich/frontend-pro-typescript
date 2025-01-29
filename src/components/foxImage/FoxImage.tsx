import { useEffect, useState } from "react";
import style from "./foxImage.module.css";
import MyButton from "../myButton/MyButton";
import Loader from "../loader/Loader";

export default function FoxImage(): JSX.Element {
  // * переменная состояния для хранения полученной с сервера ссылки на картинку
  const [fox, setFox] = useState<string>("");

  // * переменная переключатель loader индикатора загрузки
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // * асинхронная функция для получения данных с сервера
  async function handleFox(): Promise<void> {   
    const res = await fetch("https://randomfox.ca/floof/");
    const obj = await res.json();
    const { image } = obj;
    setFox(image);
    // ! выключаем loader
    setIsLoading(false);
  }

  // * функция обработчик, которая чуть замедляет вызов handleFox для красивого отображения loader
  const handleGetFox = ():void => {
    // ! включаем loader
    setIsLoading(true)
    // * функция handleFox вызовется через 1,5 секунды
    setTimeout(() => {
      handleFox();
    }, 1500)
  }

  // * оборачиваем fetch запрос в useEffect, чтобы он вызывался только один раз в начале жизненного цикла
  useEffect(() => {
    handleFox();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={style.foxImageWrapper}>
            <img className={style.imgFoxImage} src={fox} alt="fox-image" />
          </div>
          <MyButton func={handleGetFox} text="get new fox" type="button" />
        </>
      )}
    </div>
  );
}
