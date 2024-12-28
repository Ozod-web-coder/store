import styles from '../styles/menu.module.css';
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import {Line} from "../UI/LIne.jsx";
export function Menu(){
    return (
        <>
            <div className={styles.menu}>
                <div className={styles.ex}>
                    <p>Exclusive</p>
                </div>
                <div className={styles.ways}>
                    <p>Home</p>
                    <p>Contact</p>
                    <p>About</p>
                    <p>Sign Up</p>
                </div>
                <div className={styles.search}>
                    <div className={styles.inp_search}>
                        <input className={styles.input} placeholder="What are you looking for?"/>
                        <CiSearch className={styles.i_icon} color={'black'}/>
                    </div>
                    <CiHeart color={'black'} className={styles.icon}/>
                    <BsCart3 color={'black'} className={styles.icon}/>
                </div>
            </div>
            <Line/>
        </>


    )
}