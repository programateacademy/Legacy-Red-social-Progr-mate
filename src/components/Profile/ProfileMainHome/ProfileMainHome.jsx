import React, { Fragment, useContext, useEffect } from "react";
import style from "./ProfileMain.module.css";
/* import medalla1 from "../../../assets/images/medalla1.png";
import medalla2 from "../../../assets/images/medalla2.png";
import medalla3 from "../../../assets/images/medalla3.png"; */
import { DataContext } from "../../../context/DataContext";
import { Link, useNavigate } from "react-router-dom";
import altImg from "../../../assets/images/avatar.png";

const ProfileMainHome = ({ dataUser }) => {
    const { idUser } = useContext(DataContext);
    const { avatar, firstName, middleName, lastName, cohorte } = dataUser;

    let navigate = useNavigate();

    const editProfile = () => {
        // console.log(idUser);
        navigate(`/formprofile/${idUser}`);
    };

    return (
        <Fragment>
            <div className={style.container}>
                <section className={style.cont}>
                    <div className={style.circulo_cont}>
                        <div className={style.circulo}>
                            {avatar ? (
                                <img src={avatar} alt="Foto" />
                            ) : (
                                <img src={altImg} alt="Foto" />
                            )}
                        </div>
                    </div>
                </section>

                <section className={style.tex_cont}>
                    <div className={style.tex}>
                        <p>
                            <b>
                                {firstName} {middleName} {lastName}
                            </b>
                            <br /> {cohorte.name}
                        </p>
                    </div>

                    <div className={style.icon} onClick={editProfile}>
                        <p className={style.tex_editar}>Editar perfil</p>
                        <i className="fas fa-pencil-alt"></i>
                    </div>
                </section>
            </div>
        </Fragment>
    );
};

export default ProfileMainHome;
