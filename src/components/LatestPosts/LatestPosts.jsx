import React, { Fragment } from "react";
import style from "./LatestPosts.module.css";

const LatestPosts = () => {
    return (
        <Fragment>
            <div className={style.container}>
                <section>
                    <div className={style.title_container}>
                        <div className={style.title}>
                            <h1>Ultimas Publicaciones </h1>
                            <i className="fas fa-pencil-alt"></i>
                        </div>
                        <p>
                            {" "}
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quisquam doloremque, itaque cumque error odit
                            quaerat fugit{" "}
                        </p>
                    </div>
                </section>

                <secton>
                    <div className={style.boton2}>
                        <button className={style.boton_principal2}>
                            proyecto
                        </button>
                        <button className={style.boton_principal2}>
                            Github
                        </button>
                    </div>

                    <div className={style.tecnologias}>
                        <button>HTML</button>
                        <button>CSS</button>
                        <button>Javascript</button>
                        <button>React</button>
                        <button>Angular</button>
                        <button>MySQL</button>
                        <button>Nodejs</button>
                        <button>MongoDB</button>
                    </div>
                </secton>
            </div>
        </Fragment>
    );
};

export default LatestPosts;
