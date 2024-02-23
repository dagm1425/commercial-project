import { useState, useEffect } from 'react';
import "./styles.scss"
import { MdKeyboardArrowRight } from "react-icons/md";
import gsap from 'gsap';

export default function Index() {
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [dropdownProject, setDropdownProject] = useState(0);
    const dropdownContent = [
        { 
            title: "Piazza Downtown Luxury Apartments",
            desc: "Expertly crafted apartments that boast thoughtful floor plans, top-notch infrastructure, and exceptional finishes.",
            src: "piazza.png"
        },
        { 
            title: "Bole Skyline Luxury Apartments",
            desc: "Rise above the ordinary and experience a new level of sophistication at Bole's most anticipated residential development.",
            src: "skyline.png"
        },
        { 
            title: "Addis Central Luxury Apartments",
            desc: "Addis Central Tower's central location, international standards, and original architecture promise an unmatched living experience.",
            src: "central.png"
        },
        { 
            title: "Addis Westview Standard Apartments",
            desc: "Experience international standards, modern amenities, and a convenient location, all within your budget.",
            src: "westview.png"
        },
    ];


    useEffect(() => {
        gsap.fromTo(".dropdownProjectImgWrapper", { x: 30 }, { x: 0, ease: "none", duration: .4 })
        gsap.fromTo(".dropdownProjectImgWrapper", { opacity: 0 }, { opacity: 1, ease: "none", duration: .7 })

        gsap.fromTo(".dropdownProjectMain > *", { y: -10 }, { y: 0, ease: "power1.out", stagger: 0.15, duration: .2 })
        gsap.fromTo(".dropdownProjectMain > *", { opacity: 0 }, { opacity: 1, ease: "power1.out", stagger: 0.15, duration: .2 })
    }, [dropdownProject])

    return (
        <header className="header">
            <div className="logo">
                Addis Skyline Realty
            </div>
            <nav className="nav">
                <a href="" className="navLink">home</a>
                <div className="dropdown" onMouseEnter={() => setIsDropdownActive(true)} onMouseLeave={() => setIsDropdownActive(false)}>
                    <div className={`dropdownMenu ${isDropdownActive ? "active" : ''}`}>
                        <div className="dropdownMenuTitles">
                            {dropdownContent.map((el, i) => {
                                return (
                                    <div key={i} className={`dropdownMenuTitleWrapper ${dropdownProject === i ? "active" : ""}`} onMouseEnter={() => setDropdownProject(i)}>
                                        <MdKeyboardArrowRight />
                                        <p className="dropdownMenuTitle">
                                            {el.title.split(" ", 2).join(" ")}
                                        </p>    
                                    </div>
                                )
                            })}
                        </div>
                        <div className="dropdownMenuMain">
                            <div className="dropdownProjectMain">
                                <p>
                                    {dropdownContent[dropdownProject].title}
                                </p>
                                <p>
                                    {dropdownContent[dropdownProject].desc}
                                </p>
                                <a href='#' className="dropdownProjectLink">Learn more</a>
                            </div>
                            <div className="dropdownProjectImgWrapper">
                                <img src={`/images/${dropdownContent[dropdownProject].src}`} 
                                     alt={dropdownContent[dropdownProject].title}
                                />
                            </div>
                        </div>
                    </div>
                    <a href="" className="navLink">projects</a>
                </div>
                <a href="" className="navLink">about</a>
                <a href="" className="navLink">contact</a>
            </nav>
        </header>
    )
}