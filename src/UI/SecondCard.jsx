import styles from '../styles/productssecond.module.css'
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";



export function Product_Card(){
    return(
        <>

            <div className={styles.card}>
                <div className={styles.image}>
                    <div className={styles.img}>

                    </div>
                    <div className={styles.icons}>
                        <div className={styles.heart}>
                            <FaRegHeart className={styles.icon} />
                        </div>
                        <div className={styles.eye}>
                            <IoEyeOutline className={styles.icon}/>
                        </div>
                    </div>
                </div>
                <div className={styles.data}>
                    <div className={styles.name}>
                        <p>Quilted Satin Jacket</p>
                    </div>
                    <div className={styles.pr}>
                        <p className={styles.price}>
                            $660
                        </p>
                        <div>
                            <FaStar color={'yellow'} size={20}/>
                            <FaStar color={'yellow'} size={20}/>
                            <FaStar color={'yellow'} size={20}/>
                            <FaStar color={'yellow'} size={20}/>
                            <FaStar color={'yellow'} size={20}/>
                        </div>
                        <div className={styles.count}>
                            (55)
                        </div>
                    </div>
                    <div className={styles.color}>
                        <div className={styles.green}>
                            <div className={styles.inner}>

                            </div>
                        </div>
                        <div className={styles.gray}></div>
                    </div>
                </div>
            </div>

        </>
    )

}