import { useState } from "react";
import "./styles.scss";
import { CgArrowLongLeft } from "react-icons/cg";
import { CgArrowLongRight } from "react-icons/cg";

export default function Index() {
    const videos = [
        {
            title: "እንኳን ለ 2016 አዲስ ዓመት በሰላም አደረሳችሁ! ሜትሮፓሊታን ሪል እስቴት",
            src: "https://www.youtube.com/embed/Q-mZD0NUmdI",
            videoId: "Q-mZD0NUmdI",
        },
        {
            title: "Sarbet Gabriel Apartment Short Tour",
            src: "https://www.youtube.com/embed/e2f_BVlbmpY",
            videoId: "e2f_BVlbmpY",

        },
        {
            title: "Metropolitan Bole Midtown Apartments",
            src: "https://www.youtube.com/embed/TAIj7orYb2s",
            videoId: "TAIj7orYb2s",

        },
        {
            title: "Metropolitan Tower: Luxury, Location, and ROI all in one place",
            src: "https://www.youtube.com/embed/azCSA8VlEU0",
            videoId: "azCSA8VlEU0",

        },
    ];
    const [imgIndex, setImgIndex] = useState(0);

    const prevImg = () => {
        setImgIndex(imgIndex - 1);
    }

    const nextImg = () => {
        setImgIndex(imgIndex + 1);
    }

    return (
        <div className="videosWrapper">
            <div className="videosHeader">
                <p>featured video</p>
                <h1>the addis skyline experience</h1>
            </div>
            <div className="videosSlidder">
                {videos.map((video, i) => {
                    return (
                        <div key={i}  style={{ translate: `${-100 * imgIndex}%` }} className="videoContent">
                            <div className="thumbnailWrapper">
                                <img src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} alt={video.title} />
                            </div>
                            <p>{video.title}</p>
                        </div>
                    )
                })}
            </div>
            <div className="sliderController">
                <h2>{`0${imgIndex + 1} / 0${videos.length}`}</h2>
                <div className="buttonsWrapper">
                    <button disabled={imgIndex === 0} onClick={prevImg}>
                        <CgArrowLongLeft />
                    </button>
                    <button disabled={imgIndex === videos.length - 1} onClick={nextImg}>
                        <CgArrowLongRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

