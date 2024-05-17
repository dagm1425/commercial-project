import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import styles from "./style.module.scss";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { RxArrowTopRight } from "react-icons/rx";

export default function Index({ listItems }) {
    const listWrapper = useRef(null);
    const imgList = useRef(null);
    const imgDivRefs = useRef([]);
    const textDivRefs = useRef([]);
    const isProject = listItems.length === 4;
    const imgSrc = listItems.map((listItem) => {
        if (isProject) {
            const projectName = listItem.id.split("-")[0];
            return `/images/projects/${projectName}/${projectName}.png`;
        } else {
            return `/images/other/${listItem.src}`
        }
    });

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        let mm = gsap.matchMedia();

        mm.add("(min-width: 600px)", () => {
            gsap.set(imgDivRefs.current, { yPercent: 101 });
    
            ScrollTrigger.create({
                trigger: listWrapper.current,
                start: "top top",
                end: "bottom 95%",
                pin: imgList.current,
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
        });
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
            <div className={styles['text-list']}>
                <div className={styles['desktop-content']}>
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
                <div className={styles['desktop-overlay']}/>
                <div className={styles['desktop-images']}>
                    {listItems.map((listItem, i) => {
                        return (
                            <div key={i} ref={i === 0 ? null : (el) => (imgDivRefs.current[i] = el)} className={styles['desktop-list-item-img']}>
                                <img src={imgSrc[i]} alt={listItem.title} />
                            </div>
                        ) 
                    })}
                </div>
                <div className={styles['mobile-content']}>
                    {listItems.map((listItem, i) => {
                        return (
                            <div key={i} className={styles["mobile-list-item"]}>
                                <div className={styles['mobile-list-item-img']}>
                                    <img src={imgSrc[i]} alt={listItem.title} />
                                </div>
                                <p>{listItem.label}</p>
                                <h2>{listItem.title}</h2>
                                <p>{listItem.desc}</p>
                                {isProject && <Link to={`/projects/${listItem.id}`}>learn more <RxArrowTopRight /></Link>}
                            </div>
                        ) 
                    })}
                </div>
            </div>
        </div>
    )
}

const FeaturePropType = PropTypes.shape({
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
});

Index.propTypes = {
    listItems: PropTypes.arrayOf(FeaturePropType).isRequired
}