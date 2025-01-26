import { useState } from "react";
import "./counter.css";

function Counter(): JSX.Element {
  const [counter, setCounter] = useState<number>(0)

  function handlePlus(): void {
    setCounter(counter + 1)
  }

  function handleMinus(): void {
    setCounter(counter - 1)
}

return (
    <div className="counterMainDivLesson06">
        <h1 className="h1Lesson06">Добавление денег</h1>
        <img src="https://www.zastavki.com/pictures/originals/2020Finance_Wallpapers___Money_Lot_of_euro_bills_close_up_145693_.jpg" alt="" />
        <div className='containerLesson06'>
            <button className="btnLesson06" type="button" onClick={handleMinus}>Убрать деньги</button>
            <span className="spanLesson06">{counter} Euro</span>
            <button className="btnLesson06" type="button" onClick={handlePlus}>Добавить деньги</button>
        </div>
    </div>
)
}

export default Counter;
