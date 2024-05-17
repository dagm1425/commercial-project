import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./style.module.scss";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";

export default function Index({ projectImg }) {
  const [imgIndex, setImgIndex] = useState(0);

  const prevImg = () => {
    setImgIndex(imgIndex - 1);
  };

  const nextImg = () => {
    setImgIndex(imgIndex + 1);
  };

  return (
    <div className={styles["slider-wrapper"]}>
      <div className={styles["img-slidder"]}>
        {projectImg.map((img, i) => {
          return (
            <div
              key={i}
              style={{ translate: `${-100 * imgIndex}%` }}
              className={styles["img-content"]}
            >
              <div className={styles["img-wrapper"]}>
                <img src={img.src} alt={img.alt} />
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles["slider-controller"]}>
        <div />
        <div className={styles["buttons-wrapper"]}>
          <button disabled={imgIndex === 0} onClick={prevImg}>
            <LiaLongArrowAltLeftSolid />
          </button>
          <button
            disabled={imgIndex === projectImg.length - 1}
            onClick={nextImg}
          >
            <LiaLongArrowAltRightSolid />
          </button>
        </div>
      </div>
    </div>
  );
}

const ImagePropType = PropTypes.shape({
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

Index.propTypes = {
  projectImg: PropTypes.arrayOf(ImagePropType).isRequired,
};
