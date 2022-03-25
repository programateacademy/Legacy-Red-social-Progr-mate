import React, { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import style from "./Technologies.module.css";

const Technologies = () => {
    const { dataUser } = useContext(DataContext);
    const { technicalSkills } = dataUser;

    return (
        <>
            <section className={style.container1}>
                <div className={style.container2}>
                    <div className={style.icon_cont}>
                        <div className={style.title}>
                            <p>Tegnologías</p>
                        </div>
                    </div>
                    <div>
                        {technicalSkills?.map((skill, index) => (
                            <p className={style.skill} key={index}>
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
