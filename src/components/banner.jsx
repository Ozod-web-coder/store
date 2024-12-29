import styles from '../styles/banner.module.css'
import { FaApple } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export function Banner(){

    return (
        <>
            <div className={styles.banner}>

                <div className={styles.block}>
                    <div className={styles.data}>
                        <div className={styles.title}>
                            <FaApple className={styles.icon_2}/>
                            <div className={styles.name}>
                                <p>iPhone 14 Series</p>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <p>Up to 10% off Voucher</p>
                        </div>
                        <div className={styles.ads}>
                            <p>Shop Now</p>
                            <FaArrowRightLong className={styles.arrow}/>
                        </div>
                    </div>
                    <div className={styles.image}></div>
                    <div className={styles.points}>
                        <div className={styles.gray}></div>
                        <div className={styles.gray}></div>
                        <div className={styles.white}></div>
                        <div className={styles.gray}></div>
                        <div className={styles.gray}></div>
                    </div>
                </div>


            </div>
        </>
    )
}