import React, { Fragment, useContext } from "react";
import style from "./ProfileMain.module.css";

import { DataContext } from "../../../context/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import altImg from "../../../assets/images/avatar.png";

const ProfileMain = ({ dataProfile }) => {
    const { dataUser, idUser } = useContext(DataContext);
    const { avatar, firstName, middleName, lastName, cohorte} = dataUser;

    let navigate = useNavigate();
    const params = useParams();

    const editProfile = () => {
        // console.log(idUser);
        navigate(`/formprofile/home/${idUser}`);
    };
    return (
        <Fragment>
            <section className={style.container}>
        <div className={style.cont}>
                  <div className={style.circulo_cont}>
                      <div className={style.profileTitle}><h2>Tu perfil</h2></div>
            <div className={style.editandphoto}>
              <div className={style.circulo}>
                {avatar ? (
                  <img src={avatar} alt="Foto" />
                ) : (
                  <img src={altImg} alt="Foto" />
                )}
              </div>
              <div>
                {!params.id && (
                  <div className={style.icon} onClick={editProfile}>
                    <i className="fas fa-pencil-alt"></i>
                  </div>
                )}
              </div>
            </div>
            <div className={style.tex}>
              <p>
                <b>
                  {firstName} {middleName} {lastName}
                </b>
                <br /> {cohorte.name}
              </p>
            </div>
          </div>
        </div>

      </section>
        </Fragment>
    );
};

export default ProfileMain;
