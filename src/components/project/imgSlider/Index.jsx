/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles.scss";
import { CgArrowLongLeft } from "react-icons/cg";
import { CgArrowLongRight } from "react-icons/cg";

export default function Index({ projectImg }) {
    const [imgIndex, setImgIndex] = useState(0);

    const prevImg = () => {
        setImgIndex(imgIndex - 1);
    }

    const nextImg = () => {
        setImgIndex(imgIndex + 1);
    }

    return (
        <div className="sliderWrapper">
            <div className="imgSlidder">
                {projectImg.map((img, i) => {
                    return (
                        <div key={i}  style={{ translate: `${-100 * imgIndex}%` }} className="imgContent">
                            <div className="imgWrapper">
                                <img src={img.src} alt={img.alt} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="sliderController">
                <h2>{`0${imgIndex + 1} / 0${projectImg.length}`}</h2>
                <div className="buttonsWrapper">
                    <button disabled={imgIndex === 0} onClick={prevImg}>
                        <CgArrowLongLeft />
                    </button>
                    <button disabled={imgIndex === projectImg.length - 1} onClick={nextImg}>
                        <CgArrowLongRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

