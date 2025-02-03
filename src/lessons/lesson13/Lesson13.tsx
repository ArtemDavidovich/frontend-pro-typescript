import { useFormik } from "formik";
import MyButton from "../../components/myButton/MyButton";
import styles from "./lesson13.module.css";
import * as Yup from "yup";

interface IFormValues {
  model: string;
  creator: string;
  email: string;
}

// * валидация данных в форме
// .number() - проверка, что это число
// .typeError('текст сообщения') - сообщение об ошибке в случае несоответствия типа
// .required('текст сообщения') - проверка, что поле заполнено
// .integer('текст сообщения') - целочисленное число

const schema = Yup.object().shape({
  model: Yup.number()
    .typeError("model must be a number")
    .integer("model must be an integer")
    .required("model is a  compulsory field")
    .min(100, "model number must be equal or more than 100")
    .max(1000, "model number must be equal or less than 1000"),

  creator: Yup.string().required("company name is required"),

  email: Yup.string()
    .email("invalid e-mail format")
    .max(50, "e-mail needs to be less than 50 symbols")
    .required(),
});

export default function Lesson13(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      model: "1000",
      creator: "skynet",
      email: "skynet@gmail.com",
    } as IFormValues,
    // отключаем валидацию по умолчанию на изменение в input
    // теперь сообщение об ошибке возникает только по нажатию на кнопку
    validateOnChange: false,
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      // метод для очистки формы
      resetForm();
    },
  });

  return (
    <div className={styles.lessonContainer}>
      <h2>Lesson 13</h2>
      <form onSubmit={formik.handleSubmit} className={styles.robotForm}>
        <input
          value={formik.values.model}
          onChange={formik.handleChange}
          placeholder="robot model"
          type="text"
          name="model"
        />
        <input
          value={formik.values.creator}
          onChange={formik.handleChange}
          placeholder="creator name"
          type="text"
          name="creator"
        />
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="company e-mail"
          type="text"
          name="email"
        />
        <MyButton type="submit" text="send" />
      </form>
      <span className={styles.errorMessage}>{formik.errors.model}</span>
      <span className={styles.errorMessage}>{formik.errors.creator}</span>
      <span className={styles.errorMessage}>{formik.errors.email}</span>
    </div>
  );
}
