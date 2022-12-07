import React, { Fragment } from "react";

import styles from '../cardProfile.module.css';
const ProfileLanguages = (props) => {
    const { dataUserProfile } = props;

    return (
        <Fragment>
            <section className={styles.container1}>
                <div className={styles.container2}>
                    <div className={styles.icon_cont}>
                        <div className={styles.title}>
                            <p>Idiomas</p>
                        </div>
                    </div>
                    <div className={styles.icon_cont2}>

                        {dataUserProfile.languages?.map((lang, index) => (
                            <p className={styles.text_cont} key={index}>
                                {lang} &nbsp;
                            </p>

                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default ProfileLanguages;
