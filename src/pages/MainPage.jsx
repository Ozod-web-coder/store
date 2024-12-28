import styles from  '../styles/mainpage.module.css'
import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import {Menu} from "../components/Menu.jsx";
import {Categories} from "../components/categories.jsx";
import {Banner} from "../components/banner.jsx";
import {Product} from "../components/Products.jsx";
import {Button} from "../UI/Button.jsx";
import {SecondLine} from "../UI/SecondLine.jsx";
import {Themes} from "../components/Themes.jsx";
import {Best} from "../components/Best.jsx";
import {Music} from "../components/Music.jsx";
import {ProductsSecond} from "../components/ProductsSecond.jsx";
import {News} from "../components/News.jsx";
import {Info} from "../components/info.jsx";




export default function MainPage() {

    return (
        <div className={styles.container}>
            <Header/>
            <Menu/>
            <Categories/>
            <Banner/>
            <Product/>
            <Button/>
            <Themes/>
            <Best/>
            <Music/>
            <ProductsSecond/>
            <News/>
            <Info/>
            <Footer/>
        </div>
    )
}