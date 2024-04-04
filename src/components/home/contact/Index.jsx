import "./styles.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import MainBtn from "../../common/mainBtn/Index";

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
            <h1>Unlock the door<br /> to homeownership</h1>
            <MainBtn link="/contact">contact us</MainBtn>
        </div>
    )
}