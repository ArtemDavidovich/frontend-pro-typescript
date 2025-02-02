import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

export default function Header(): JSX.Element {
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
    </header>
  );
}
