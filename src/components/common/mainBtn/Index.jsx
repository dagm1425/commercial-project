/* eslint-disable react/prop-types */
import "./styles.scss";
import { LuDot } from "react-icons/lu";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Index({ link, children }) {
    return (
        <Link to={link}>
            <LuDot />
            <span>{children}</span>
            <BsArrowRightShort />
        </Link>
    )
}