import "./styles.scss";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { LuDot } from "react-icons/lu";

export default function Index() {
    const projects = [
        { 
            id: "addis-westview",
            label: "Standard",
            title: "Addis Westview",
        },
        { 
            id: "piazza-downtown",
            label: "Luxury",
            title: "Piazza Downtown",
        },
        { 
            id: "bole-skyline",
            label: "Luxury",
            title: "Bole Skyline",
        }
    ];


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".projectLink", {
            opacity: 0,
            y: "15vh",
        }, {
            opacity: 1,
            y: 0,
            duration: .4,
            ease: "power1.out",
            stagger: .15,
            scrollTrigger: {
                trigger: ".projectsContent",
                start: "top 63%",
                end: "+=250",
                markers: true
            },
        })
        
        // gsap.registerPlugin(ScrollTrigger);

        // const lenis = new Lenis({
        //     duration: 1.2,
        //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        // })

        // function raf(time) {
        //     lenis.raf(time)
        //     requestAnimationFrame(raf)
        // }

        // requestAnimationFrame(raf)

        // // eslint-disable-next-line no-unused-vars
        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //     trigger: '.projectsContent',
        //     start: "top 70%",
        //     end: "+=450",
        //     scrub: true
        //     }
        // })
        // .to('.projectLink', {
        //     stagger: .2,
        //     y: 0,
        //     scrub: true
        // })
    }, [])

    return (
        <section className="projects">
            <div className="projectsHeader">
                <p>featured projects</p>
                <h1>properties on the rise</h1>
                <p>explore a selection of our properties in greater depth</p>
                <Link to="/projects">
                    <BsArrowRightShort />
                    <span>view all projects</span>
                    <LuDot />
                </Link>
            </div>
            <div className="projectsContent">
                {projects.map((project, i) => {
                    const projectName = project.id.split("-")[0];

                    return (
                        <Link key={i} to={`/projects/${project.id}`} className="projectLink">
                            <div className="linkImgWrapper">
                                <img src={`/images/projects/${projectName}/${projectName}-ext.png`} 
                                    alt={project.title}
                                />
                            </div>
                            <div className="projectDesc">
                                <p>{project.label}</p>
                                <p><BsArrowRightShort />{project.title}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}