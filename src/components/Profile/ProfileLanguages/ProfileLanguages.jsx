import React, { Fragment, useContext } from "react";
import { DataContext } from "../../../context/DataContext";

import style from "./ProfileLanguages.module.css";

const ProfileLanguages = () => {
    const { dataUser } = useContext(DataContext);
    const { lenguages } = dataUser;

    return (
        <Fragment>
            <section className={style.container1}>
                <div className={style.container2}>
                    <div className={style.title}>
                        <p>Idiomas</p>
                    </div>
                    <div className={style.icon_cont2}>
                        <div>
                            <i className="far fa-check-circle"></i>
                        </div>
                        {lenguages?.map((lang, index) => (
                            <p className={style.text_cont} key={index}>
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
