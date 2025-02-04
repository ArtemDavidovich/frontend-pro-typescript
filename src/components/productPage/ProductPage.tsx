import { Link, useParams } from "react-router-dom";
import styles from "./productPage.module.css";
import { useEffect, useState } from "react";
import { IProduct } from "../products/types/types";
import Loader from "../loader/Loader";

const initialProduct: IProduct = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
};

export default function ProductPage(): JSX.Element {
  const [product, setProduct] = useState<IProduct>(initialProduct);

  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data: IProduct) => setProduct(data));
    }, 1000);
  }, [id]);

  return (
    <div className={styles.mainContainer}>
      {product.title ? (
        <>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <img width={200} src={product.image} alt="" />
          <p>Price: {product.price}€</p>
          <div>
            <Link to="/lesson-14">back to main page</Link>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
