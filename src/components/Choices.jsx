import styles from '../styles/themes.module.css'
import {Block} from "../UI/Block.jsx";


export function Choice(){

    return (
        <>
            <div className={styles.choice}>
                <Block/>
                <Block/>
                <Block/>
                <Block/>
                <Block/>
            </div>
        </>
    )
}