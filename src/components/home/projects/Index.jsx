import styles from "./style.module.scss";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { useGSAP } from "@gsap/react";
import MainBtn from "../../common/main-btn/Index.jsx";
import { useEffect, useRef } from "react";

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
    const linksRefs = useRef([]);
    const linksWrapper = useRef(null);
    const projectsSection = useRef(null);
    
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

        gsap.fromTo(linksRefs.current, {
            opacity: 0,
            y: "4vh",
          }, {
            opacity: 1,
            y: 0,
            duration: .3,
            ease: "power1.out",
            stagger: .2,
            scrollTrigger: {
              trigger: linksWrapper.current,
              start: "top 70%",
              end: "+=250",
              markers: true
            },
          })
    }, [])

    // useLayoutEffect(() => {
    //     setTimeout(() => {
    //         ScrollTrigger.refresh()
    //     }, 2000);
    // }, []);

    const handleIntersect = async (entries) => {
        const entry = entries[0]; 
        if (entry.isIntersecting) {
            ScrollTrigger.refresh();
        }
    }

    // const refresh = () => {
    //     console.log("Refreshed")
    //     ScrollTrigger.refresh()
    // }

    return (
        <section ref={projectsSection} className={styles.projects}>
            <div className={styles["projects-header"]}>
                <p>featured projects</p>
                <h1>properties on the rise</h1>
                <p>explore a selection of our properties in greater depth</p>
                <MainBtn link="/projects">view all projects</MainBtn>
            </div>
            <div ref={linksWrapper} className={styles["projects-content"]}>
                {projects.map((project, i) => {
                    const projectName = project.id.split("-")[0];
                    return (
                        <Link key={i} to={`/projects/${project.id}`} ref={(e) => (linksRefs.current[i] = e)} className={styles["project-link"]}>
                            <div className={styles["link-img-wrapper"]}>
                                <img src={`/images/projects/${projectName}/${projectName}-ext.png`} 
                                    alt={project.title}
                                    // onLoad={() => ScrollTrigger.refresh()}
                                />
                            </div>
                            <div className={styles["project-desc"]}>
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