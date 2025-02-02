import { useFormik } from "formik";
import styles from "./formGender.module.css";
import MyButton from "../myButton/MyButton";
import { useState } from "react";
import cn from "classnames";

interface IGender {
  name: string;
  gender?: "male" | "female";
}

interface IFormGender {
  name: string;
}

export default function FormGender(): JSX.Element {
  const [name, setName] = useState<IGender[]>([]);
  // const [isName, setIsName] = useState<boolean>(false)

  const fetchName = async (firstname: string): Promise<void> => {
    const res = await fetch(`https://api.genderize.io/?name=${firstname}`);
    const data = await res.json();
    const { name, gender } = data;
    setName((prev) => [...prev, { name, gender }]);
    console.log(name);
    clearInput();
    // setIsName(true);
  };

  function clearInput(): void {
    formik.values.name = "";
  }

  function clearList(): void {
    setName([]);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
    } as IFormGender,
    onSubmit: (values: IFormGender) => {
      fetchName(values.name);
    },
  });

  return (
    <div className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <input
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="type any name"
            type="text"
            name="name"
          />
          <MyButton variant="primary" type="submit" text="Fetch name" />
        </form>
      </div>
      <div className={styles.listContainer}>
        <div className={styles.scrollWrapper}>
          <ol
            className={name.length > 0 ? styles.olShow : styles.elementHidden}
          >
            {name.map((element) => (
              <p
                className={cn({
                  [styles.liMale]: element.gender === "male",
                  [styles.liFemale]: element.gender === "female",
                })}
              >
                {element.name}
              </p>
            ))}
          </ol>
        </div>
        <MyButton
          variant="danger"
          type="button"
          text="Clear the List of Names"
          func={clearList}
          hidden={name.length > 0 ? false : true}
        />
      </div>
    </div>
  );
}
