import React from "react";
import styles from '../cardProfile.module.css';
const Technologies = (props) => {
    const { dataUserProfile } = props;


    return (
        <>
            <section className={styles.container1}>
                <div className={styles.container2}>
                    <div className={styles.icon_cont}>
                        <div className={styles.title}>
                            <p>Tecnologías</p>
                        </div>
                    </div>
                    <div className={styles.icon_cont2}>
                        {dataUserProfile.technicalSkills?.map((skill, index) => (
                            <p key={index}>
                                {skill} -&nbsp;
                            </p>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Technologies;
