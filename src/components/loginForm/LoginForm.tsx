import { useFormik } from "formik";
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";


export default function LoginForm(): JSX.Element {  
    const formik = useFormik({
      initialValues: {
        email: '',
        password: ''
      } as { email: string; password: string },
      validateOnChange: false,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      }
    }); 

    return(
        <form className={styles.formContainerHmwrk03}>
        <div className={styles.regFormHmwrk03}>
        <MyInput formik={formik} name={'login'} type={'text'} label={'Login: '} />
        <br />
        <MyInput formik={formik} name={'e-mail'} type={'email'} label={'E-mail: '} />
        <br />
        <MyInput formik={formik} name={'password'} type={'password'} label={'Password: '} />
        <br />
        </div>
        <MyButton text={'Submit'} type={'submit'} variant="primary"/>        
        <MyButton text={'Reset'} type={'reset'} variant="danger"/>        
        </form>
    );
};