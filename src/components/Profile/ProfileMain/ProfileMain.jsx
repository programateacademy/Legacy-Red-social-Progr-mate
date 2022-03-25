import React, { Fragment, useContext, useEffect } from "react";
import style from "./ProfileMain.module.css";
/* import medalla1 from "../../../assets/images/medalla1.png";
import medalla2 from "../../../assets/images/medalla2.png";
import medalla3 from "../../../assets/images/medalla3.png"; */
import { DataContext } from "../../../context/DataContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import altImg from "../../../assets/images/avatar.png";

const ProfileMain = ({ dataProfile }) => {
    const { dataUser, idUser } = useContext(DataContext);
    const { avatar, firstName, middleName, lastName, cohorte, data } = dataUser;

    let navigate = useNavigate();
    const params = useParams();

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

                    <div className={style.img_cont}>
                        {/*                         <div>
                            <img src={medalla1} alt="imagen1" />
                            <img src={medalla2} alt="imagen2" />
                            <img src={medalla3} alt="imagen3" />
                        </div> */}
                        <div className={style.but_cont}>

                            {!params.id ? (
                                <Link to="/portfolio">
                                    <button>Ver portafolio</button>
                                </Link>
                            ) : (
                                <button
                                    onClick={() =>
                                        navigate(`/portfolio/${params.id}`)
                                    }
                                >
                                    Ver portafolio
                                </button>
                            )}

                            <a href={dataProfile?.github} target="_blank">
                                <button className={style.button} type="button">Ver Github</button>
                            </a>
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
                    {!params.id && (
                        <div className={style.icon} onClick={editProfile}>
                            <p className={style.tex_editar}>Editar perfil</p>
                            <i className="fas fa-pencil-alt"></i>
                        </div>
                    )}
                </section>
            </div>
        </Fragment>
    );
};

export default ProfileMain;
