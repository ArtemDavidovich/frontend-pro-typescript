import ProfileCard from "../../components/profileCard/ProfileCard";

import styles from './homework02.module.css'

export default function Homework02(): JSX.Element{
    const naruto = {
        name: 'Naruto Uzumaki',
        image: 'https://i.pinimg.com/originals/47/fd/b0/47fdb0c434c9ebc47091569af6b36629.png',
        profession: 'Hokage',
        hobby: 'Ramen'
    };

    const sasuke = {
        name: 'Sasuke Uchiha',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/16825168-8b56-4bef-80cb-89abe4d1be01/dcw75wh-e707a1f2-fbd2-4817-b3a7-f56abef68d44.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE2ODI1MTY4LThiNTYtNGJlZi04MGNiLTg5YWJlNGQxYmUwMVwvZGN3NzV3aC1lNzA3YTFmMi1mYmQyLTQ4MTctYjNhNy1mNTZhYmVmNjhkNDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.me7A9SYj7_9-qRA_6ATxl38M3fViq8DyNV031QygRMw',
        profession: 'Avenger',
        hobby: 'Training'
    };

    const sakura = {
        name: 'Sakura Haruno',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dcwpwpu-ec71278e-6f53-4fdd-96dd-fb622ec7229f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGN3cHdwdS1lYzcxMjc4ZS02ZjUzLTRmZGQtOTZkZC1mYjYyMmVjNzIyOWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7kFHkOy58g8nHWoRtJHU_Lkz5-rQyXhPoTHNTqtz-XU',
        profession: 'Medical Ninja',
        hobby: 'Reading'
    };
  
        return (
        <div className={styles.container}>
            <h1>Naruto Characters</h1>,        
            <ProfileCard {...naruto} />,
            <ProfileCard {...sasuke} />,
            <ProfileCard {...sakura} />
        </div>
        );    
};