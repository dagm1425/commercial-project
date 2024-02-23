import { Link } from "react-router-dom";
import "./styles.scss";

export default function Index() {
    return (
        <div className="wrapper">
            <div className="projectsHero">
                <p className="snackBar"><Link to='/'>home</Link> / <Link to={'projects'}>projects</Link></p>
                <h1>residential projects</h1>
                <p>Whether you seek a cozy standard apartment or a luxurious retreat, our diverse offerings cater to every desire. Immerse yourself in a vibrant community, designed to foster connection and growth. </p>
            </div>
        </div>
    )
}