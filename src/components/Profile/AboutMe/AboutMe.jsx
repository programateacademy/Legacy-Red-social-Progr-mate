import React from "react";

import style from './AboutMe.module.css';

const AboutMe = (props) => {
    const { dataUserProfile } = props;
    


    return (
        <>
            <section className={style.container1}>
                <div className={style.container2}>
                    <div className={style.icon_cont}>
                        <div className={style.title}>
                            <p>Acerca de mi</p>
                        </div>
                    </div>
                    <div className={style.icon_cont2}>
                        
                            <p className={style.skill}>
                                {dataUserProfile.description}
                            </p>
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutMe;
