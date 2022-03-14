import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { getDataAll, getData } from "../../helpers/fetch";
import Technologies from "./Technologies/Technologies";
import ProfileMain from "./ProfileMain/ProfileMain";
import ProfileAbout from "./ProfileAbout/ProfileAbout";
import ProfileSkills from "./Profileskills/ProfileSkills";
import ProfileEducation from "./ProfileEducation/ProfileEducation";
import ProfileExperience from "./ProfileExperience/ProfileExperience";
import ProfileLanguages from "./ProfileLanguages/ProfileLanguages";
import Posts from "./Posts/Posts";
import style from "./Posts/Posts.module.css";
import ProfileMainHome from "./ProfileMainHome/ProfileMainHome";
import { useParams } from "react-router-dom";

const BodyProfile = () => {
    const { idUser, setDataProfile, dataProfile, setDataUser } =
        useContext(DataContext);
    const [showMain, setShowMain] = useState(false);

    const params = useParams();

    useEffect(() => {
        const path = window.location.pathname;
        if (path === "/" || path === "/home") {
            setShowMain(true);
        }
    }, []);

    //Traer data del usuario
    useEffect(async () => {
        if (idUser) {
            try {
                if (!params.id) {
                    const data = await getData("users", idUser);
                    setDataUser(data);
                } else {
                    const data = await getData("users", params.id);
                    setDataUser(data);
                }
                //console.log(data,idUser)
            } catch (error) {
                console.log(error);
            }
        }
    }, [idUser]);

    useEffect(async () => {
        if (idUser) {
            try {
                const data = await getDataAll("profiles");
                if (!params.id) {
                    const filterData = data.filter(
                        (profile) => profile.user_info._id === idUser
                    );
                    setDataProfile(filterData[0]);
                } else {
                    const filterData = data.filter(
                        (profile) => profile.user_info._id === params.id
                    );
                    console.log(filterData[0]);
                    setDataProfile(filterData[0]);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }, [idUser]);

    return (
        <div className={style.containBodyProfile}>
            {!showMain ? (
                <ProfileMain dataProfile={dataProfile} />
            ) : (
                <ProfileMainHome dataProfile={dataProfile} />
            )}

            <ProfileAbout />
            <ProfileSkills />
            <ProfileEducation />
            <ProfileExperience />
            <Technologies />
            <ProfileLanguages />
            {!showMain && <Posts />}
        </div>
    );
};

export default BodyProfile;
