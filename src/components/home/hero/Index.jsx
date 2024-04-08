import { useEffect, useRef } from "react"
import gsap from "gsap"
import styles from "./style.module.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainBtn from "../../common/main-btn/Index"

export default function Index() {
    const video = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(video.current, {
            width: "98vw",
            borderRadius: 0,
            ease: "none",
            scrollTrigger: {
                trigger: video.current,
                start: "top 65%",
                end: "+=380",
                scrub: 1,
            },
        })
    }, [])

    const HeroVid = () => {
        return (
            <video ref={video} src="/videos/hero-vid.mp4" autoPlay muted loop className={styles["hero-vid"]}>
                Your browser doesn&apos;t support the video tag.
            </video>
        );
    };

    return (
        <div className={styles.hero}>
            <div className={styles["hero-text"]}>
                <h1>Built with quality, delivered<br/> on time</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet est modi voluptas tenetur ullam impedit. Accusamus facilis natus voluptates eligendi placeat.</p>
                <MainBtn link="/about">learn more</MainBtn>
            </div>
            <HeroVid /> 
        </div>
    )
}