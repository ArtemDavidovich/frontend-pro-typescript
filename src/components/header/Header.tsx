import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { useCart } from "../../context/CartContext";

export default function Header(): JSX.Element {
  const { totalPrice } = useCart(); 

  return (
    <header className={styles.header}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.linkActive : "")}
        to={"/"}
      >
        lessons
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.linkActive : "")}
        to={"homework-page"}
      >
        homeworks
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.linkActive : "")}
        to={"consultation-page"}
      >
        consultations
      </NavLink>
      <p>|</p>
      <NavLink
        className={({ isActive }) => (isActive ? styles.linkActive : "")}
        to={"products"}
      >
        products
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.linkActive : "")}
        to={"cart"}
      >
        cart: {totalPrice}€
      </NavLink>      
    </header>
  );
}
