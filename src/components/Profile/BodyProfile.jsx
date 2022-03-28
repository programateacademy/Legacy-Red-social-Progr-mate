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
import style from "./BodyProfile.module.css";
import ProfileMainHome from "./ProfileMainHome/ProfileMainHome";
import { useParams } from "react-router-dom";
import { UserQuestions } from "../UserQuestions/UserQuestions";

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

  return (
    <div className={style.containBodyProfile}>
      {!showMain ? (
        <ProfileMain dataProfile={dataProfile} />
      ) : (
        <ProfileMainHome dataProfile={dataProfile} />
      )}
      <div className={style.profileBodyContainer}>
        <div className={style.profileInfo1}>
          <ProfileAbout />
          <ProfileEducation />
          <ProfileLanguages />
          <Technologies />

          <a href={dataProfile?.github} target="_blank">
            <button className={style.button} type="button">
              Ver Github
            </button>
          </a>
        </div>
              <div className={style.profilePosts}>{!showMain && <Posts />}</div>
              <div className={style.profileInfo2}>
        <ProfileSkills />
        <ProfileExperience />
      </div>
      </div>
      
    </div>
  );
};

export default BodyProfile;
