import styles from '../styles/themes.module.css'
import { CiCamera } from "react-icons/ci";

export function Block(){


    return (
        <div className={styles.block}>
            <CiCamera color={'black'} className={styles.icon}/>
            <div className={styles.name}>
                <p>
                    Camera
                </p>
            </div>
        </div>
    )
}