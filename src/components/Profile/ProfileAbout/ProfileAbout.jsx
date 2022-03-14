import React, { useContext, useEffect } from "react";
import { DataContext } from "../../../context/DataContext";
import { getData, getDataAll } from "../../../helpers/fetch";
import style from "./ProfileAbout.module.css";

const ProfileAbout = () => {
    const { dataProfile } = useContext(DataContext);

    // useEffect(async () => {
    //     if (idUser) {
    //         try {
    //             // console.log(idUser, "Testeando")

    //             const data = await getDataAll("profiles");

    //             // console.log(data);

    //             const filterData = data.filter(
    //                 (profile) => profile.user_info?._id === idUser
    //             );

    //             setDataProfile(filterData[0]);
    //             //console.log(filterData, "data del perfil"); !!!
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // }, [idUser]);

    return (
        <>
            <section className={style.container1}>
                <div className={style.container2}>
                    <div className={style.icon_cont}>
                        <div className={style.title}>
                            <p>Acerca de</p>
                        </div>
                    </div>
                    <div>
                        <p>{dataProfile?.description}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProfileAbout;
