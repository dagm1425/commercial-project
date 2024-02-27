import { useState, useEffect } from 'react';
import "./styles.scss"
import { MdKeyboardArrowRight } from "react-icons/md";
import gsap from 'gsap';
import { Link } from "react-router-dom";

export default function Index() {
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [dropdownProject, setDropdownProject] = useState(0);
    const dropdownContent = [
        { 
            id: "piazza-downtown",
            title: "Piazza Downtown Luxury Apartments",
            desc: "Expertly crafted apartments that boast thoughtful floor plans, top-notch infrastructure, and exceptional finishes.",
            src: "piazza.png"
        },
        { 
            id: "bole-skyline",
            title: "Bole Skyline Luxury Apartments",
            desc: "Rise above the ordinary and experience a new level of sophistication at Bole's most anticipated residential development.",
            src: "skyline.png"
        },
        { 
            id: "addis-central",
            title: "Addis Central Luxury Apartments",
            desc: "Addis Central Tower's central location, international standards, and original architecture promise an unmatched living experience.",
            src: "central.png"
        },
        { 
            id: "addis-westview",
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
                <Link to="/" className="navLink">home</Link>
                <div className="dropdown" onMouseEnter={() => setIsDropdownActive(true)} onMouseLeave={() => setIsDropdownActive(false)}>
                    <div className={`dropdownMenu ${isDropdownActive ? "active" : ''}`}>
                        <div className="dropdownMenuTitles">
                            {dropdownContent.map((el, i) => {
                                return (
                                    <Link key={i} to={`/projects/${dropdownContent[dropdownProject].id}`} className={`dropdownMenuLink ${dropdownProject === i ? "active" : ""}`} onMouseEnter={() => setDropdownProject(i)}>
                                        <MdKeyboardArrowRight />
                                        <p className="dropdownMenuTitle">
                                            {el.title.split(" ", 2).join(" ")}
                                        </p>    
                                    </Link>
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
                                <Link to={`/projects/${dropdownContent[dropdownProject].id}`} className="dropdownProjectLink">Learn more</Link>
                            </div>
                            <div className="dropdownProjectImgWrapper">
                                <img src={`/images/${dropdownContent[dropdownProject].src}`} 
                                     alt={dropdownContent[dropdownProject].title}
                                />
                            </div>
                        </div>
                    </div>
                    <Link to="/projects" className="navLink">projects</Link>
                </div>
                <Link to="/about" className="navLink">about</Link>
                <Link to="/contact" className="navLink">contact</Link>
            </nav>
        </header>
    )
}