/* eslint-disable react/prop-types */
import { useGSAP } from "@gsap/react";
import styles from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

export default function Index({ amenities }) {
    const amenitiesWrapper = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(amenitiesWrapper.current, {
            opacity: 0,
            y: "7vh",
        }, {
            opacity: 1,
            y: 0,
            duration: .7,
            ease: "power1.out",
            scrollTrigger: {
                trigger: amenitiesWrapper.current,
                start: "top 85%",
                end: "+=200",
            },
        })
    }, []);

    return (
        <div ref={amenitiesWrapper} className={styles["amenities-wrapper"]}>
            {amenities.map((amenity, index) => (
                <div className={styles.amenity} key={index}>
                    <div className={styles["icon-wrapper"]}>
                        <img src={`/icons/${amenity.src}`} alt={amenity.title} />
                    </div>
                    <h3>{amenity.title}</h3>
                    <p>{amenity.desc}</p>
                </div>
            ))}
        </div>
    )
}