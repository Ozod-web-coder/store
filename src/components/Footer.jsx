import styles from '../styles/footer.module.css'
import { IoSendOutline } from "react-icons/io5";

export function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.inner_text}>
                <div className={styles.input}>
                    <input placeholder={'Enter your email'} className={styles.type} type={"text"}/>
                    <IoSendOutline className={styles.icon}/>
                </div>
                <div className={styles.data}>
                    <p className={styles.sup}>Support</p>
                    <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div className={styles.data}>
                    <p className={styles.sup}>Account</p>
                    <p>My Account</p>
                    <p>Login/Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className={styles.data}>
                    <p className={styles.sup}>Quick Link</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    )
}