import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { getDataAll, getData } from "../../helpers/fetch";
import Technologies from "./Technologies/Technologies";
import ProfileMain from "./ProfileMain/ProfileMain";

import ProfileSkills from "./Profileskills/ProfileSkills";
import ProfileEducation from "./ProfileEducation/ProfileEducation";
import ProfileExperience from "./ProfileExperience/ProfileExperience";
import ProfileLanguages from "./ProfileLanguages/ProfileLanguages";
import Posts from "./Posts/Posts";
import style from "./BodyProfile.module.css";
import ProfileMainHome from "./ProfileMainHome/ProfileMainHome";
import { useParams } from "react-router-dom";
import { UserQuestions } from "../UserQuestions/UserQuestions";
import ProfilePortfolio from "./ProfilePortfolio/ProfilePortfolio";
import AboutMe from "./AboutMe/AboutMe";

const BodyProfile = () => {
  const { dataProfile, setDataUser } =
    useContext(DataContext);
  const params = useParams();
  const idUserProfile = params.id
  const idUser = JSON.parse(localStorage.getItem("loggedAgoraUser")).id;
  const [showMain, setShowMain] = useState(false);
  const [dataUserProfile, setDataUserProfile] = useState([])
  const fetchDataUser = async () => {
    if (idUserProfile) {
      const data = await getData("users", idUserProfile);
      setDataUserProfile(data);
    }
  }

  useEffect(async () => {
    try {
      fetchDataUser();
      const path = window.location.pathname;

      if (path === "/" || path === "/home") {
        setShowMain(true);
      }
    } catch (error) {
      console.log(error);
    }


  }, [idUserProfile]);

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

      } catch (error) {
        console.log(error);
      }
    }
  }, [idUser]);

  return (
    <>
      {!showMain ? (
        <div className={style.containBodyProfile}>
          <ProfileMain dataProfile={dataUserProfile} />
          <div className={style.profileBodyContainer}>
            <div className={style.profileInfo1}>

              <div className={style.boxComponents}>
              <AboutMe dataUserProfile={dataUserProfile}/>
              <ProfileEducation dataUserProfile={dataUserProfile} />
              <ProfileLanguages dataUserProfile={dataUserProfile} />
              <Technologies dataUserProfile={dataUserProfile} />
              
             
              <ProfileSkills dataUserProfile={dataUserProfile} />
              <ProfileExperience dataUserProfile={dataUserProfile} />
              <ProfilePortfolio dataUserProfile={dataUserProfile} />
              </div>
            
            </div>
           
            <div className={style.profilePosts}>{!showMain && <Posts dataUserProfile={dataUserProfile} />}</div>
            
          </div>
          <div className={style.btnProfile}>
              <a href={dataUserProfile.github} target="_blank">
                  <button className={style.button} type="button">
                    Ver Github
                  </button>
                </a>
                </div>
        </div>
      ) : (
        <div className={style.containBodyProfileHome}>
          <ProfileMainHome dataProfile={dataUserProfile} />
          {/* <UserQuestions /> */}
        </div>
      )}


    </>
  );
};

export default BodyProfile;
