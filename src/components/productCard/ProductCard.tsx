import { Link } from "react-router-dom";
import styles from "./productCard.module.css";

interface IProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  title,
  price,
  image,
}: IProductCardProps): JSX.Element {
  return (
    <div className={styles.shopContainerCard} key={id}>
      <Link to={String(id)}>
        <h4>{title.length < 20 ? title : title.slice(0, 20) + '...'}</h4>
        <div className={styles.imageWrapper}>
          <img src={image} alt="" />
        </div>
        <p>Price: {price}€</p>
      </Link>
    </div>
  );
}
