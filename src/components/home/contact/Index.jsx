import "./styles.scss";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { LuDot } from "react-icons/lu";
import { BsArrowRightShort } from "react-icons/bs";
import { useGSAP } from "@gsap/react";

export default function Index() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".contactWrapper > div", {
            opacity: 0,
            y: "7vh",
        }, {
            opacity: 1,
            y: 0,
            duration: .7,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".contactWrapper> div",
                start: "top 85%",
                end: "+=200",
            },
        })
    }, []);

    return (
        <div className="contactWrapper">
            <div>
                <h1>Unlock the door<br /> to homeownership</h1>
                <Link to="/contact">
                    <LuDot />
                    <span>contact us</span>
                    <BsArrowRightShort />
                </Link>
            </div>
        </div>
    )
}