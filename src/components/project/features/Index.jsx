/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./styles.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Index({ features }) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".projectFeature", {
            opacity: 0,
            y: "20vh",
        }, {
            opacity: 1,
            y: 0,
            duration: .7,
            ease: "power1.out",
            stagger: 0.25,
            scrollTrigger: {
                trigger: ".projectFeaturesWrapper",
                start: "top 70%",
                end: "+=100",
            },
        })
    }, [])
    
    return (
        <div className="projectFeaturesWrapper">
            {features.map((feature, index) => (
                <div className="projectFeature" key={index}>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                </div>
            ))} 
        </div>
    )
}