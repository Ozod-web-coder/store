import styles from '../styles/productssecond.module.css'
import {FaArrowLeft, FaArrowRight} from "react-icons/fa6";


export function Title(){


    return (
        <>
            <div className={styles.title}>
                <div className={styles.text}>
                    <div className={styles.mini}>
                        <div className={styles.spot}></div>
                        <p>Our Products</p>
                    </div>
                    <div className={styles.big}>
                        <p>Explore Our Products</p>
                    </div>
                </div>
                <div className={styles.btns}>
                    <div className={styles.btn}>
                        <FaArrowLeft color={'black'} size={16} />
                    </div>
                    <div className={styles.btn}>
                        <FaArrowRight color={'black'} />
                    </div>
                </div>
            </div>
        </>
    )
}