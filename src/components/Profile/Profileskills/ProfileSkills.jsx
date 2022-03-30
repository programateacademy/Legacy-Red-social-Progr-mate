import React from "react";

import style from "./ProfileSkills.module.css";

const ProfileSkills = (props) => {
    const { dataUserProfile } = props;
    


    return (
        <>
            <section className={style.container1}>
                <div className={style.container2}>
                    <div className={style.icon_cont}>
                        <div className={style.title}>
                            <p>Habilidades</p>
                        </div>
                    </div>
                    <div className={style.icon_cont2}>
                        {dataUserProfile.softSkills?.map((skill, index) => (
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
