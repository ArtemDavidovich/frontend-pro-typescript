import styles from '../loginForm/loginForm.module.css'

interface IMyInputProps{
    name: string;
    type: 'email' | 'text' | 'password' | 'tel' | 'number';
    label: string;
}

export default function MyInput({name, type, label}: IMyInputProps): JSX.Element {   
    return(        
            <div className={styles.labelHmwrk03}>
                <label htmlFor={name}>{label}</label>
                <input className={styles.inputHmwrk03} id={name} type={type} placeholder={`  Enter your ${name}:`} required />
            </div>                    
    );
};