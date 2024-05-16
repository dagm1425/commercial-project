/* eslint-disable react/prop-types */
import styles from "./style.module.scss";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { useGSAP } from "@gsap/react";
import MainBtn from "../../common/main-btn/Index.jsx";
import { useEffect, useRef } from "react";

export default function Index({ projects }) {
    const linksRefs = useRef([]);
    const linksWrapper = useRef(null);
    const projectsSection = useRef(null);
    const projectNames = projects.map((project) => project.title.split(" ").slice(0, 2).join(' '));
    
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect);

        if (projectsSection.current) {
            observer.observe(projectsSection.current);
        }

        return () => {
            observer.disconnect(); 
        };
    }, []);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        let mm = gsap.matchMedia();

        mm.add("(min-width: 600px)", () => {
            gsap.fromTo(linksRefs.current, {
                opacity: 0,
                y: "5vh",
              }, {
                opacity: 1,
                y: 0,
                duration: .7,
                ease: "power1.out",
                scrollTrigger: {
                  trigger: linksWrapper.current,
                  start: "top 90%",
                  end: "+=300",
                },
              })
        })
    }, [])

    const handleIntersect = async (entries) => {
        const entry = entries[0]; 
        if (entry.isIntersecting) {
            ScrollTrigger.refresh();
        }
    }

    return (
        <section ref={projectsSection} className={styles.projects}>
            <div className={styles["projects-header"]}>
                <h1>Properties on the Rise</h1>
                <p>Explore a selection of our properties in greater depth</p>
                <MainBtn variant="variant2"><Link to="/projects">view projects</Link></MainBtn>

            </div>
            <div ref={linksWrapper} className={styles["projects-content"]}>
                {projects.map((project, i) => {
                    const projectName = project.id.split("-")[0];
                    return (
                        i > 2 ? null
                        : <Link key={i} to={`/projects/${project.id}`} ref={(e) => (linksRefs.current[i] = e)} className={styles["project-link"]}>
                            <div className={styles["link-img-wrapper"]}>
                                <img src={`/images/projects/${projectName}/${projectName}-ext.png`} 
                                    alt={project.title}
                                />
                            </div>
                            <div className={styles["project-desc"]}>
                                <p>{project.label}</p>
                                <p><BsArrowRightShort />{projectNames[i]}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}