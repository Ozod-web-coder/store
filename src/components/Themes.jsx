import styles from '../styles/themes.module.css'
import {FaArrowLeft, FaArrowRight} from "react-icons/fa6";
import {Choice} from "./Choices.jsx";



export function Themes(){
    return (
        <>
            <div className={styles.themes}>
                <div className={styles.data}>
                    <div className={styles.text}>
                        <div className={styles.tf}>
                            <div className={styles.kt}>
                                <div className={styles.kub}></div>
                                <p className={styles.today}>
                                    Categories
                                </p>
                            </div>

                            <p className={styles.flash}>
                                Browse By Category
                            </p>
                        </div>
                    </div>
                    <div className={styles.btns}>
                        <div className={styles.btn}>
                            <FaArrowLeft color={'black'}/>
                        </div>
                        <div className={styles.btn}>
                            <FaArrowRight color={'black'}/>
                        </div>
                    </div>
                </div>
                <Choice/>
            </div>
            <div className={styles.line}>

            </div>
        </>

    )
}