import { useState } from "react";
import './lesson04.css'
import DayNightChanger from "../../components/dayNightChanger/DayNightChanger";



export default function Lesson04(): JSX.Element {
    // ! код ниже сработал бы в обычном script.js, но он не обновит данные на странице в react
    
    // let count = 0;

    // const handlePlus = () => {
    //     count++
    //     console.log(count);        
    // };

    // const handleMinus = () => {
    //     count--
    //     console.log(count);        
    // };

    // ! вместо него мы воспользуемся функцией useState()

    // функция useState() для создания переменной состояния принимает в себя на вход начальное значение переменной
    // let result = useState(0)

    // let count = result[0]
    // let setCount = result[1]

    const [count, setCount] = useState<number>(0)
    
    const handlePlus = (): void => {
        setCount(prev => prev + 1)       
    };

    const handleMinus = (): void => {
        setCount(prev => prev - 1)       
    };
  
    return (
    <div>
        <h2>React useState() hook</h2>
        <div className="counter">
            {/* <button onClick={handlePlus}>+</button>
            <span>
                {count}
            </span>
            <button onClick={handleMinus}>-</button> */}
            <DayNightChanger />
        </div>
    </div>
  );
};
