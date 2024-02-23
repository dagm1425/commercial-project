import { useEffect } from "react"
import gsap from "gsap"
import "./styles.scss"
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Index() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".heroVid", {
            scale: 1.15,
            ease: "none",
            scrollTrigger: {
                trigger: ".heroVid",
                start: "top center",
                // end: "+=500",
                scrub: 1,
                markers: false,
                // pin: true,
                // pinSpacing: false,
                // anticipatePin: 0,
                // onEnter: () => gsap.set(".heroVid", { autoAlpha: 1 }),
                // onLeaveBack: () => gsap.set(".heroVid", { autoAlpha: 0 })
            },
            // paused: true
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet est modi voluptas tenetur ullam impedit.<br/> Accusamus facilis natus voluptates eligendi placeat.</p>
            </div>
            <HeroVid />
        </div>
    )
}