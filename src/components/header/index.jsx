import { useEffect, useState } from 'react';
import styles from "./style.module.scss";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import gsap from 'gsap';
import { Link, useLocation } from "react-router-dom";
import { LuDot } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

export default function Index() {
    // const [isDropdownActive, setIsDropdownActive] = useState(false);
    // const [dropdownProject, setDropdownProject] = useState(0);
    const [activeLink, setActiveLink] = useState("");
    const links = [ "home", "about", "projects", "contact"];
    const [isLinksDrawerActive, setIsLinksDrawerActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
      const pathname = location.pathname;
      const pathSegments = pathname.split('/'); 
      const initialSegment = pathSegments.length > 1 ? pathSegments[1] : 'home';

      setActiveLink(initialSegment);
     
    }, [location]); 
    // const dropdownContent = [
    //     { 
    //         id: "piazza-downtown",
    //         title: "Piazza Downtown Luxury Apartments",
    //         desc: "Expertly crafted apartments that boast thoughtful floor plans, top-notch infrastructure, and exceptional finishes.",
    //     },
    //     { 
    //         id: "bole-skyline",
    //         title: "Bole Skyline Luxury Apartments",
    //         desc: "Rise above the ordinary and experience a new level of sophistication at Bole's most anticipated residential development.",
    //     },
    //     { 
    //         id: "lagare-central",
    //         title: "lagare Central Luxury Apartments",
    //         desc: "Addis Central Tower's central location, international standards, and original architecture promise an unmatched living experience.",
    //     },
    //     { 
    //         id: "addis-westview",
    //         title: "Addis Westview Standard Apartments",
    //         desc: "Experience international standards, modern amenities, and a convenient location, all within your budget.",
    //     },
    // ];
    // const projectName = dropdownContent[dropdownProject].id.split("-")[0];
    
    // useEffect(() => {
    //     gsap.fromTo(".dropdownProjectImgWrapper", { x: 30 }, { x: 0, ease: "none", duration: .4 })
    //     gsap.fromTo(".dropdownProjectImgWrapper", { opacity: 0 }, { opacity: 1, ease: "none", duration: .7 })

    //     gsap.fromTo(".dropdownProjectMain > *", { y: -10 }, { y: 0, ease: "power1.out", stagger: 0.15, duration: .2 })
    //     gsap.fromTo(".dropdownProjectMain > *", { opacity: 0 }, { opacity: 1, ease: "power1.out", stagger: 0.15, duration: .2 })
    // }, [dropdownProject])

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src="/images/other/logo.png" alt="logo" />
                </Link>
            </div>
            <nav className={`${styles.nav} ${isLinksDrawerActive ? styles.active : ""}`}>
                <button onClick={() => setIsLinksDrawerActive(false)}>
                    <IoMdClose />
                </button>
                {links.map((link, i) => {
                    return (
                        <div key={i} className={`${styles["nav-link"]} ${link === activeLink ? styles.active : ""}`}>
                            <Link to={`/${i === 0 ? "" : link}`} onClick={() => setIsLinksDrawerActive(false)}>{link}</Link>
                            <LuDot />
                        </div>
                    )
                })}
            </nav>
            <button onClick={() => setIsLinksDrawerActive(true)}>
                <img src="/icons/menu.png" alt="menu-icon" />
            </button>
        </header>
    )
}