/* eslint-disable react/prop-types */
import "./styles.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

export default function Index({ amenities }) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".amenity2", {
            opacity: 0,
            x: "5vw",
        }, {
            opacity: 1,
            x: 0,
            duration: .7,
            ease: "power1.out",
            stagger: 0.25,
            scrollTrigger: {
                trigger: ".amenitiesWrapper",
                start: "top 70%",
                end: "+=100",
            },
        })
    }, [])

    return (
        <div className="amenitiesWrapper">
            {amenities.map((amenity, index) => (
                <div className="amenity" key={index}>
                    <div className="iconWrapper">
                        <img src={`/icons/${amenity.src}`} alt={amenity.title} />
                    </div>
                    <h3>{amenity.title}</h3>
                    <p>{amenity.desc}</p>
                </div>
            ))}
        </div>
    )
}