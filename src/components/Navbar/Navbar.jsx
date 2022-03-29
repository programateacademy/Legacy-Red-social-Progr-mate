import React, { useState, useContext } from "react";
import styles from "../Navbar/Navbar.module.css";
import iconoEducamas from "../../assets/images/iconoEducamas.png";
import { Link } from "react-router-dom";
import DropdownLogOut from "./DropdownLogOut";
import Icon_news from "../../assets/icons/Icon_new";
import Icon_events from "../../assets/icons/Icon_events";
import Icon_forum from "../../assets/icons/Icon_forum";
import Icon_job from "../../assets/icons/Icon_job";
import Icon_alarm from "../../assets/icons/Icon_alarm";
import Notification from "../Notifications/Notification"
import { DataContext } from "../../context/DataContext";
import altImg from "../../assets/images/avatar.png";
import { getData } from "../../helpers/fetch";

const Navbar = () => {
  const [activeNotification, setActiveNotification] = useState(false)
  const onSetActive = () => { setActiveNotification(!activeNotification) }
  const { avatar, setAvatar } = useContext(DataContext)
  const idUser = JSON.parse(localStorage.getItem("loggedAgoraUser")).id

  const fetchUser = async () => {
    const res = await getData("users", idUser)
    setAvatar(res.avatar)
  }

  !avatar ? fetchUser() : ""

  return (
    <header className={styles.globalNav}>
      <div className={styles.globalNavContent}>
        <nav className={styles.navBar}>
          <Link to="/home">
            <img
              src={iconoEducamas}
              alt="Prográmate"
              className={styles.iconoEducamas}
            />
          </Link>
          <ul className={styles.navList}>
            <Link to="/home">
              <li className={styles.navListItem}>
                <Icon_news />
                <p>NEWS</p>
              </li>
            </Link>
            <Link to="/community">
              <li className={styles.navListItem}>
                <Icon_job />
                <p>JOBS</p>
              </li>
            </Link>

            <Link to="/events">
              <li className={styles.navListItem}>
                <Icon_events />
                <p>EVENTS</p>
              </li>
            </Link>
            <Link to="/community">
              <li className={styles.navListItem}>
                <Icon_job />
                <p>COMUNITY</p>
              </li>
            </Link>
            <Link to="/questions">
              <li className={styles.navListItem}>
                <Icon_forum />
                <p>FORUM</p>
              </li>
            </Link>


            <div className={styles.containerPhoto}>
              {avatar ? (
                <img src={avatar} alt="Foto" className={styles.imgProfile} />
              ) : (
                <img src={altImg} alt="Foto" className={styles.imgProfile} />
              )}
              <div>

                <button onClick={onSetActive} className={styles.btnNotification}>
                  <Icon_alarm />
                </button>

              </div>
              <DropdownLogOut />
            </div>
          </ul>


        </nav>
      </div>
      {activeNotification && <Notification />}
    </header>
  );
};

export default Navbar;