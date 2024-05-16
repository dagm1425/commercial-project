import { useEffect, useState } from 'react';
import styles from "./style.module.scss";
import { Link, useLocation } from "react-router-dom";
import { LuDot } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

export default function Index() {
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

    const handleClick = () => {
        if (window.matchMedia('(max-width: 600px)').matches) {
            setIsLinksDrawerActive(false);
        }
    };

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
                        <Link key={i} className={`${styles["nav-link"]} ${link === activeLink ? styles.active : ""}`} to={`/${i === 0 ? "" : link}`} onClick={handleClick}>
                            {link}
                            <LuDot />
                        </Link>
                    )
                })}
            </nav>
            <button onClick={() => setIsLinksDrawerActive(true)}>
                <img src="/icons/menu.png" alt="menu-icon" />
            </button>
        </header>
    )
}