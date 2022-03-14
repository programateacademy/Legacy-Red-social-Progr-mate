import React from "react";
import style from "./ProfileExperience.module.css";

const Experience = ({ exper }) => {
    return (
        <div className={style.icon_cont2}>
            <div>
                <i className="fas fa-briefcase"></i>
            </div>
            <p>
                <b>{exper.charge}</b>
                <br /> {exper.company} <br />
                <br /> {exper.descriptionJob} <br />
                <span>
                    {exper.jobDateInit.slice(0, 7)} hasta{" "}
                    {exper.jobDateFin.slice(0, 7)}
                </span>
            </p>
        </div>
    );
};

export default Experience;
