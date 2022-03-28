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
            
            <div className={style.container1}>
                

                        <div className={style.title}>
                            <p>Acerca de</p>
                        </div>
                <div className={style.text}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo adipisci placeat minima possimus ipsum quod hic a cum! Eligendi, cupiditate adipisci. Inventore provident commodi mollitia magni maiores soluta suscipit quasi.{/* {dataProfile?.description} */}</p>
                    </div>
                
            </div>
        </>
    );
};

export default ProfileAbout;
