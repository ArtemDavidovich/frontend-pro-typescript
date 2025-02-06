import { createContext, useContext, useState } from "react";

// типизируем элемент корзины
interface ICartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

// типизируем содержание контекста
// это те данные, которые будут доступны для всех компонентов, обернутых компонентом-оберткой с этим контекстом
// обернутые компоненты получат доступ к этим данным и функциям
interface ICartContextType {
  // массив из элементов корзины
  cart: ICartItem[];
  // функция добавления в корзину
  addToCart: (product: ICartItem) => void;
  // удаление элемента из корзины
  removeFromCart: (id: number) => void;
  // удаление одной штуки конкретного товара
  removeOneItem: (id: number) => void;
  // очистка корзины
  clearCart: () => void;
  // общая стоимость товаров
  totalPrice: number;
  
}

// * 1 создаем контекст c помощью встроенного в react метода createContext() и передаем начальное значение
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<ICartContextType | undefined>(
  undefined
);

// * 2 обертка для компонентов с использованием контекста
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // здесь мы пропишем содержимое для передачи в контекст
  const [cart, setCart] = useState<ICartItem[]>([]);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addToCart = (product: ICartItem) => {
    setCart((prevCart) => {
      // проверяем, есть ли такой продукт в корзине, сравнив id переданного продукта с id продуктов внутри массива из корзины
      const productExist = prevCart.find((item) => item.id === product.id);
      // если продукт уже существует, мы на одно значение увеличиваем его количество (quantity) и возвращаем новый массив с изменениями
      if (productExist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    setTotalPrice((prevPrice) => parseFloat((prevPrice + product.price).toFixed(2)));
  };

  const removeFromCart = (id: number) => {
    // в метод filter() мы передаем условие для фильтрации
    // в ответ получаем новый массив элементов
    // если элемент удовлетворяет условию - он попадает в новый массив
    // если ни один из элементов не совпал с условием - мы получаем пустой массив
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));

    setTotalPrice((prevPrice) => {
      const removedProduct = cart.find((product) => product.id === id);
      return removedProduct
        ? parseFloat(
            (
              prevPrice -
              removedProduct.price * removedProduct.quantity
            ).toFixed(2)
          )
        : prevPrice;
    });
  };

  const removeOneItem = (id: number) => {
    setCart((prevCart) => {      
      return prevCart.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter((item) => item.quantity > 0);
    })

    setTotalPrice((prevPrice) => {
      const removedItem = cart.find((product) => product.id === id);
      return removedItem
        ? parseFloat(
            (
              prevPrice -
              removedItem.price
            ).toFixed(2)
          )
        : prevPrice;
    })
  }

  const clearCart = () => {
    setCart([]);
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeOneItem, clearCart, totalPrice }}
    >
      {/* вместо children придут обернутые компоненты */}
      {children}
    </CartContext.Provider>
  );
};

// ! функция для получения данных из этого контекста
// будет использована не здесь, а в тех компонентах, где будут нужны данные для корзины
// объявляем здесь, но экспортируем и используем не здесь
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  // используем хук useContext для получения данных из выбранного контекста (в данном случае контекста корзины)
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("no such context 😣");
  }
  return context;
};
