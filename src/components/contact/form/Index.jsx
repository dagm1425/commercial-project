import { useEffect } from "react";
import "./styles.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { BsArrowRightShort } from "react-icons/bs";

export default function Index() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".contactWrapper2", {
            opacity: 0,
            y: "5vh",
        }, {
            opacity: 1,
            y: 0,
            duration: .7,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".contactWrapper2",
                start: "top 80%",
                end: "+=100",
            },
        })
    }, []);

    return (
        <div className="contactWrapper2">
            <div className="contactInfo1">
                <div className="contactItem">
                    <p>visit us</p>
                    <p>haya hulet, woreda 08, alemnesh plaza<br/> addis abeba, ethiopia</p>
                </div>
                <div className="contactItem">
                    <p>call us</p>
                    <p>Mon-Fri from 10am to 6pm <br/>+251 118 71 26 63/64/65</p>
                </div>
                <div className="contactItem">
                    <p>chat to us</p>
                    <p>info@asaitaproperties.com</p>
                </div>
                <div className="contactItem">
                    <p>social media</p>
                    <div className="socialsWrapper1">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaXTwitter /></a>
                    </div>
                </div>
            </div>
            <form className="contactForm1">
                <div className="userInfo1">
                    <div className="formGroup">
                        <label htmlFor="user_name">name</label>
                        <input id="user_name" type="text" name="user_name" required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="user_email">email</label>
                        <input id="user_email" type="text" name="user_email" required />
                    </div>
                </div>
                <div className="formGroup">
                        <label htmlFor="subject">subject</label>
                        <input id="subject" type="text" name="subject" required />
                </div>
                <div className="formGroup">
                        <label htmlFor="user_message">message</label>
                        <textarea id="user_message" name="user_message" rows={1} cols={45} required ></textarea>
                </div>
                <button type="submit">
                    <LuDot />
                    <span>send message</span>
                    <BsArrowRightShort />
                </button>
            </form>
        </div>
    )
}