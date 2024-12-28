import styles from '../styles/banner.module.css'
import { IoIosArrowForward } from "react-icons/io";

export function Categories(){

    return (
        <>
            <div className={styles.categories}>
                <div className={styles.arrow}>
                    <p>Woman’s Fashion</p>
                    <IoIosArrowForward className={styles.icon} color={'black'}/>
                </div>
                <div style={{gap: 82}} className={styles.arrow}>
                    <p>Men’s Fashion</p>
                    <IoIosArrowForward className={styles.icon} color={'black'}/>
                </div>
                <p className={styles.text}>Electronics</p>
                <p className={styles.text}>Home & Lifestyle</p>
                <p className={styles.text}>Medicine</p>
                <p className={styles.text}>Sports & Outdoor</p>
                <p className={styles.text}>Baby’s & Toys</p>
                <p className={styles.text}>Groceries & Pets</p>
                <p className={styles.text}>Health & Beauty</p>
            </div>
            <div className={styles.line}>

            </div>
        </>
    )
}