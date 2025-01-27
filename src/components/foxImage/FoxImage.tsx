import { useEffect, useState } from "react";
import style from './foxImage.module.css'

export default function FoxImage(): JSX.Element {
  const [fox, setFox] = useState<string>("");

  async function handleFox(): Promise<void> {
    const res = await fetch("https://randomfox.ca/floof/");
    const obj = await res.json();
    const { image } = obj;
    setFox(image);
  }

  useEffect(() => {
    handleFox();
  }, []);

  return (
    <div>
      <img className={style.imgFoxImage} src={fox} alt="fox-image" />
    </div>
  );
}
