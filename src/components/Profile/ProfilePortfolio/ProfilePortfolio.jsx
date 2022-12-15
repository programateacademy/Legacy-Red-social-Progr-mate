import React, { Fragment } from "react";
import styles from '../cardProfile.module.css';
const ProfilePortfolio = (props) => {
    const { dataUserProfile } = props;

    return (
        <Fragment>
           <section className={styles.container1}>
                <div className={styles.container2}>
                    <div className={styles.icon_cont}>
                        <div className={styles.title}>
                            <p>Acerca de mi</p>
                        </div>
                    </div>
                    <div className={styles.icon_cont2}>
                        <div className={styles.box}>
                        <p className={styles.skill}>
                    <a href={dataUserProfile.portfolio} target="_blank" rel="noopener noreferrer">{dataUserProfile.portfolio}</a>
                    </p>
                    </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default ProfilePortfolio;
