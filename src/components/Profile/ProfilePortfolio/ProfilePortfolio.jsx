import React, { Fragment } from "react";
import style from "./ProfilePortfolio.module.css";

const ProfilePortfolio = (props) => {
    const { dataUserProfile } = props;

    return (
        <Fragment>
            <section className={style.container1}>
                <div className={style.container2}>
                    <div className={style.icon_cont}>
                        <div className={style.title}>
                            <p>Portafolio</p>
                        </div>
                    </div>
                    <a href={dataUserProfile.portfolio} target="_blank" rel="noopener noreferrer">{dataUserProfile.portfolio}</a>

                </div>
            </section>
        </Fragment>
    );
};

export default ProfilePortfolio;
