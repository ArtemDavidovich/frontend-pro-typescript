// Кнопка “Like” с отображением количества лайков слева от неё.
// Кнопка “Dislike” с отображением количества дизлайков справа от неё.
// Кнопка “Reset Results”, при клике на которую лайки и дизлайки обнуляются.
// Для кнопок используйте компонент MyButton.
// Стили оформления на ваше усмотрение.

import Feedback from "../../components/feedback/Feedback";
import styles from './homework04.module.css'

export default function Homework04(): JSX.Element {
  return (
    <div className={styles.container}>
        <Feedback />
    </div>
  );
}; 