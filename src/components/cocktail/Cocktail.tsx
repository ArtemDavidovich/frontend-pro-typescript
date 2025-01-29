import { useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";

interface ICocktail {
  strDrink: string;
  strDrinkThumb: string;
}

export default function Cocktail(): JSX.Element {
  const [cocktail, setCocktail] = useState<ICocktail>({
    strDrink: "",
    strDrinkThumb: "",
  });

  const fetchCocktail = async (): Promise<void> => {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await res.json();
    const cocktail: ICocktail = data.drinks[0];
    setCocktail({
      strDrink: cocktail.strDrink,
      strDrinkThumb: cocktail.strDrinkThumb,
    });
  };

  useEffect(() => {
    fetchCocktail();
  }, []);

  return (
    <div>
      <div>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      </div>
      <h2>{cocktail.strDrink}</h2>
      <MyButton text="show another cocktail" func={fetchCocktail} variant="primary"/>
    </div>
  );
}

// https://www.thecocktaildb.com/api/json/v1/1/random.php
// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd
// new Date().toLocaleString()
// toFixed(2)
