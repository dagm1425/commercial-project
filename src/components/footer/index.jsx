import "./styles.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Index() {
    return (
        <div className="footerWrapper">
            <div className="footerContent">
                <div className="leftDiv">
                    {/* <div className="logo">LOGO</div> */}
                    <h2>Addis skyline <br />realty</h2>
                    <p>Lorem ipsum dolor sit amet <br />Addis Ababa, Ethiopia</p>
                </div>
                <div className="centerDiv">
                    <h3>quick links</h3>
                    <a href="">home</a>
                    <a href="">projects</a>
                    <a href="">about</a>
                    <a href="">contact</a>
                </div>
                <div className="rightDiv">
                    <h3>find us on</h3>
                    <div className="socialsWrapper">
                        <a href="">
                            <FaFacebookF />
                        </a>
                        <a href="">
                            <FaInstagram />
                        </a>
                        <a href="">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <p className="footerNote">© 2024 - All Rights Reserved</p>
        </div>
    )
}