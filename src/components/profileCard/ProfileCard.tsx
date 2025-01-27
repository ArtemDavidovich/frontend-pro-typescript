import "./profileCard.css";

interface ICharacterCard {
  image: string;
  name: string;
  profession: string;
  hobby: string;
}

export default function ProfileCard({ image, name, profession, hobby }: ICharacterCard) {
  return (
    <div className="profileCardContainer">
      <div className="profileCardBackground">
        <div className="profileCard">
          <img src={image} height={300} alt={name} />
          <h2>{name}</h2>
          <h3>Profession: </h3>
          <p>{profession}</p>
          <h3>Hobby: </h3>
          <p>{hobby}</p>
        </div>
      </div>
    </div>
  );
}
