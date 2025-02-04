import styles from "./formRegistration.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import MyButton from "../../components/myButton/MyButton";
import { Link } from "react-router-dom";

interface IFormRegistrationValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "minimum 3 symbols long")
    .max(20, "maximum 20 symbols long")
    .matches(/^[a-zA-Z0-9_]+$/, "minimum one letter or digit")
    .required(),

  email: Yup.string().email("invalid e-mail format").required(),

  password: Yup.string()
    .min(8, "at least 8 symbols long")
    .max(32, "maximum 32 symbols long")
    .matches(/[A-Z]/, "minimum one uppercase symbol")
    .matches(/[a-z]/, "minimum one lowercase symbol")
    .matches(/[@$!%*?&]/, "minimum one special symbol: @$!%*?&")
    .matches(/\d/, "minimum one digit")
    .required(),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "passwords don't match")
    .required(),
});

export default function FormRegistration(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    } as IFormRegistrationValues,
    validateOnChange: false,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  //   function clearAll(): void{
  //     formik.values.username = '';
  //     formik.values.email = '';
  //     formik.values.password = '';
  //     formik.values.confirmPassword = ''
  //   }

  return (
    <div className={styles.mainContainer}>
      <form onSubmit={formik.handleSubmit} className={styles.registrationForm}>
        <h3>Registration form</h3>
        <div className={styles.divInput}>
          <p>username:</p>
          <input
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="create your username"
            type="text"
            name="username"
          />
        </div>
        <span className={styles.errorMessage}>{formik.errors.username}</span>
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
            placeholder="create your password"
            type="text"
            name="password"
          />
        </div>
        <span className={styles.errorMessage}>{formik.errors.password}</span>
        <div className={styles.divInput}>
          <p>password*:</p>
          <input
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            placeholder="confirm your password"
            type="text"
            name="confirmPassword"
          />
        </div>
        <span className={styles.errorMessage}>
          {formik.errors.confirmPassword}
        </span>
        <div className={styles.loginFormButton}>
          <MyButton type="submit" text="Sign up" />
          {/* <MyButton variant="danger" type="reset" text="Reset" func={clearAll}/> */}
        </div>
        <span className={styles.spanLink}>
          <Link to="/login-form">
            <div className={styles.divLink}>Login to existing account</div>
          </Link>
        </span>
      </form>
    </div>
  );
}
