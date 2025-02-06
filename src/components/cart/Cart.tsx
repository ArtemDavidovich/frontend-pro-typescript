import styles from "./cart.module.css";

import { useCart } from "../../context/CartContext";
import MyButton from "../myButton/MyButton";
import { useEffect, useState } from "react";

export default function Cart(): JSX.Element {
  // ! данные из контекста забираем через useCart()
  // мы можем забрать все, что находится в контексте и использовать по необходимости
  const { cart, clearCart, removeFromCart, totalPrice } = useCart();  

  return (
    <div className={styles.mainContainer}>
      {cart.length > 0 ? (
        <div className={styles.cartContainer}>
          <h2>Cart 🛒</h2>
          <div className={styles.totalPriceDiv}><p>Subtotal:</p><h3>{totalPrice}€</h3></div> 
          {cart.map((el) => (
            <div className={styles.itemContainer}>
              <div className={styles.imageWrapper}>
                <img src={el.image} alt={el.title} />
              </div>{" "}
              <div className={styles.pWrapper}>
                <p className={styles.pTitle}>{el.title.slice(0, 17) + "..."}</p>{" "}
                <p className={styles.pQuantity}>{el.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(el.id)}>❌</button>
            </div>
          ))}
          <MyButton variant="danger" text="Clear cart" func={clearCart} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
