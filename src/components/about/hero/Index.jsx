import "./styles.scss";
import Overlay from "../../common/overlay/Index";
import BreadCrumb from "../../common/breadCrumb/Index";

export default function Index() {
    return (
        <div className="aboutWrapper">
            <BreadCrumb links={["home", "about"]} />
            <div className="aboutMain">
                <h1>about us</h1>
                <p>Addis Skyline Realty, an established property development firm, is dedicated to crafting homes that cater to the contemporary lifestyle and meet the preferences of discerning investors. Founded in 2016, Addis Skyline Realty has successfully completed 2 projects, with 2 more currently under development.</p>
                <p>With an emphasis on innovation and a forward-thinking approach, Addis Skyline Realty is proud to introduce luxurious high-end apartments in key areas of Addis Ababa. Our goal is to meet the demand for upscale living in Ethiopia and present lucrative, long-term investment opportunities in the real estate sector.</p>
            </div>
            <Overlay />
        </div>
    )
}