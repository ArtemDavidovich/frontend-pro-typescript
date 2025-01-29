import { useEffect, useState } from "react";
import styles from "./catFact.module.css";
import Loader from "../loader/Loader";
import cn from 'classnames'

interface ICat {
  url: string;
  fact: string;
}

export default function CatFact(): JSX.Element {
  const [cat, setCat] = useState<ICat[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchCat = async (): Promise<void> => {
    try {
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      const { fact } = data;

      const res1 = await fetch(
        "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1"
      );
      const data1 = await res1.json();
      const { url } = data1[0];

      setCat((prev) => [...prev, { fact, url }]);

      setIsLoading(false);
    } catch (error) {
      console.error("Invalid cat :(");
    }
  };

  const handleFetchCat = (): void => {
    setIsLoading(true);
    setTimeout(() => {
      fetchCat();
    }, 1000);
  };

  const clearCats = (): void => {
    setCat([]);
  };

  useEffect(() => {
    handleFetchCat();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.superMainContainer}>
          <div className={styles.btnContainer}>
            <button className={cn(styles.btn, styles.btnShow)} onClick={handleFetchCat}>
              Get New Cat Fact
            </button>
            {cat.length > 0 ? (
            <button className={cn(styles.btn, styles.btnClear)} onClick={clearCats}>
              Good Bye Cats :(
            </button>) : (<></>)}
          </div>
              
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.mainContainer}>
            {cat.map((element) => (
              <>
                <div className={styles.catCard} key={element.fact}>
                  <p>{element.fact}</p>
                  <div className={styles.imageWrapper}>
                    <img src={element.url} alt="cat-photo" />
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
