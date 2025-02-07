import { useEffect, useState } from "react";
import styles from "./store.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import StoreCard from "../storeCard/StoreCard";
import Loader from "../loader/Loader";
import Cart from "../cart/Cart";

export interface IStore {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string;
  reviews: [
    {
      rating: number;
    }
  ];
}

export interface ILimitOfProducts {
  limit: string;
}

const validationSchema = Yup.object().shape({
  limit: Yup.number()
    .typeError("must be a number")
    .integer("must be an integer")
    .min(1, "minimum 1 item")
    .max(30, "maximum 30 items"),
});

export default function Store(): JSX.Element {
  const [store, setStore] = useState<IStore[]>([]);

  const getProducts = async (): Promise<void> => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setStore(data.products);
  };

  const limitProducts = async (limit: string): Promise<void> => {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
    const data = await res.json();
    setStore(data.products);
  };

  const formik = useFormik({
    initialValues: {
      limit: "",
    } as ILimitOfProducts,
    validationSchema,
    onSubmit(values, { resetForm }) {
      limitProducts(formik.values.limit);
      resetForm();
    },
  });

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 1500);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Cart />
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <button type="submit">Show</button>
          <input
            style={{
              color: "#213547",
              width: "40px",
              height: "30px",
              textAlign: "center",
              fontSize: "medium",
              fontWeight: "bold",
              backgroundColor: '#c2c6c9',
            }}
            type="text"
            value={formik.values.limit}
            name="limit"
            onChange={formik.handleChange}
          />
          <h3>items</h3>
        </form>
        <span className={styles.errorMessage}>{formik.errors.limit}</span>
      </div>
      {store.length > 0 ? (
        <div className={styles.galleryContainer}>
          {store.map((item) => (
            <StoreCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              discountPercentage={item.discountPercentage}
              description={item.description}
              thumbnail={item.thumbnail}
              rating={item.rating}
              stock={item.stock}
              reviews={item.reviews}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
