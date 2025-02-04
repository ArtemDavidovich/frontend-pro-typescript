import style from './loader.module.css'

export default function Loader(): JSX.Element {
    return(
        <div className={style.loader} >
            {/* <p>🐈</p> */}
            <p>🛒</p>
        </div>
    )
}