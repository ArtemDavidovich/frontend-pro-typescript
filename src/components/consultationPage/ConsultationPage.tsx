import { Link } from "react-router-dom";
import styles from './consultationPage.module.css'

export default function ConsultationPage() {
  return (
    <div className={styles.gridContainer}>
      <Link to="">
        <div>Consultation 1</div>
      </Link>
      <Link to="">
        <div>Consultation 2</div>
      </Link>
      <Link to="">
        <div>Consultation 3</div>
      </Link>
      <Link to="/consultation-04">
        <div>Consultation 4</div>
      </Link>
      <Link to="/consultation-05">
        <div>Consultation 5</div>
      </Link>
    </div>
  );
}
