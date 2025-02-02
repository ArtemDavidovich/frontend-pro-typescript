import styles from './homework01.module.css'

export default function Homework01(): JSX.Element {
    return (
        <div className={styles.artemContainer}>
            <div className={styles.artem}>
                <img src='file_example.jpg' width={300} alt="artem-img" />
                <h2>Artem Davidovich</h2>
                <h3>Hobbies:</h3>
                <p>• Football</p> 
                <p>• Movies</p> 
                <p>• Videogames</p> 
                <p>• Travelling</p>         
            </div>
        </div>
    )
}
