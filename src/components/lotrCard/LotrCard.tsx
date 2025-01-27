import './lotrCard.css'

interface IHero {
  id: number;
  name: string;
  age: number;
  isDark: boolean;
  weapons: string[];
  image: string;
}

interface IHeroArray {
  array: IHero[];
}

export default function LotrCard({ array }: IHeroArray): JSX.Element {
  return (
    <div>
      <h1>Lord of the Rings Characters</h1>
      <div className="heroGridContainerLesson05">
        {array.map((hero) => (
          <div className="heroCardHomework05" key={hero.id}>
            <h2>{hero.name}</h2>
            <div
              className={`heroCardWrapperHomework05 ${
                hero.isDark ? "heroDarkHomework05" : "heroLightHomework05"
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


