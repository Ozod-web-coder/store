import styles from '../styles/best.module.css'
import {Card} from "../UI/Card.jsx";


export function Best(){
    return (
        <>
            <div className={styles.container}>
                <div className={styles.data}>
                    <div className={styles.text}>
                        <div className={styles.tone}>
                            <div className={styles.kub}>

                            </div>
                            <p>This Month</p>
                        </div>
                        <div className={styles.ttwo}>
                            <p>Best Selling Products</p>
                        </div>
                    </div>
                    <div className={styles.btn}>
                        <p>View All</p>
                    </div>
                </div>
                <div className={styles.products}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    )
}