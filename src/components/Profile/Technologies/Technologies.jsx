import React from "react";
import style from "./Technologies.module.css";

const Technologies = (props) => {
    const { dataUserProfile } = props;
    

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
                        {dataUserProfile.technicalSkills?.map((skill, index) => (
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
