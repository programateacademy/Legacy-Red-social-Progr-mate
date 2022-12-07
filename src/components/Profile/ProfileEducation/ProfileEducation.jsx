import React, { Fragment } from "react";

import Education from "./Education";
import styles from '../cardProfile.module.css';


const ProfileEducation = (props) => {
    const { dataUserProfile } = props;

    return (
        <Fragment>
            <section className={styles.container1}>
                <div className={styles.container2}>
                    <div className={styles.icon_cont}>
                        <div className={styles.title}>
                            <p>Educación</p>
                        </div>
                    </div>
                    <div className={styles.icon_cont2}>
                        {dataUserProfile.prev_studes?.map(
                            (study, index) =>
                                study.degree && (
                                    <Education key={index} study={study} />
                                )
                        )}
                    </div>

                </div>
            </section>
        </Fragment>
    );
};

export default ProfileEducation;
