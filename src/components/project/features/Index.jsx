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
                start: "top center",
                end: "+=430px",
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
              start: "top center",
              end: "+=430px",
              scrub: 3,
              pin: true,
              // snap: 1 / (features.length - 1),
            },
          });
          
          tl.addLabel("a"); 

          tl.to(".projectFeatures1 .projectFeature1:nth-child(2)", {
            top: "40%",
            duration: 3
          }, "a")

          tl.addLabel("b"); 
          
          tl.to(".projectFeatures1 .projectFeature1:nth-child(2)", {
            top: "1.5%",
            duration: 5
          }, "b")
            .to(".projectFeatures1 .projectFeature1:nth-child(1)", {
              scale: ".65",
              marginTop: "-3.1rem",
              duration: 5
            }, "b")
            .to(".projectFeatures1 .projectFeature1:nth-child(3)", {
              top: "65%",
              duration: 5
            }, "b")
            .addLabel("c"); 
          
          tl.to(".projectFeatures1 .projectFeature1:nth-child(3)", {
            top: "5%",
            duration: 5
          }, "c")
            .to(".projectFeatures1 .projectFeature1:nth-child(2)", {
              scale: ".75",
              marginTop: "-1.125rem",
              duration: 5
            }, "c")
            .to(".projectFeatures1 .projectFeature1:nth-child(4)", {
              top: "70%",
              duration: 5
            }, "c")
            .addLabel("d"); 

            tl.to(".projectFeatures1 .projectFeature1:nth-child(3)", {
              scale: ".85",
              marginTop: "-0.975rem",
              duration: 5
            }, "d")
            .to(".projectFeatures1 .projectFeature1:nth-child(4)", {
              top: "6.825%",
              // top: "0%",
              // marginTop: "-0.5rem",
              duration: 5
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