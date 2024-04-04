import "./styles.scss";
import Overlay from "../../common/overlay/Index";
import BreadCrumb from "../../common/breadCrumb/Index";

export default function Index() {
    return (
        <div className="contactWrapper1">
            <BreadCrumb links={["home", "contact"]} />
            <div className="contactMain1">
                <h1>connect with us</h1>
                <p>we&apos;re here to answer your questions and guide your real estate journey.</p>
            </div>
            <Overlay />
        </div>
    )
}