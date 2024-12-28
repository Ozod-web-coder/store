import styles from '../styles/news.module.css'




export function News(){

    return (
        <>

            <div className={styles.container}>
                <div className={styles.data}>
                    <div className={styles.kf}>
                        <div className={styles.k}>
                        </div>
                        <div className={styles.f}>
                            <p>Featured</p>
                        </div>

                    </div>
                    <div className={styles.big}>
                        <p>New Arrival</p>
                    </div>
                </div>
                <div className={styles.banners}>
                    <div className={styles.first}>
                        <div className={styles.photo_1}>
                            <div className={styles.data_1}>
                                <div className={styles.ps}>
                                    <p>PlayStation 5</p>
                                </div>
                                <div className={styles.info}>
                                    <p>Black and White version of the PS5 coming out on sale.</p>
                                </div>
                                <div className={styles.add}>
                                    <p>Shop Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.second}>
                        <div className={styles.photo_2}>
                            <div className={styles.data_2}>
                                <div className={styles.title}>
                                    <p>Women’s Collections</p>
                                </div>
                                <div className={styles.info_2}>
                                    <p>Featured woman collections that give you another vibe.</p>
                                </div>
                                <div className={styles.add}>
                                    <p>Shop Now</p>
                                </div>

                            </div>
                            <div className={styles.img}>

                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.photo_3}>

                                <div className={styles.data_3}>
                                    <div className={styles.title_1}>
                                        <p>Speakers</p>
                                    </div>
                                    <div className={styles.info_3}>
                                        <p>Amazon wireless speakers</p>
                                    </div>
                                    <div className={styles.add}>Shop Now</div>
                                </div>
                                <div className={styles.img_2}>

                                </div>
                            </div>
                            <div className={styles.photo_4}>
                                <div className={styles.data_4}>
                                    <div className={styles.title_2}>
                                        <p>Perfume</p>
                                    </div>
                                    <div className={styles.info_4}>
                                        GUCCI INTENSE OUD EDP
                                    </div>
                                    <div className={styles.add}>Shop Now</div>
                                </div>
                                <div className={styles.img_3}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
