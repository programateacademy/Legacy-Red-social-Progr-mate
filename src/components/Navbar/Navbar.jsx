import React, { useState, useContext, useEffect } from "react";
import styles from "../Navbar/Navbar.module.css";
import iconoEducamas from "../../assets/images/iconoEducamas.png";
import { Link } from "react-router-dom";
import DropdownLogOut from "./DropdownLogOut";
import Icon_alarm from "../../assets/icons/Icon_alarm";
import Icon_home from "../../assets/icons/Icon_home";
import Notification from "../Notifications/Notification"
import { DataContext } from "../../context/DataContext";
import altImg from "../../assets/images/avatar.png";
import { getData } from "../../helpers/fetch";
import { ItemsMenu } from "./components/ItemsMenu/ItemsMenu";
import { MenuButton } from "./components/MenuButton/MenuButton";

const Navbar = () => {
  const [activeNotification, setActiveNotification] = useState(false)
  const onSetActive = () => { setActiveNotification(!activeNotification) }
  const { avatar, setAvatar } = useContext(DataContext)
  const idUser = JSON.parse(localStorage.getItem("loggedAgoraUser")).id

  const fetchUser = async () => {
    try {
      const user = await getData("users", idUser)
      setAvatar(user.avatar)
    } catch (error) {
      console.log("Error: " + error)
    }
  }


  useEffect(() => {
    !avatar ? fetchUser() : ""
  }, [idUser])

  const [toggle, setToggle] = useState(false)

  const handleClickMenu = () => {
    setToggle(!toggle)
  };
  const handleClickItem = () => {
    setToggle(false)
  }
  return (
    <header>
      <nav className={styles.navBar}>
        <div className={styles.navTop}>
          <div className={styles.navLeft}>
            <Link to="/home">
              <Icon_home width={70} height={50} />
            </Link>
            <MenuButton onClickMenu={handleClickMenu} iconActive={toggle ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />

          </div>


          <ItemsMenu toggle={toggle} onClickItem={handleClickItem} />
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

        </div>

      </nav>

      {activeNotification && <Notification />}
    </header>
  );
};

export default Navbar;