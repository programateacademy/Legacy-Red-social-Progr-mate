import React, { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import style from "./Technologies.module.css";

const Technologies = () => {
    const { dataProfile } = useContext(DataContext);
    const { technicalSkills } = dataProfile;

    return (
        <>
            <section className={style.container1}>
                <div className={style.container2}>
                    <div className={style.icon_cont}>
                        <div className={style.title}>
                            <p>Tecnologías</p>
                        </div>
                    </div>
                    <div className={style.skill}>
                        {technicalSkills?.map((skill, index) => (
                            <p  key={index}>
                                {skill} -&nbsp;
                            </p>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Technologies;
