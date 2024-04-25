/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import MainBtn from "../main-btn/Index";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
// import { RiArrowRightUpLine } from "react-icons/ri";
import { RxArrowTopRight } from "react-icons/rx";

export default function Index({ listItems }) {
    const listWrapper = useRef(null);
    const imgList = useRef(null);
    const imgDivRefs = useRef([]);
    const textDivRefs = useRef([]);
    const isProject = listItems.length === 4;

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
   
        gsap.set(imgDivRefs.current, { yPercent: 101 });

        // const animation = gsap.to(imgDivRefs.current, {
        //     yPercent: 0, duration: 1, stagger: 1
        // })

        ScrollTrigger.create({
            trigger: listWrapper.current,
            start: "top top",
            end: "bottom 95%",
            pin: imgList.current,
            // animation,
            scrub: true,
            markers: false,
        })

        textDivRefs.current.forEach((textDiv, index)=> {
            let headline = textDiv.querySelector("h2")
            let animation = gsap.to(imgDivRefs.current[index], {yPercent:0})

            ScrollTrigger.create({
                trigger:headline,
                start:"top 80%",
                end:"top 40%",
                animation,
                scrub:true,
                markers:false
            })
        })
    }, []);
      
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect);

        if (listWrapper.current) {
            observer.observe(listWrapper.current);
        }

        return () => {
            observer.disconnect(); 
        };
    }, []);

    const handleIntersect = async (entries) => {
        const entry = entries[0]; 
        if (entry.isIntersecting) {
            ScrollTrigger.refresh();
        }
    }

    return (
        <div ref={listWrapper} className={styles['list-wrapper']}>
            <div className={styles["text-list"]}>
                <div>
                    {listItems.map((listItem, i) => {
                        return (
                            <div key={i} ref={i === 0 ? null : (el) => (textDivRefs.current[i] = el)} className={styles['list-item-main']}>
                                <p>{listItem.label}</p>
                                <h2>{listItem.title}</h2>
                                <p>{listItem.desc}</p>
                                {isProject && <Link to={`/projects/${listItem.id}`}>learn more <RxArrowTopRight /></Link>}
                            </div>
                        ) 
                    })}
                </div>
            </div>
            <div ref={imgList} className={styles["img-list"]}>
                <div />
                <div>
                    {listItems.map((listItem, i) => {
                        let src;

                        if (isProject) {
                            const projectName = listItem.id.split("-")[0];
                            src = `/images/projects/${projectName}/${projectName}.png`;
                        } else {
                            src = `/images/other/${listItem.src}`
                        }

                        return (
                            <div key={i} ref={i === 0 ? null : (el) => (imgDivRefs.current[i] = el)} className={styles['list-item-img']}>
                                <img src={src} alt={listItem.title} />
                            </div>
                        ) 
                    })}
                </div>
            </div>
        </div>
    )
}