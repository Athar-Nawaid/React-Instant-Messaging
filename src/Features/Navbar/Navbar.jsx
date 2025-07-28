import styles from './Navbar.module.css' 
import { Outlet } from 'react-router-dom'

export default function Navbar(){
    return(
        <>
            <div className={styles.navCont}>
                <h1>Instant Messaging</h1>
                <p>Always stay connected with those who matter</p>
            </div>
            <Outlet/>
        </>

    )
}