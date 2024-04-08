// import { useEffect } from "react";
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageTextList from "../../common/image-text-list/Index";

export default function Index() {
    const features = [
        {
            label: "elegant openness",
            title: "meticulous design",
            desc: "we believe in an uncompromising vision that permeates every design element, meticulously crafted from architectural inception to the curated selection of interior elements, creating environments that are as relevant to their surroundings as they are adaptable to evolving needs.",
            src: "furnishing-materials.png",
        },
        {
            label: "Remarkable experience",
            title: "Tailored to you",
            desc: "Meticulously designed for excellence, our expertise curates an unparalleled experience. Immerse yourself in a lifestyle exclusive to residents here, an opportunity unmatched by any other development.",
            src: "woman-with-design-book.png",
        },
    ];

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     gsap.utils.toArray(".feature").forEach((feature, index) => {
    //         const featureImgWrapper = feature.querySelector(".featureImgWrapper");
    //         const featureMain = feature.querySelector(".featureMain");
    //         const featureImg = featureImgWrapper.querySelector("img");
    //         const featureOverlay = featureImgWrapper.querySelector(".featureOverlay");
    //         const x = (index % 2 === 0) ?  "-15%" : "15%"; 
    //         const scrollTriggerConfig = {
    //             trigger: feature,
    //             start: "top 80%",
    //             end: "+=200",
    //         };

    //         gsap.to(featureOverlay, {
    //           width: "0%",
    //           duration: 1.4,
    //           ease: "Power2.easeInOut",
    //           scrollTrigger: scrollTriggerConfig,
    //         });

    //         gsap.fromTo(featureMain, {
    //           x: x,
    //           opacity: 0
    //         }, {
    //           x: 0,
    //           opacity: 1,
    //           duration: 1.4,
    //           ease: "Power2.easeInOut",
    //           scrollTrigger: scrollTriggerConfig,
    //         });

    //         gsap.fromTo(featureImg, {
    //             scale: 1.4  
    //           }, {
    //             scale: 1,
    //             duration: 1.4,
    //             ease: "Power2.easeInOut",
    //             scrollTrigger: scrollTriggerConfig,
    //           });
    //       });
    // }, []);

    // const isZeroEven = (n) => {
    //     return (n % 2 === 0) || n === 0;
    // }

    return (
        // <div className="featuresWrapper">
        //     {features.map((feature, i) => {
        //         return (
        //             <div className="feature" key={i}>
        //                 {!isZeroEven(i) && <div className="featureImgWrapper">
        //                     <img src={`/images/other/${feature.src}`} alt={feature.title} />
        //                     <div className="featureOverlay"/>
        //                 </div>}
        //                 <div className="featureMain">
        //                     <p>{feature.label}</p>
        //                     <h2>{feature.title}</h2>
        //                     <p>{feature.desc}</p>
        //                 </div>
        //                 {isZeroEven(i) && <div className="featureImgWrapper">
        //                     <img src={`/images/other/${feature.src}`} alt={feature.title} />
        //                     <div className="featureOverlay"/>
        //                 </div>}
        //             </div>
        //         ) 
        //     })}
        // </div>
        <ImageTextList listItems={features}/>
    )
}