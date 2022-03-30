import React, { Fragment} from "react";


import style from "./ProfileLanguages.module.css";

const ProfileLanguages = (props) => {
    const { dataUserProfile } = props;

    return (
        <Fragment>
            <section className={style.container1}>
                <div className={style.container2}>
                    <div className={style.title}>
                        <p>Idiomas</p>
                    </div>
                    <div className={style.icon_cont2}>
                        
                        {dataUserProfile.languages?.map((lang, index) => (
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
