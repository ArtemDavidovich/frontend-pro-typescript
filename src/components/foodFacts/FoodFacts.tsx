import { useEffect, useState } from "react";
import style from "./foodFacts.module.css";

interface Product {
  image: string;
  title: string;
  brands: string;
  product_quantity: number;
  product_quantity_unit: string;
}

export default function FoodFacts(): JSX.Element {
  const barcode = [
    3274080005003, 7622210449283, 3017620425035, 3175680011480, 5449000214911,
    5602477842456,
  ];

  function getRandomBarcode(): (typeof barcode)[number] {
    const randomIndex = Math.floor(Math.random() * barcode.length);
    return barcode[randomIndex];
  }

  const [randomBarcode, setRandomBarcode] = useState<number>(0);
  const [product, setProduct] = useState<Product>({
    image: "",
    title: "",
    brands: "",
    product_quantity: 0,
    product_quantity_unit: "",
  });

  function getFoodFact() {
    const barcode = getRandomBarcode();
    setRandomBarcode(barcode);
    fetch(
      `https://world.openfoodfacts.org/api/v2/product/${randomBarcode}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct({
          image: data.product.image_url,
          title: data.product.product_name,
          brands: data.product.brands,
          product_quantity: data.product.product_quantity,
          product_quantity_unit: data.product.product_quantity_unit,
        });
      });
  }

  useEffect(() => {
    getFoodFact();
  }, []);

  return (
    <div className={style.containerFoodFacts}>
      <div className={style.imgContainerFoodFacts}>
        <img
          className={style.imgFoodFacts}
          src={product.image}
          alt={product.title}
        />
      </div>
      <h2>
        {product.title}
      </h2>
      <h2>{product.brands} - {product.product_quantity}{" "}
      {product.product_quantity_unit}</h2>
      <button
        className={style.btnFoodFacts}
        type="button"
        onClick={() => getFoodFact()}
      >
        <h3>Change product</h3>
      </button>
    </div>
  );
}
