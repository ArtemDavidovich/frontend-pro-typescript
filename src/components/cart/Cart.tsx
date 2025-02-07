import styles from "./cart.module.css";

import { useCart } from "../../context/CartContext";
import MyButton from "../myButton/MyButton";

export default function Cart(): JSX.Element {
  // ! данные из контекста забираем через useCart()
  // мы можем забрать все, что находится в контексте и использовать по необходимости
  const {
    cart,
    addToCart,
    clearCart,
    removeFromCart,
    removeOneItem,
    totalPrice,
  } = useCart();

  // подсчет стоимости корзины через метод reduce, но тогда усложняется экспорт в другие компоненты (например, в header)
  // const getTotalPrice = () => {
  //   return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  // }

  return (
    <div className={styles.mainContainer}>
      {cart.length > 0 ? (
        <div className={styles.cartContainer}>
          <h2>Cart 🛒</h2>
          <div className={styles.totalPriceDiv}>
            <p>Subtotal:</p>
            <h3>{totalPrice}€</h3>
          </div>
          <div className={styles.productsContainer}>
          {cart.map((el) => (
            <div className={styles.itemContainer}>
              <div className={styles.imageWrapper}>
                <img src={el.image} alt={el.title} />
              </div>{" "}
              <div className={styles.nameQuantContainer}>
              <div className={styles.pWrapper}>
                <p className={styles.pTitle}>{el.title.slice(0, 17) + "..."}</p>{" "}
                <div className={styles.quantityWrapper}>
                <button onClick={() => removeOneItem(el.id)}>-</button>
                <p className={styles.pQuantity}>{el.quantity}</p>
                <button onClick={() => addToCart(el)}>+</button>
                </div>
              </div>
              </div>
              <div className={styles.priceDelContainer}>
              <p>{(el.price * el.quantity).toFixed(2)}€</p>
              <button onClick={() => removeFromCart(el.id)}>❌</button>
              </div>
            </div>
          ))}
          </div>
          <MyButton variant="danger" text="Clear cart" func={clearCart} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
