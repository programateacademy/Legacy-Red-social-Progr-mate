import React, { Fragment} from "react";

import Experience from "./Experience";

import style from "./ProfileExperience.module.css";

const ProfileExperience = (props) => {
    const {dataUserProfile} = props
    

    return (
        <Fragment>
            <section className={style.container1}>
                <div className={style.container2}>
                    <div className={style.icon_cont}>
                        <div className={style.title}>
                            <p>Experiencia</p>
                        </div>
                    </div>
                    {dataUserProfile.experience?.map(
                        (exper, index) =>
                            exper.charge && (
                                <Experience key={index} exper={exper} />
                            )
                    )}

                    
                </div>
            </section>
        </Fragment>
    );
};

export default ProfileExperience;
