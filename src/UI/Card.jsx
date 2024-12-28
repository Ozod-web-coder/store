import styles from '../styles/card.module.css'
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";


export function Card(){
    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <div className={styles.percent}>
                    <p>-40%</p>
                </div>
                <div className={styles.heart}>
                    <FaRegHeart color={'black'} className={styles.icon} />
                </div>
                <img className={styles.image} src={'../images/img_1.png'}/>
                <IoEyeOutline color={'black'} className={styles.eye} />
            </div>
            <div className={styles.data}>
                <div className={styles.td}>
                    <p className={styles.title}>HAVIT HV-G92 Gamepad</p>
                </div>

                <div className={styles.price}>
                    <p className={styles.new}>$120</p>
                    <p className={styles.old}>$160</p>
                </div>
                <div className={styles.rate}>
                    <FaStar className={styles.star} color={'yellow'}/>
                    <FaStar className={styles.star} color={'yellow'}/>
                    <FaStar className={styles.star} color={'yellow'}/>
                    <FaStar className={styles.star} color={'yellow'}/>
                    <FaStar className={styles.star} color={'yellow'}/>
                    <p className={styles.count}>(88)</p>
                </div>
            </div>
        </div>
    )
}