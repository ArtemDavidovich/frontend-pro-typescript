import { useEffect, useState } from "react";
import styles from "./userPage.module.css";

interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    zipcode: string;
  };
  phone: string;
}

export default function UserPage(): JSX.Element {
  const [user, setUser] = useState<User[]>([]);

  const fetchUser = async (): Promise<void> => {
    const res = await fetch("https://fakestoreapi.com/users");
    const data = await res.json();

    setUser(
      data.map((element: User) => ({
        id: element.id,
        email: element.email,
        username: element.username,
        password: element.password,
        name: {
          firstname: element.name.firstname,
          lastname: element.name.lastname,
        },
        address: {
          zipcode: element.address.zipcode,
        },
        phone: element.phone,
      }))
    );
  };

  useEffect(() => {
    fetchUser()
  }, []);

  return <div className={styles.mainContainer}>
    {user.map((element) => (
        <div key={element.id} className={styles.userCard}>
            <p>Nickname: {element.username}</p>
            <p>Name: {element.name.firstname} {element.name.lastname}</p>
            <p>Tel: {element.phone}</p>
            <p>E-mail: {element.email}</p>
            <p>Zip-code: {element.address.zipcode}</p>
        </div>
    ))}
  </div>;
}
