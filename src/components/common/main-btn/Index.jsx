/* eslint-disable react/prop-types */
import styles from "./style.module.scss";
import { LuDot } from "react-icons/lu";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Index({ link, children }) {
    return (
        <Link to={link} className={styles['main-btn']}>
            <LuDot />
            <span>{children}</span>
            <BsArrowRightShort />
        </Link>
    )
}