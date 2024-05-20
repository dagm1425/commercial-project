import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { Link, useLocation } from "react-router-dom";
import { LuDot } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

export default function Index() {
  const [activeLink, setActiveLink] = useState("");
  const links = ["home", "about", "projects", "contact"];
  const [isLinksDrawerActive, setIsLinksDrawerActive] = useState(false);
  const location = useLocation();
  // const headerRef = useRef(null);
  const previousScrollY = useRef(0); // Store previous scroll position
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const pathname = location.pathname;
    const pathSegments = pathname.split("/");
    const initialSegment = pathSegments.length > 1 ? pathSegments[1] : "home";

    setActiveLink(initialSegment);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollPast5vh = currentScrollY > 5; // Check if scrolled past 5vh

      // Add/remove class based on scroll position and previous scroll
      if (scrollPast5vh && previousScrollY.current <= 5) {
        // headerRef.current.classList.add("scrolled");
        setScrolled(true);
      } else if (!scrollPast5vh && previousScrollY.current > 5) {
        // headerRef.current.classList.remove("scrolled");
        setScrolled(false);
      }

      previousScrollY.current = currentScrollY; // Update previous scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      setIsLinksDrawerActive(false);
    }
  };

  return (
    <>
      <header
        // ref={headerRef}
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.logo}>
          <Link to="/">
            <img src="/images/other/logo.png" alt="logo" />
          </Link>
        </div>
        <nav
          className={`${styles.nav} ${isLinksDrawerActive ? styles.active : ""}`}
        >
          <button onClick={() => setIsLinksDrawerActive(false)}>
            <IoMdClose />
          </button>
          {links.map((link, i) => {
            return (
              <Link
                key={i}
                className={`${styles["nav-link"]} ${link === activeLink ? styles.active : ""}`}
                to={`/${i === 0 ? "" : link}`}
                onClick={handleClick}
              >
                {link}
                <LuDot />
              </Link>
            );
          })}
        </nav>
        <button onClick={() => setIsLinksDrawerActive(true)}>
          <img src="/icons/menu.png" alt="menu-icon" />
        </button>
      </header>
      <div className={styles.placeholder} />
    </>
  );
}
