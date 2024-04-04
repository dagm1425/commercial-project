/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./styles.scss";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainBtn from "../mainBtn/Index";

export default function Index({ listItems }) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".listItem").forEach((listItem, index) => {
            const listItemImgWrapper = listItem.querySelector(".listItemImg");
            const listItemMain = listItem.querySelector(".listItemMain");
            const listItemImg = listItemImgWrapper.querySelector("img");
            const listItemOverlay = listItemImgWrapper.querySelector(".listItemOverlay");
            const x = (index % 2 === 0) ?  "-15%" : "15%"; 
            const scrollTriggerConfig = {
                trigger: listItem,
                start: "top 80%",
                end: "+=200",
            };

            gsap.to(listItemOverlay, {
              width: "0%",
              duration: 1.4,
              ease: "Power2.easeInOut",
              scrollTrigger: scrollTriggerConfig,
            });

            gsap.fromTo(listItemMain, {
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

    const renderImage = (src, title) => {
        return (
            <div className="listItemImg">
                <img src={src} alt={title} />
                <div className="listItemOverlay"/>
            </div>
        )
    }

    return (
        <div className="listWrapper">
            {listItems.map((listItem, i) => {
                const isProject = listItems.length === 4;
                let src;

                if (isProject) {
                    const projectName = listItem.id.split("-")[0];
                    src = `/images/projects/${projectName}/${projectName}.png`;
                } else {
                    src = `/images/other/${listItem.src}`
                }

                return (
                    <div className="listItem" key={i}>
                        {i % 2 === 0 && renderImage(src, listItem.title)}
                        <div className="listItemMain">
                            <p>{listItem.label}</p>
                            <h2>{listItem.title}</h2>
                            <p>{listItem.desc}</p>
                            {isProject && <MainBtn link={`/projects/${listItem.id}`}>Learn more</MainBtn>}
                        </div>
                        {i % 2 !== 0 && renderImage(src, listItem.title)}
                    </div>
                ) 
            })}
        </div>
    )
}