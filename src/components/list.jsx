import styles from '../styles/productssecond.module.css'
import {Title} from "./title.jsx";
import {Product_Card} from "../UI/SecondCard.jsx";




export function List(){


    return (
        <>

            <div className={styles.list}>
                <Title/>
                <div className={styles.products}>
                    <div className={styles.block_one}>
                        <Product_Card/>
                        <Product_Card/>
                        <Product_Card/>
                        <Product_Card/>
                    </div>
                    <div className={styles.block_one}>
                        <Product_Card/>
                        <Product_Card/>
                        <Product_Card/>
                        <Product_Card/>
                    </div>
                </div>
            </div>

        </>
    )
}


