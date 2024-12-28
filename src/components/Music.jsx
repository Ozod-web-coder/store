import styles from '../styles/music.module.css'


export function Music(){

    return (
        <>
            <div className={styles.container}>
                <div className={styles.text}>
                    <div className={styles.cat}>
                        <p>Categories</p>
                    </div>
                    <div className={styles.title}>
                        <p>Enhance Your Music Experience</p>
                    </div>
                    <div className={styles.date}>
                        <div className={styles.time}>
                            <p className={styles.num}>23</p>
                            <p className={styles.since}>Hours</p>
                        </div>
                        <div className={styles.wtime}>
                            <p className={styles.num}>05</p>
                            <p className={styles.since}>Days</p>
                        </div>
                        <div className={styles.time}>
                            <p className={styles.num}>59</p>
                            <p className={styles.since}>Minutes</p>
                        </div>
                        <div className={styles.time}>
                            <p className={styles.num}>35</p>
                            <p className={styles.since}>Seconds</p>
                        </div>
                    </div>
                    <div className={styles.btn}>
                        <p>Buy Now!</p>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src={'../images/music.png'} alt=""/>
                </div>
            </div>
        </>
    )
}

