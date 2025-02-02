import styles from './lotrCard.module.css'
import cn from 'classnames'

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
      
      <div className={styles.heroGridContainerHomework05}>
        {array.map((hero) => (
          <div className={styles.heroCardHomework05} key={hero.id}>
            <h2>{hero.name}</h2>
            <div
              className={cn(styles.heroCardWrapperHomework05, hero.isDark ? styles.heroDarkHomework05 : styles.heroLightHomework05)}
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
  );
}


