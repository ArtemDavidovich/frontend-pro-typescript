import { useEffect, useState } from "react";
import styles from "./products.module.css";
import { INumberOfItems, IProduct } from "./types/types";
import ProductCard from "../productCard/ProductCard";
import Loader from "../loader/Loader";
import { useFormik } from "formik";
import MyButton from "../myButton/MyButton";
import * as Yup from "yup";
import Cart from "../cart/Cart";

const schema = Yup.object().shape({
  numberOfItems: Yup.number()
    .typeError("only digits acceptable")
    .integer("must be an integer")
    .min(1, "minimum 1 item")
    .max(20, "maximum 20 items"),
});

export default function Products(): JSX.Element {  

  const [products, setProducts] = useState<IProduct[]>([]);  

  const getProducts = async (): Promise<void> => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data: IProduct[] = await res.json();
    setProducts(data);
  };

  const limitProducts = async (numberOfItems: string): Promise<void> => {
    const res = await fetch(
      `https://fakestoreapi.com/products?limit=${numberOfItems}`
    );
    const data = await res.json();
    setProducts(data);
  };

  const formik = useFormik({
    initialValues: {
      numberOfItems: "",
    } as INumberOfItems,
    validationSchema: schema,
    onSubmit(values, { resetForm }) {
      console.log(values);
      limitProducts(formik.values.numberOfItems);
      resetForm();
    },
  });

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, []);

  return (
    <div className='lessonContainer'>
    <Cart />
    <div className={styles.mainContainer}>
      <form className={styles.formProducts} onSubmit={formik.handleSubmit}>
        <h2>Number of Items to show</h2>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={formik.values.numberOfItems}
            onChange={formik.handleChange}
            name="numberOfItems"
          />
          <MyButton text="Show" type="submit" />
        </div>
        <span className={styles.errorMessage}>
          {formik.errors.numberOfItems}
        </span>
      </form>
      <div className={styles.gridContainer}>
        {products.length > 0 ? (
          <>
            {products.map((product) => (
              <div className={styles.cardContainer}>
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />                
              </div>
            ))}
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
    </div>
  );
}
