import { Link, useParams } from "react-router-dom";
import styles from "./productPage.module.css";
import { useEffect, useState } from "react";
import { IProduct } from "../products/types/types";
import Loader from "../loader/Loader";
import { useCart } from "../../context/CartContext";
import MyButton from "../myButton/MyButton";

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

  const { addToCart } = useCart();

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
        <div className={styles.productContainer}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <img width={200} src={product.image} alt="" />
          <p>Price: {product.price}€</p>
          <MyButton
            func={() =>
              addToCart({
                id: product.id,
                title: product.title,
                image: product.image,
                price: product.price,
                quantity: 1,
              })
            }
            text="Add to cart"
          />
          <div>
            <Link to="/products">
              <span className={styles.spanContainer}>back to main page</span>
            </Link>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
