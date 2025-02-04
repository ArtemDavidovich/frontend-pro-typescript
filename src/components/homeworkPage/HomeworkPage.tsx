import { Link } from "react-router-dom";
import styles from './homeworkPage.module.css'

export default function HomeworkPage() {
  return (    
      <div className={styles.gridContainer}>
        <Link to='/homework-01'><div>Homework 1</div></Link>
        <Link to='/homework-02'><div>Homework 2</div></Link>
        <Link to='/homework-03'><div>Homework 3</div></Link>
        <Link to='/homework-04'><div>Homework 4</div></Link>
        <Link to='/homework-05'><div>Homework 5</div></Link>
        <Link to='/homework-06'><div>Homework 6</div></Link>
        <Link to='/homework-07'><div>Homework 7</div></Link>
        <Link to='/homework-08'><div>Homework 8</div></Link>
        <Link to='/homework-09'><div>Homework 9</div></Link>
        <Link to='/homework-10'><div>Homework 10</div></Link>
      </div>    
  );
}
