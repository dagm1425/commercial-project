import styles from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import MainBtn from "../../common/main-btn/Index";
import { useRef } from "react";

export default function Index() {
    const contactWrapper = useRef(null);
    
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(contactWrapper.current.children[0], {
            opacity: 0,
            y: "5vh",
        }, {
            opacity: 1,
            y: 0,
            duration: .7,
            ease: "power1.out",
            scrollTrigger: {
                trigger: contactWrapper.current,
                start: "top 85%",
                end: "+=200",
            },
        })
    }, []);

    return (
        <div ref={contactWrapper} className={styles["contact-wrapper"]}>
            <div>
                <h1>Unlock the door<br />to homeownership</h1>
                <MainBtn link="/contact" variant="variant2">contact us</MainBtn>
            </div>
        </div>
    )
}