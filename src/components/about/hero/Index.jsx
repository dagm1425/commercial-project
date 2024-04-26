import styles from "./style.module.scss";
import Overlay from "../../common/overlay/Index";
import BreadCrumb from "../../common/bread-crumb/Index";

export default function Index() {
    return (
        <div className={styles['about-wrapper']}>
            <BreadCrumb links={["home", "about"]} />
            <div className={styles['about-main']}>
                <h1>about us</h1>
                <p>Asaita Properties, an established property development firm, is dedicated to crafting homes that cater to the contemporary lifestyle and meet the preferences of discerning investors. Founded in 2016, Asaita Properties has successfully completed 2 projects, with 2 more currently under development.</p>
            </div>
            <Overlay />
        </div>
    )
}