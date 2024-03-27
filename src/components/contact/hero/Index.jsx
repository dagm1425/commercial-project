import { Link } from "react-router-dom";
import "./styles.scss";

export default function Index() {
    return (
        <div className="contactWrapper1">
            <p className="snackBar">
                <Link to='/'>home</Link> &gt; 
                <span>contact</span>
            </p>
            <div className="contactMain1">
                <h1>connect with us</h1>
                <p>we&apos;re here to answer your questions and guide your real estate journey.</p>
            </div>
            <div className="overlay"/>
        </div>
    )
}