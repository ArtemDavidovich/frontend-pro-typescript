import styles from "./formLogin.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import MyButton from "../../components/myButton/MyButton";
import { Link } from "react-router-dom";

interface IFormLoginValues {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string().email("invalid e-mail format").required(),

  password: Yup.string().min(8, "minimum 8 symbols long").required(),
});

export default function FormLogin(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as IFormLoginValues,
    validateOnChange: false,
    validationSchema: schema,
    onSubmit(values, { resetForm }) {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div className={styles.mainContainer}>
      <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
        <h3>Login form</h3>
        <div className={styles.divInput}>
          <p>e-mail:</p>
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="enter your e-mail"
            type="text"
            name="email"
          />
        </div>
        <span className={styles.errorMessage}>{formik.errors.email}</span>
        <div className={styles.divInput}>
          <p>password:</p>
          <input
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="enter your password"
            type="text"
            name="password"
          />
        </div>
        <span className={styles.errorMessage}>{formik.errors.password}</span>
        <div className={styles.loginFormButton}>
          <MyButton type="submit" text="Login" />
          <MyButton variant="danger" type="reset" text="Reset" func={formik.resetForm}/>
        </div>
        <span className={styles.spanLink}>
          <Link to="/registration-form">
            <div className={styles.divLink}>Register new account</div>
          </Link>
        </span>
      </form>
    </div>
  );  
}
