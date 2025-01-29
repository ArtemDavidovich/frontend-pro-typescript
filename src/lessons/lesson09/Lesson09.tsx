// импорт стилей в переменной из файла module.css
import MyButton from "../../components/myButton/MyButton";
import styles from "./lesson09.module.css";

export default function Lesson09() {
  console.log(styles);
  return (
    <div>
      {/* если css написан в стиле kebab case через дефис мы все равно можем обратиться к ключку но делать это неудобно */}
      {/* <h2 className={styles['text-orange'] }>Lesson 09. Css modules 🎨</h2> */}
      {/* <h2 className={styles.textOrange + ' ' + styles.heading}>Lesson 09. Css modules 🎨</h2> */}
      <h2 className={`${styles.textOrange} ${styles.heading}`}>
        Lesson 09. Css modules 🎨
      </h2>
      <p className={styles.desc}>
        Css modules - это способ, как мы можем изолированно работать сос стилями
        CSS
      </p>
      <MyButton variant="danger" text="disabled" disabled={true} />
      <MyButton variant="danger" text="danger" />
      <MyButton variant="primary" text="primary" />
    </div>
  );
}
