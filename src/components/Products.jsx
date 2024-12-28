import styles from '../styles/products.module.css'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import {Card} from "../UI/Card.jsx";
import {Cards} from "./Cards.jsx";
import {Button} from "../UI/Button.jsx";

export function Product(){
    return (
        <>

            <div className={styles.products}>
                <div className={styles.data}>
                    <div className={styles.text}>
                        <div className={styles.tf}>
                            <div className={styles.kt}>
                                <div className={styles.kub}></div>
                                <p className={styles.today}>
                                    Today’s
                                </p>
                            </div>

                            <p className={styles.flash}>
                                Flash Sales
                            </p>
                        </div>

                        <div className={styles.time}>
                            <div className={styles.hours}>
                                <p style={{color:'rgb(250, 250, 250)'}} className={styles.h}>Days</p>
                                <p style={{color:'rgb(250, 250, 250)'}} className={styles.num}>03</p>
                            </div>

                            <div className={styles.ps}>
                                <div className={styles.point}></div>
                                <div className={styles.point}></div>
                            </div>
                            <div className={styles.hours}>
                                <p className={styles.h}>Hours</p>
                                <p className={styles.num}>23</p>
                            </div>
                            <div className={styles.ps}>
                                <div className={styles.point}></div>
                                <div className={styles.point}></div>
                            </div>
                            <div className={styles.hours}>
                                <p className={styles.h}>Minutes</p>
                                <p className={styles.num}>19</p>
                            </div>
                            <div className={styles.ps}>
                                <div className={styles.point}></div>
                                <div className={styles.point}></div>
                            </div>
                            <div className={styles.hours}>
                                <p className={styles.h}>Seconds</p>
                                <p className={styles.num}>56</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.btns}>
                        <div className={styles.btn}>
                            <FaArrowLeft color={'black'} />
                        </div>
                        <div className={styles.btn}>
                            <FaArrowRight color={'black'} />
                        </div>
                    </div>
                </div>
                <Cards/>
            </div>

        </>
    )
}