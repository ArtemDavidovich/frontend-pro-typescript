import { fellowship } from "./fellowship";
import "./lesson05.css";

export default function Lesson05() {
  console.log(fellowship);

  return (
    <div >
      <h2>React map() components</h2>

      <div className="heroGridContainerLesson05">
        {fellowship.map((hero) => (
          // не забываем для созданного в итерации элемента использовать key prop, в который передаем что-то уникальное от каждого элемента во избежании возможных ошибок при отрисовке

          <div className="heroCardLesson05" key={hero.id}>            
            <h2>{hero.name}</h2>
            <div
              className={`heroCardWrapperLesson05 ${
                hero.isDark ? "heroDarkLesson05" : "heroLightLesson05"
              }`}
            >
              <img src={hero.image} alt={hero.name} />
            </div>
            <p>{hero.age} years old</p>
            <p>{hero.isDark ? "Villain 😡" : "Hero 😎"}</p>
            <p>
              Weapons:{" "}
              {hero.weapons.length === 0
                ? "none"
                : hero.weapons.map((weapon) => weapon).join(", ")}
            </p>
            
          </div>
        ))}
      </div>
    </div>
  );
}


