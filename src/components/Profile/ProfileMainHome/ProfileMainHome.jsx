import React, { useContext, useEffect, useState } from "react";
import style from "./ProfileMain.module.css";
import { DataContext } from "../../../context/DataContext";
import {  useNavigate } from "react-router-dom";
import altImg from "../../../assets/images/avatar.png";
import { getData, getDataAll} from "../../../helpers/fetch";

/* profile card in home page */
const ProfileMainHome = ({ dataProfile }) => {
    const { dataUser} = useContext(DataContext);
    const { avatar, firstName, middleName, lastName } = dataUser;
    const [cohort, setCohort] = useState();
    const idUser = JSON.parse(localStorage.getItem("loggedAgoraUser")).id;
    let navigate = useNavigate();

    const editProfile = () => {
        
        navigate(`/formprofile/home/${idUser}`);
    };

    /* Obtain user cohort name */
    const obtainCohort = async () => { 
        const cohorts = await getDataAll("cohorte");
        const cohort = await cohorts.find(cohort => cohort._id === dataUser.cohorte);
        setCohort(cohort?.cohorte_name);
    }

    useEffect(async () => { 
        await obtainCohort();
    },[dataUser])
    console.log(cohort)
    console.log(dataUser)
    return (
        <div className={style.container}>
            <section className={style.cont}>
                <div className={style.photoContainer}>
                    {avatar ? (
                        <img src={altImg} alt="Foto" className={style.avatarImg}/>
                    ) : (
                        <div className={style.photoSkeleton}></div>
                    )}
                </div>
            </section>

            <section className={style.tex_cont}>
                <div className={style.tex}>
                    <p className={style.name}>
                        <b>{firstName} {middleName} {lastName}</b>
                    </p>
                    <p className={style.cohort}>
                       {cohort}
                    </p>
                </div>
                <div className={style.icon} onClick={editProfile}>
                    <i className="fas fa-pencil-alt"></i>
                </div>
            </section>
        </div>
    );
};

export default ProfileMainHome;
