/* eslint-disable react/prop-types */
import styles from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Index({ features }) {
    const projectFeaturesHeader = useRef(null);
    const projectFeatures = useRef(null);
    const projectFeaturesWrapper = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        let mm = gsap.matchMedia();

        mm.add("(min-width: 1025px)", () => {
          gsap.to(projectFeaturesHeader.current, {
            scrollTrigger: {
                trigger: projectFeaturesHeader.current,
                start: "top 10%",
                end: "+=1050px",
                scrub: 2,
                toggleActions: "restart none none none",
                pin: true,
                // pinSpacing: false
                // markers: true,
            },
        })

        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: projectFeatures.current,
              // markers: true, 
              start: "top 10%",
              end: "+=1050px",
              scrub: true,
              pin: true,
              // snap: 1 / (features.length - 1),
            },
          });
          
          // tl.addLabel("a"); 

          // tl.to(".projectFeatures1 .projectFeature1:nth-child(2)", {
          //   top: "20%",
          //   // ease: "power1.out" 
          //     // duration: 3
          // }, "a")

          tl.addLabel("a"); 
          
          tl.to(projectFeatures.current.children[1], {
            // top: "-0.725rem",
            top: "-0.25rem",
            // ease: "power1.out" 
            // duration: 5
          }, "a")
            .to(projectFeatures.current.children[0], {
              scale: ".65",
              marginTop: "-3.1rem",
              // ease: "power1.out" 
              // duration: 5
            }, "a")
            .to(projectFeatures.current.children[2], {
              top: "24%",
              // ease: "power1.out" 
              // duration: 5
            }, "a")
            .addLabel("b"); 
          
          tl.to(projectFeatures.current.children[2], {
            // top: "0.725rem",
            top: "0.55rem",
            // ease: "power1.out" 
            // duration: 5
          }, "b")
            .to(projectFeatures.current.children[1], {
              scale: "0.75",
              transformOrigin: "top",
              // ease: "power1.out" 
              // width: "200px",
              // top: "0.375rem",
              // marginTop: "-1.125rem",
              // duration: 5
            }, "b")
            .to(projectFeatures.current.children[3], {
              top: "24%",
              // ease: "power1.out" 
              // duration: 5
            }, "b")
            .addLabel("c"); 

            tl.to(projectFeatures.current.children[2], {
              scale: ".85",
              transformOrigin: "top",
              // ease: "power1.out" 
              // marginTop: "-0.975rem",
              // duration: 5
            }, "c")
            // .to(".projectFeaturesWrapper2", {
            //   height: "230vh"
            // }, "d")
            .to(projectFeatures.current.children[3], {
              // top: "1.825rem",
              top: "-1.025rem",
              paddingTop: "3rem",
              // ease: "power1.out" 
              // marginTop: "-0.5rem",
              // duration: 5
            }, "c")
            .to(projectFeatures.current.children[3].children[0].children[1], {
              marginTop: "-5.625rem",
            }, "c")
        });
    }, []);
    
    return (
        <div ref={projectFeaturesWrapper} className={styles["project-features-wrapper"]}>
            <div ref={projectFeaturesHeader} className={styles["project-features-header"]}>
                <h2>What sets us <span>apart</span>?</h2>
            </div>
            <div ref={projectFeatures} className={styles["project-features"]}> 
                {features.map((feature, index) => (
                    <div className={styles["project-feature"]} key={index}>
                        <div className={styles["feature-header"]}>
                          <h3>{feature.title}</h3>
                          <div>
                            {feature.icon}
                          </div>
                        </div>
                        <p>{feature.desc}</p>
                    </div>
                ))} 
            </div> 
        </div>
    )
}