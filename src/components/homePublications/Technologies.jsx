import React from "react";
import style from "./Posts.module.css";

const Technologies = ({ tech }) => {
    return <p className={style.tech}>{tech}</p>;
};

export default Technologies;
