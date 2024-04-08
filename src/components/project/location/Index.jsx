/* eslint-disable react/prop-types */
import styles from "./style.module.scss";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import { useEffect } from "react";

export default function Index({ location }) {
    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     gsap.fromTo(".locationWrapper", {
    //         opacity: 0,
    //         y: "15vh",
    //     }, {
    //         opacity: 1,
    //         y: 0,
    //         duration: .7,
    //         ease: "power1.out",
    //         scrollTrigger: {
    //             trigger: ".locationWrapper",
    //             start: "top 70%",
    //             end: "+=100",
    //         },
    //     })
    // }, [])

    return (
        <div className={styles["location-wrapper"]}>
            <iframe src={location} width="100%" height="420" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}