import LoginForm from "../../components/loginForm/LoginForm";
import styles from './homework03.module.css'


export default function Homework03(): JSX.Element{
    return(
        <div className={styles.container}>
            <h2>Login Form</h2>
            <LoginForm />
        </div>
    );
};