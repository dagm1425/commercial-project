/* eslint-disable react/prop-types */
import styles from "./style.module.scss";
import { LuDot } from "react-icons/lu";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Index({ link, children, variant }) {
    return (
        <Link to={link} className={`${styles['main-btn']} ${variant === "variant1" ? styles.variant1 : styles.variant2}`}>
            <LuDot />
            <span>{children}</span>
            <BsArrowRightShort />
        </Link>
    )
}