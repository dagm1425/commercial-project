/* eslint-disable react/prop-types */
import "./styles.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

export default function Index({ features }) {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".projectFeaturesHeader1", {
            scrollTrigger: {
                trigger: ".projectFeaturesHeader1",
                start: "top 10%",
                end: "+=1050px",
                scrub: 2,
                toggleActions: "restart none none none",
                pin: true,
                // markers: true,
            },
        })

        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".projectFeatures1",
              markers:true, 
              start: "top 10%",
              end: "+=1050px",
              scrub: true,
              pin: true,
              // snap: 1 / (features.length - 1),
            },
          });
          
          tl.addLabel("a"); 

          tl.to(".projectFeatures1 .projectFeature1:nth-child(2)", {
            top: "20%",
            // ease: "power1.out" 
              // duration: 3
          }, "a")

          tl.addLabel("b"); 
          
          tl.to(".projectFeatures1 .projectFeature1:nth-child(2)", {
            // top: "-0.725rem",
            top: "0.375rem",
            // ease: "power1.out" 
            // duration: 5
          }, "b")
            .to(".projectFeatures1 .projectFeature1:nth-child(1)", {
              scale: ".65",
              marginTop: "-3.1rem",
              // ease: "power1.out" 
              // duration: 5
            }, "b")
            .to(".projectFeatures1 .projectFeature1:nth-child(3)", {
              top: "28%",
              // ease: "power1.out" 
              // duration: 5
            }, "b")
            .addLabel("c"); 
          
          tl.to(".projectFeatures1 .projectFeature1:nth-child(3)", {
            // top: "0.725rem",
            top: "1.095rem",
            // ease: "power1.out" 
            // duration: 5
          }, "c")
            .to(".projectFeatures1 .projectFeature1:nth-child(2)", {
              scale: "0.75",
              transformOrigin: "top",
              // ease: "power1.out" 
              // width: "200px",
              // top: "0.375rem",
              // marginTop: "-1.125rem",
              // duration: 5
            }, "c")
            .to(".projectFeatures1 .projectFeature1:nth-child(4)", {
              top: "28%",
              // ease: "power1.out" 
              // duration: 5
            }, "c")
            .addLabel("d"); 

            tl.to(".projectFeatures1 .projectFeature1:nth-child(3)", {
              scale: ".85",
              transformOrigin: "top",
              // ease: "power1.out" 
              // marginTop: "-0.975rem",
              // duration: 5
            }, "d")
            // .to(".projectFeaturesWrapper2", {
            //   height: "230vh"
            // }, "d")
            .to(".projectFeatures1 .projectFeature1:nth-child(4)", {
              // top: "1.825rem",
              top: "-0.375rem",
              paddingTop: "3rem",
              // ease: "power1.out" 
              // marginTop: "-0.5rem",
              // duration: 5
            }, "d")
            .to(".projectFeaturesWrapper2", {
              height: "195vh"
            }, "d")
          
    }, []);
    
    return (
        <div className="projectFeaturesWrapper2">
            <div className="projectFeaturesHeader1">
                <h2>what sets us apart?</h2>
            </div>
            <div className="projectFeatures1"> 
                {features.map((feature, index) => (
                    <div className="projectFeature1" key={index}>
                        <h2>{index + 1}</h2>
                        <h3>{feature.title}</h3>
                        <p>{feature.desc}</p>
                    </div>
                ))} 
            </div> 
        </div>
    )
}