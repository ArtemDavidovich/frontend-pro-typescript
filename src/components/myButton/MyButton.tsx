// пример отдельного компонента кнопки
// экспорт по умолчанию можно писать как в конце, так и в начале объявления функции

import './myButton.css'

interface IMyButtonProps {
  type: 'button' | 'submit' | 'reset';
  text: string;
  //типизация функции в объекте по ключу
  // после => указываем возвращенное значение
  func?: () => void;
}

export default function MyButton({text, func, type}: IMyButtonProps) {
  return <button type={type} onClick={func} className='myButton'>{text}</button>;
}
 

// * компонент MyButton должен принимать props: text - с текстом кнопки, func - с  функцией, которая сработает по нажатию на кнопку

// для того чтобы функция отработала на кнопке присвойте ей атрибут onClick внутри кнопки
// <button onClick={...}>Click me!</button>