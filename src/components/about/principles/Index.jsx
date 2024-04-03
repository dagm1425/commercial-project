import { useEffect } from "react";
import "./styles.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Index() {
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
            scrollTrigger: {
                trigger: ".projectFeaturesWrapper",
                start: "top 70%",
                end: "+=100",
            },
        })
    }, [])
    const principles = [
        {
            title: "EXPERIENCE",
            desc: "Addis Skyline Realty is led by an executive body of industry veterans with a long-proven track record of success. Their combined expertise in development, sales and leasing, finance, asset management, operations, and design support Addis Skyline Realty’s strategy of creating extreme value through unique vision and flawless execution.",
        },
        {
            title: "EXCELLENCE",
            desc: "At Addis Skyline Realty, excellence is a guiding principle that permeates every project in Addis Ababa, Ethiopia. We strive for unparalleled quality in real estate development, ensuring meticulous attention to detail. From innovative designs to sustainable practices, our commitment to excellence is evident in every aspect of our work. It's not just a standard; it's our unwavering dedication to delivering exceptional properties that stand the test of time.",
        },
        {
            title: "EXECUTION",
            desc: "Execution is a fundamental principle at Addis Skyline Realty, shaping our approach to real estate development in Addis Ababa, Ethiopia. We pride ourselves on translating vision into reality with precision and efficiency. Through meticulous planning, proactive problem-solving, and seamless implementation, we ensure that each project is executed with the utmost professionalism.",
                }
    ];
    
    return (
        <div className="projectFeaturesWrapper">
            <div className="projectFeaturesHeader">
                <h2>our guiding principles</h2>
                <hr/>
            </div>
            <div className="projectFeaturesGrid">
                {principles.map((principle, i) => (
                    <div key={i} className="projectFeature">
                        <h3>{principle.title}</h3>
                        <p>{principle.desc}</p>
                    </div>
                ))} 
            </div>
        </div>
    )
}