import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Consultation04 from "./consultations/consultation04/Consultation04";
import Homework07 from "./homeworks/homework07/Homework07";
import Homework08 from "./homeworks/homework08/Homework08";
import Lesson04 from "./lessons/lesson04_react_use_state/Lesson04";
import Lesson05 from "./lessons/lesson05_react_map/Lesson05";
import Lesson06 from "./lessons/lesson06/Lesson06";
import Lesson07 from "./lessons/lesson07/Lesson07";
import Lesson08 from "./lessons/lesson08/Lesson08";
import Lesson09 from "./lessons/lesson09/Lesson09";
import Lesson10 from "./lessons/lesson10/Lesson10";
import Layout from "./layout/Layout";
import NoPage from "./components/noPage/NoPage";
import HomePage from "./components/homePage/HomePage";
import HomeworkPage from "./components/homeworkPage/HomeworkPage";
import ConsultationPage from "./components/consultationPage/ConsultationPage";
import Consultation05 from "./consultations/consultation05/Consultation05";
import Lesson03 from "./lessons/lesson03_react_props/Lesson03";
import Lesson02 from "./lessons/lesson02_react_components/Lesson02";
import Lesson01 from "./lessons/lesson01_react_intro/Lesson01";
import Homework01 from "./homeworks/homework01/Homework01";
import Homework02 from "./homeworks/homework02/Homework02";
import Lesson11 from "./lessons/lesson11/Lesson11";
import Lesson12 from "./lessons/lesson12/Lesson12";
import Homework03 from "./homeworks/homework03/Homework03";
import Homework06 from "./homeworks/homework06/Homework06";
import Homework04 from "./homeworks/homework04/Homework04";
import Homework09 from "./homeworks/homework09/Homework09";
import Homework05 from "./homeworks/homework05/Homework05";
import Lesson13 from "./lessons/lesson13/Lesson13";
import Homework10 from "./homeworks/homework10/Homework10";
import FormLogin from "./components/formLogin/FormLogin";
import FormRegistration from "./components/formRegistration/FormRegistration";
import Lesson14 from "./lessons/lesson14/Lesson14";
import ProductPage from "./components/productPage/ProductPage";
import Homework11 from "./homeworks/homework11/Homework11";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import Lesson16 from "./lessons/lesson16/Lesson16";
import Lesson17 from "./lessons/lesson17/Lesson17";
import Store from "./components/store/Store";
import StorePage from "./components/storePage/StorePage";
import { Provider } from "react-redux";
import { store } from "./app/store";

export default function App(): JSX.Element {
  return (
    // ! обернули все приложение в компонент Provider из Redux и передали ему в качестве props store
    <Provider store={store}>
      {/* обернули все приложение в компонент-обертку CartProvider */}
      <CartProvider>
        {/* оборачиваем все приложение в компонент HashRouter из библиотеки React Router */}
        <HashRouter>
          {/* импортируем компонент Routes (пути) вокруг всех компонентов приложения */}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="homework-page" element={<HomeworkPage />} />
              <Route path="consultation-page" element={<ConsultationPage />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id/" element={<ProductPage />} />
              <Route path="cart" element={<Cart />} />

              <Route path="store" element={<Store />} />
              <Route path="store/:id/" element={<StorePage />} />

              <Route path="lesson-01" element={<Lesson01 />} />
              <Route path="lesson-02" element={<Lesson02 />} />
              <Route path="lesson-03" element={<Lesson03 />} />
              <Route path="lesson-04" element={<Lesson04 />} />
              <Route path="lesson-05" element={<Lesson05 />} />
              <Route path="lesson-06" element={<Lesson06 />} />
              <Route path="lesson-07" element={<Lesson07 />} />
              <Route path="lesson-08" element={<Lesson08 />} />
              <Route path="lesson-09" element={<Lesson09 />} />
              <Route path="lesson-10" element={<Lesson10 />} />
              <Route path="lesson-11" element={<Lesson11 />} />
              <Route path="lesson-12" element={<Lesson12 />} />
              <Route path="lesson-13" element={<Lesson13 />} />
              <Route path="lesson-13" element={<Lesson13 />} />
              <Route path="lesson-14" element={<Lesson14 />} />
              <Route path="lesson-16" element={<Lesson16 />} />
              <Route path="lesson-17" element={<Lesson17 />} />

              <Route path="homework-01" element={<Homework01 />} />
              <Route path="homework-02" element={<Homework02 />} />
              <Route path="homework-03" element={<Homework03 />} />
              <Route path="homework-04" element={<Homework04 />} />
              <Route path="homework-05" element={<Homework05 />} />
              <Route path="homework-06" element={<Homework06 />} />
              <Route path="homework-07" element={<Homework07 />} />
              <Route path="homework-08" element={<Homework08 />} />
              <Route path="homework-09" element={<Homework09 />} />
              <Route path="homework-10" element={<Homework10 />} />
              <Route path="homework-11" element={<Homework11 />} />

              <Route path="consultation-04" element={<Consultation04 />} />
              <Route path="consultation-05" element={<Consultation05 />} />

              <Route path="*" element={<NoPage />} />

              {/* different staff */}
              <Route path="login-form" element={<FormLogin />} />
              <Route path="registration-form" element={<FormRegistration />} />
            </Route>
          </Routes>
        </HashRouter>
      </CartProvider>
    </Provider>
  );
}
