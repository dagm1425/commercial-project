import "./styles.scss";
import BreadCrumb from "../../common/breadCrumb/Index";
import Overlay from "../../common/overlay/Index";

export default function Index() {
    return (
        <div className="wrapper">
            <div className="projectsHero">
                <BreadCrumb links={["home", "projects"]} />
                <h1>residential projects</h1>
                <p>Whether you seek a cozy standard apartment or a luxurious retreat, our diverse offerings cater to every desire. Immerse yourself in a vibrant community, designed to foster connection and growth. </p>
                <div className="overlay"/>
                <Overlay />
            </div>
        </div>
    )
}