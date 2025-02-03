// пример отдельного компонента кнопки
// экспорт по умолчанию можно писать как в конце, так и в начале объявления функции

import styles from "./myButton.module.css";
import cn from "classnames";

interface IMyButtonProps {
  type?: "button" | "submit" | "reset";
  text?: string;
  //типизация функции в объекте по ключу
  // после => указываем возвращенное значение
  func?: () => void;
  //  активная ли кнопка
  disabled?: boolean;
  variant?: "primary" | "danger";
  hidden?: boolean;
}

export default function MyButton({
  text = "click!",
  func,
  type = "button",
  disabled = false,
  variant = 'primary',
  hidden = false,
}: IMyButtonProps) {
  return (
    <button
      type={type}
      onClick={func}
      className={cn(styles.myButton, {
        [styles.primary]: variant === "primary",
        [styles.danger]: variant === "danger",
        [styles.disabled]: disabled === true,
        [styles.hidden]: hidden === true,
      })}
    >
      {text}
    </button>
  );
}

// * компонент MyButton должен принимать props: text - с текстом кнопки, func - с  функцией, которая сработает по нажатию на кнопку

// для того чтобы функция отработала на кнопке присвойте ей атрибут onClick внутри кнопки
// <button onClick={...}>Click me!</button>
