import PropTypes from "prop-types";
import { useGSAP } from "@gsap/react";
import styles from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

export default function Index({ amenities }) {
  const amenitiesWrapper = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      amenitiesWrapper.current,
      {
        opacity: 0,
        y: "7vh",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power1.out",
        scrollTrigger: {
          trigger: amenitiesWrapper.current,
          start: "top 85%",
          end: "+=200",
        },
      },
    );
  }, []);

  return (
    <div ref={amenitiesWrapper} className={styles["amenities-wrapper"]}>
      {amenities.map((amenity, index) => (
        <div className={styles.amenity} key={index}>
          <div className={styles["icon-wrapper"]}>
            <img src={`/icons/${amenity.src}`} alt={amenity.title} />
          </div>
          <h2>{amenity.title}</h2>
          <p>{amenity.desc}</p>
        </div>
      ))}
    </div>
  );
}

const AmenityPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
});

Index.propTypes = {
  amenities: PropTypes.arrayOf(AmenityPropType).isRequired,
};
