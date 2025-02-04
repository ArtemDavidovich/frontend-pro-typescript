import styles from './homework11.module.css'

import Products from "../../components/products/Products";

export default function Homework11(): JSX.Element {
  return (
    <div className={styles.mainContainer}>
      <Products />
    </div>
  );
}