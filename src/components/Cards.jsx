import styles from '../styles/card.module.css'
import {Card} from "../UI/Card.jsx";



export function Cards(){
    return (
        <div className={styles.cards}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}