import { Link } from "react-router-dom";
import { IStore } from "../store/Store";
import styles from "./storeCard.module.css";
import { useCart } from "../../context/CartContext";
import MyButton from "../myButton/MyButton";

export default function StoreCard({
  id,
  title,
  price,
  discountPercentage,
  thumbnail,
  rating,
  stock,
  reviews,
}: IStore): JSX.Element {
  const { addToCart } = useCart();

  return (
    <div className={styles.mainContainer}>
      <Link to={String(id)}>
        <div key={id} className={styles.cardContainer}>
          <h3>{title.length > 25 ? title.slice(0, 25) + "..." : title}</h3>
          <p style={{ color: "red", fontWeight: "600", fontSize: "150%" }}>
            {(price * (1 - discountPercentage / 100)).toFixed(2)}€
          </p>
          <p style={{ fontSize: "small" }}>
            <s>{price}€</s>
          </p>
          <div className={styles.imageWrapper}>
            <img src={thumbnail} alt={title} />
          </div>
          <p style={{ fontSize: "medium" }}>
            Rating: {rating} ({reviews.length} reviews)
          </p>
          {stock > 5 ? (
            <p>{stock} left</p>
          ) : (
            <p>
              only <span style={{ color: "red" }}>{stock}</span> left
            </p>
          )}
        </div>
      </Link>
      <MyButton
        text="Add to cart"
        func={() =>
          addToCart({
            id: id,
            title: title,
            image: thumbnail,
            price: (price * (1 - discountPercentage / 100)),
            quantity: 1
          })
        }
      />
    </div>
  );
}
