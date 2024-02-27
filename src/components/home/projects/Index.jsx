import "./styles.scss";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Index() {
    const projects = [
        { 
            id: "addis-westview",
            label: "Standard",
            title: "Addis Westview",
            src: "westview.png"
        },
        { 
            id: "piazza-downtown",
            label: "Luxury",
            title: "Piazza Downtown",
            src: "piazza.png"
        },
        { 
            id: "bole-skyline",
            label: "Luxury",
            title: "Bole Skyline",
            src: "skyline.png"
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
            duration: .35,
            ease: "power1.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".projectsContent",
                start: "top 70%",
                end: "+=100",
            },
        })
    }, [])

    return (
        <section className="projectsWrapper">
            <div className="projectsHeader">
                <p>featured projects</p>
                <h1>properties on the rise</h1>
                <p>explore a selection of our properties in greater depth</p>
                <button>view all projects</button>
            </div>
            <div className="projectsContent">
                {projects.map((project, i) => {
                    return (
                        <Link key={i} to={`/projects/${project.id}`} className="projectLink">
                            <img src={`/images/${project.src}`} 
                                alt={project.title}
                            />
                            <div className="projectDesc">
                                <p>{project.label}</p>
                                <p className="projectTitle">{project.title}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}