import PropTypes from "prop-types";
import styles from "./style.module.scss";
import { LuDot } from "react-icons/lu";
import { BsArrowRightShort } from "react-icons/bs";

export default function Index({ children, variant }) {
  return (
    <button
      className={`${styles["main-btn"]} ${variant === "variant1" ? styles.variant1 : styles.variant2}`}
    >
      <LuDot />
      <span>{children}</span>
      <BsArrowRightShort />
    </button>
  );
}

Index.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["variant1", "variant2"]).isRequired,
};
