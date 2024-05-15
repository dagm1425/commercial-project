import styles from "./style.module.scss";
import BreadCrumb from "../../common/bread-crumb/Index";
import Overlay from "../../common/overlay/Index";

export default function Index() {
    return (
    <div className={styles["projects-wrapper"]}>
        <BreadCrumb links={["home", "projects"]} />
        <div className={styles["projects-main"]}>
            <h1>residential projects</h1>
            <p>Whether you seek a cozy standard apartment or a luxurious retreat, our diverse offerings cater to every desire. Immerse yourself in a vibrant community, designed to foster connection and growth. </p>
            <Overlay />
        </div>
    </div>
    )
}