/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function Index({ links }) {
    return (
        <p className="breadCrumb">
            {links.map((link, i) => (
                <React.Fragment key={i}>
                    {i < links.length - 1 ? (
                        <Link to={`/${link === "home" ? "" : link}`}>{link} &gt;</Link>
                    ) : (
                        <span>{link}</span>
                    )}
                </React.Fragment>
            ))}
        </p>
    )
}