import React, { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import style from "./ProfileSkills.module.css";

const ProfileSkills = () => {
    const { dataProfile } = useContext(DataContext);
    const { softSkills } = dataProfile;

    return (
        <>
            <section className={style.container1}>
                <div className={style.container2}>
                    <div className={style.icon_cont}>
                        <div className={style.title}>
                            <p>Habilidades</p>
                        </div>
                    </div>
                    <div>
                        {softSkills?.map((skill, index) => (
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

export default ProfileSkills;
