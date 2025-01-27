import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import './loginForm.css'


export default function LoginForm(): JSX.Element {   

    return(
        <form className="formContainerHmwrk03">
        <div className="regFormHmwrk03">
        <MyInput name={'login'} type={'text'} label={'Login: '} />
        <br />
        <MyInput name={'e-mail'} type={'email'} label={'E-mail: '} />
        <br />
        <MyInput name={'password'} type={'password'} label={'Password: '} />
        <br />
        </div>
        <MyButton text={'Submit'} type={'submit'} />        
        <MyButton text={'Reset'} type={'reset'} />        
        </form>
    );
};