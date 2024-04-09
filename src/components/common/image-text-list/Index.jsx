/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainBtn from "../main-btn/Index";

export default function Index({ listItems }) {
    const divRefs = useRef([]);
    const listWrapper = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect);

        if (listWrapper.current) {
            observer.observe(listWrapper.current);
        }

        return () => {
            observer.disconnect(); 
        };
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        divRefs.current.forEach(({ imgDiv, textDiv }, i) => {
            const listItemImg = imgDiv.querySelector("img");
            const listItemOverlay = imgDiv.querySelector("div");
            const x = (i % 2 === 0) ?  "-15%" : "15%"; 
            const scrollTriggerConfig = {
                trigger: imgDiv,
                start: "top 80%",
                end: "+=200",
            };

            gsap.to(listItemOverlay, {
              width: "0%",
              duration: 1.4,
              ease: "Power2.easeInOut",
              scrollTrigger: scrollTriggerConfig,
            });

            gsap.fromTo(textDiv, {
              x: x,
              opacity: 0
            }, {
              x: 0,
              opacity: 1,
              duration: 1.4,
              ease: "Power2.easeInOut",
              scrollTrigger: scrollTriggerConfig,
            });

            gsap.fromTo(listItemImg, {
                scale: 1.4  
              }, {
                scale: 1,
                duration: 1.4,
                ease: "Power2.easeInOut",
                scrollTrigger: scrollTriggerConfig,
              });
          });
    }, []);

    const handleIntersect = async (entries) => {
        const entry = entries[0]; 
        if (entry.isIntersecting) {
            ScrollTrigger.refresh();
        }
    }

    const renderImage = (src, title, obj) => {
        return (
            <div ref={(el) => (obj.imgDiv = el)} className={styles['list-item-img']}>
                <img src={src} alt={title} />
                <div className={styles['list-item-overlay']}/>
            </div>
        )
    }

    return (
        <div ref={listWrapper} className={styles['list-wrapper']}>
            {listItems.map((listItem, i) => {
                const isProject = listItems.length === 4;
                const obj = { imgDiv: null, textDiv: null };
                let src;

                if (isProject) {
                    const projectName = listItem.id.split("-")[0];
                    src = `/images/projects/${projectName}/${projectName}.png`;
                } else {
                    src = `/images/other/${listItem.src}`
                }
                return (
                    <div key={i} ref={() => (divRefs.current[i] = obj)} className={styles['list-item']}>
                        {i % 2 === 0 && renderImage(src, listItem.title, obj)}
                        <div ref={(el) => (obj.textDiv = el)} className={styles['list-item-main']}>
                            <p>{listItem.label}</p>
                            <h2>{listItem.title}</h2>
                            <p>{listItem.desc}</p>
                            {isProject && <MainBtn link={`/projects/${listItem.id}`}>Learn more</MainBtn>}
                        </div>
                        {i % 2 !== 0 && renderImage(src, listItem.title, obj)}
                    </div>
                ) 
            })}
        </div>
    )
}