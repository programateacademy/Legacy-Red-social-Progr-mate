import React from "react";
import styles from '../cardProfile.module.css';

const ProfileSkills = (props) => {
    const { dataUserProfile } = props;



    return (
        <>
            <section className={styles.container1}>
                <div className={styles.container2}>
                    <div className={styles.icon_cont}>
                        <div className={styles.title}>
                            <p>Habilidades</p>
                        </div>
                    </div>
                    <div className={styles.icon_cont2}>
                        {dataUserProfile.softSkills?.map((skill, index) => (
                            <p className={styles.skill} key={index}>
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
