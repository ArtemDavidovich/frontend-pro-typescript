import { Link } from "react-router-dom";
import styles from './homework10.module.css'

export default function Homework10(): JSX.Element {
  return (
    <div className={styles.mainContainer}>
      <h2>Homework 10: Yup</h2>
      <div className={styles.linkContainer}>
      <Link to="/login-form">
        <span>Sign in</span>
      </Link>
      <p>or</p>
      <Link to="/registration-form">
        <span>Sign up</span>
      </Link>
      </div>
    </div>
  );
}
