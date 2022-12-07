import React, { Fragment } from "react";

import Experience from "./Experience";

import styles from '../cardProfile.module.css';

const ProfileExperience = (props) => {
    const { dataUserProfile } = props


    return (
        <Fragment>
            <section className={styles.container1}>
                <div className={styles.container2}>
                    <div className={styles.icon_cont}>
                        <div className={styles.title}>
                            <p>Experiencia</p>
                        </div>
                    </div>
                    <div className={styles.icon_cont2}>
                        {dataUserProfile.experience?.map(
                            (exper, index) =>
                                exper.charge && (
                                    <Experience key={index} exper={exper} />
                                )
                        )}
                    </div>

                </div>
            </section>
        </Fragment>
    );
};

export default ProfileExperience;
