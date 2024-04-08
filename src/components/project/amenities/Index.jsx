/* eslint-disable react/prop-types */
import styles from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

export default function Index({ amenities }) {
    const amenitiesWrapper = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(amenitiesWrapper.current.children, {
            opacity: 0,
            x: "5vw",
        }, {
            opacity: 1,
            x: 0,
            duration: .7,
            ease: "power1.out",
            stagger: 0.25,
            scrollTrigger: {
                trigger: amenitiesWrapper.current,
                start: "top 70%",
                end: "+=100",
            },
        })
    }, [])

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