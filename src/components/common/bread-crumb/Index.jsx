/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export default function Index({ links }) {
    return (
        <p className={styles['bread-crumb']}>
            {links.map((link, i) => (
                <React.Fragment key={i}>
                    {i < links.length - 1 ? (
                        <>
                            <Link to={`/${link === "home" ? "" : link}`}>{link}</Link>
                            <span>&gt;</span>
                        </>
                    ) : (
                        <span>{link}</span>
                    )}
                </React.Fragment>
            ))}
        </p>
    )
}