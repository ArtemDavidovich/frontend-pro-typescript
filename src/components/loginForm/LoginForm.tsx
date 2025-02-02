import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import styles from './loginForm.module.css'


export default function LoginForm(): JSX.Element {   

    return(
        <form className={styles.formContainerHmwrk03}>
        <div className={styles.regFormHmwrk03}>
        <MyInput name={'login'} type={'text'} label={'Login: '} />
        <br />
        <MyInput name={'e-mail'} type={'email'} label={'E-mail: '} />
        <br />
        <MyInput name={'password'} type={'password'} label={'Password: '} />
        <br />
        </div>
        <MyButton text={'Submit'} type={'submit'} variant="primary"/>        
        <MyButton text={'Reset'} type={'reset'} variant="danger"/>        
        </form>
    );
};