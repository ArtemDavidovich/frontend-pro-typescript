import { useFormik } from "formik";
import ChildrenProps from "../../components/childrenProps/ChildrenProps";
import MyInput from "../../components/myInput/MyInput";
import MyButton from "../../components/myButton/MyButton";
import styles from './lesson16.module.css'
import * as Yup from 'yup'

const schema = Yup.object().shape({
 email: Yup.string().email('invalid e-mail format').required(),

 password: Yup.string().min(8, 'minimum 8 symbols long').required(),
});

export default function Lesson16(): JSX.Element {
    const formik = useFormik({
      initialValues: {
        email: 'lolo@gmail.com',
        password: '1234567'
      } as { email: string; password: string },
      validateOnChange: false,
      validationSchema: schema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      }
    });

  return (
    <div className={styles.mainContainer}>
      <h2>Lesson16: practice before test</h2>
      <ChildrenProps func={() => console.log("много разных пропсов 🙇‍♂️")}>
        {/* обернутые данные придут на место children */}
        <p style={{ color: "red" }}>переданные данные</p>
        <ul>
          <p>данные из lesson 16</p>
          <p>можно передать много данных</p>
        </ul>
      </ChildrenProps>
      <h2>2. Input components + formik</h2>
      <form style={{width: '300px'}} onSubmit={formik.handleSubmit}>
      <MyInput name="email" placeholder="email" label="email" formik={formik}/>
        <MyInput name="password" placeholder="password" label="password" formik={formik}/>
        <MyButton text="sign in" type="submit"/>
      </form>
    </div>
  );
}
