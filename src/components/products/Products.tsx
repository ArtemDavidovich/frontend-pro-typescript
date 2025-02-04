import { useEffect, useState } from "react";
import styles from "./products.module.css";
import { IProduct } from "./types/types";
import ProductCard from "../productCard/ProductCard";
import Loader from "../loader/Loader";

export default function Products(): JSX.Element {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async (): Promise<void> => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data: IProduct[] = await res.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 1000)   
  }, []);

  return (
    <div className={styles.mainContainer}>
      {products.length > 0 ? (
        <>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
