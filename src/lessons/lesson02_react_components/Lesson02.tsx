import MyButton from "../../components/myButton/MyButton";

interface IObj {
    library?: string;
    developer?: string;
    logo?: string;
}

export default function Lesson02(): JSX.Element {
  const element = <h4>Это JSX элемент из переменной element!</h4>;
  const text = "это строка из переменной text..";

  // объект 1
  const react = {
    library: "React",
    developer: "Meta",
    logo: "https://cdn.pixabay.com/photo/2022/01/18/08/43/meta-6946620_960_720.jpg",
  };

  // объект 2
  const angular = {
    library: "Angular",
    developer: "Google",
  };

  // функция обрабатывающая ключи переданных объектов и создающих новую строку
  function showDeveloper(obj: IObj) {
    if (obj.developer && obj.library) {
      return `Developer of ${obj.library} is ${obj.developer}`;
    }
    return "Not valid data 😪";
  }

  const isLoggedIn = true;

  return (
    <div>
      <h2>React JSX components 👓</h2>
      <p>
        В JSX мы можем пользоваться динамическими данными, которые приходят из
        тела функции react компонента или других файлов.
      </p>
      {element}
      <p>Здесь будет строка: {text}</p>
      {/* в фигурных скобках в верстке JSX можно использовать логические конструкции JS - в том числе числовые и вызовы функций */}
      <p>Это вычисление случилось в JSX: {40 * 42}</p>
      {/* пример вызова функции внутри тегов JSX */}
      <p>{showDeveloper(react)}</p>
      <p>{showDeveloper(angular)}</p>      
      {/* пример использования тернарного оператора в JSX */}
      {isLoggedIn ? (
        <img width={"250px"} src={react.logo} alt="" />
      ) : (
        <h4>To see image you need to authorize!</h4>
      )}
      {/* пример множественного импорта компонентов в файл */}
      <div>
        <MyButton />
        <MyButton />
        <MyButton />
      </div>
    </div>
  );
}
