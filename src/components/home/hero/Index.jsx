import { useEffect } from "react"
import gsap from "gsap"
import "./styles.scss"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainBtn from "../../common/mainBtn/Index.jsx";

export default function Index() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".heroVid", {
            width: "98vw",
            borderRadius: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".heroVid",
                start: "top 65%",
                end: "+=350",
                scrub: 1,
            },
        })
    }, [])

    const HeroVid = () => {
        return (
            <video src="/videos/hero-vid.mp4" autoPlay muted loop className="heroVid">
                Your browser doesn&apos;t support the video tag.
            </video>
        );
    };

    return (
        <div className="hero">
            <div className="heroText">
                <h1>Built with quality, delivered<br/> on time</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet est modi voluptas tenetur ullam impedit. Accusamus facilis natus voluptates eligendi placeat.</p>
                <MainBtn link="/about">learn more</MainBtn>
            </div>
            <HeroVid /> 
        </div>
    )
}