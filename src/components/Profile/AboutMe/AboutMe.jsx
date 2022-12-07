import React from "react";

const AboutMe = (props) => {
    const { dataUserProfile } = props;
    return (
        <>
            <section className={styles.container1}>
                <div className={styles.container2}>
                    <div className={styles.icon_cont}>
                        <div className={styles.title}>
                            <p>Acerca de mi</p>
                        </div>
                    </div>
                    <div className={styles.icon_cont2}>

                        <p className={styles.skill}>
                            {dataUserProfile.description}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutMe;
