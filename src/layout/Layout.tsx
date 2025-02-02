import { Outlet } from 'react-router-dom'
import styles from './layout.module.css'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

export default function Layout(): JSX.Element {
    return(
        <>
        <Header />
        <main className={styles.main}>
            {/* вместо  компонента Outlet из React Route будут приходить компоненты из маршрутизации, которую мы описываем в App.tsx */}
            <Outlet />
        </main>
        <Footer />
        </>
    )
}