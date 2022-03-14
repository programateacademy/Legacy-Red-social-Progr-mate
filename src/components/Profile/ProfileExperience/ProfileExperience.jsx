import React, { Fragment, useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import Experience from "./Experience";

import style from "./ProfileExperience.module.css";

const ProfileExperience = () => {
    const { dataProfile } = useContext(DataContext);
    const { experience } = dataProfile;

    return (
        <Fragment>
            <section className={style.container1}>
                <div className={style.container2}>
                    <div className={style.icon_cont}>
                        <div className={style.title}>
                            <p>Experiencia</p>
                        </div>
                    </div>
                    {experience?.map(
                        (exper, index) =>
                            exper.charge && (
                                <Experience key={index} exper={exper} />
                            )
                    )}

                    {/* <ProfileEducations /> */}
                </div>
            </section>
        </Fragment>
    );
};

export default ProfileExperience;
