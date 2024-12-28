import styles from '../styles/info.module.css'
import { BsTruck } from "react-icons/bs";
import { PiHeadphonesLight } from "react-icons/pi";
import { GoShieldCheck} from "react-icons/go";


export function Info(){

    return (
        <>
            <div className={styles.container}>
                <div className={styles.block}>
                    <div className={styles.info}>
                        <div className={styles.inner}>
                            <BsTruck className={styles.icon}/>
                        </div>
                    </div>
                    <div className={styles.text_1}>
                        <p>FREE AND FAST DELIVERY</p>
                    </div>
                    <div className={styles.text_2}>
                        <p>Free delivery for all orders over $140</p>
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.info}>
                        <div className={styles.inner}>
                            <PiHeadphonesLight className={styles.icon}/>
                        </div>
                    </div>
                    <div className={styles.text_1}>
                        <p>24/7 CUSTOMER SERVICE</p>
                    </div>
                    <div className={styles.text_2}>
                        <p>Friendly 24/7 customer support</p>
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.info}>
                        <div className={styles.inner}>
                            <GoShieldCheck className={styles.icon}/>
                        </div>
                    </div>
                    <div className={styles.text_1}>
                        <p>MONEY BACK GUARANTEE</p>
                    </div>
                    <div className={styles.text_2}>
                        <p>We reurn money within 30 days</p>
                    </div>
                </div>
            </div>
        </>
    )
}