interface IMyInputProps{
    name: string;
    type: 'email' | 'text' | 'password' | 'tel' | 'number';
    label: string;
}

export default function MyInput({name, type, label}: IMyInputProps): JSX.Element {   
    return(        
            <div className="labelHmwrk03">
                <label htmlFor={name}>{label}</label>
                <input className="inputHmwrk03" id={name} type={type} placeholder={`  Enter your ${name}:`} required />
            </div>                    
    );
};