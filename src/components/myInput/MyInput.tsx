import { FormikProps } from "formik";
import styles from "./myInput.module.css";

interface IMyInputProps {
  name: string;
  type?: "email" | "text" | "password" | "tel" | "number";
  placeholder?: string;
  label?: string;
  formik: FormikProps<any>;
}

export default function MyInput({
  name,
  type,
  placeholder = "input text",
  label = "label text",
  formik,
}: IMyInputProps): JSX.Element {
  const { handleChange, values, errors } = formik;

  return (
    <div className={styles.inputContainer}>
      {errors[name] ? (
        <label className={styles.errorText}>{errors[name] as string}</label>
      ) : (
        <label>{label}</label>
      )}
      <input
        onChange={handleChange}
        value={values[name]}
        className={styles.inputStyle}
        id={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
