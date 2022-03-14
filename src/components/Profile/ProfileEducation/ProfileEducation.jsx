import React, { Fragment, useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import Education from "./Education";

import style from "./ProfileEducation.module.css";

const ProfileEducation = () => {
    const { dataProfile } = useContext(DataContext);
    const { prev_studes } = dataProfile;

    return (
        <Fragment>
            <section className={style.container1}>
                <div className={style.container2}>
                    <div className={style.icon_cont}>
                        <div className={style.title}>
                            <p>Educacion</p>
                        </div>
                    </div>
                    {prev_studes?.map(
                        (study, index) =>
                            study.degree && (
                                <Education key={index} study={study} />
                            )
                    )}

                    {/* <ProfileEducations /> */}
                </div>
            </section>
        </Fragment>
    );
};

export default ProfileEducation;
