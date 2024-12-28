import styles from '../styles/productssecond.module.css'
import {List} from "./list.jsx";





export function ProductsSecond() {

    return (
        <>

            <div className={styles.container}>
                <List/>
                <div className={styles.button}>
                    <p>View All Products</p>
                </div>
            </div>

        </>
    )
}