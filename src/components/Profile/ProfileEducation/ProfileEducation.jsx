import React, { Fragment} from "react";

import Education from "./Education";

import style from "./ProfileEducation.module.css";


const ProfileEducation = (props) => {
    const { dataUserProfile } = props;

    return (
        <Fragment>
            <section className={style.container1}>
                <div className={style.container2}>
                    <div className={style.icon_cont}>
                        <div className={style.title}>
                            <p>Educación</p>
                        </div>
                    </div>
                    {dataUserProfile.prev_studes?.map(
                        (study, index) =>
                            study.degree && (
                                <Education key={index} study={study} />
                            )
                    )}

                    
                </div>
            </section>
        </Fragment>
    );
};

export default ProfileEducation;
