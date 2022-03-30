import React, { useState, useContext } from "react";
import styles from "../Navbar/Navbar.module.css";
import iconoEducamas from "../../assets/images/iconoEducamas.png";
import { Link } from "react-router-dom";
import DropdownLogOut from "./DropdownLogOut";
import Icon_alarm from "../../assets/icons/Icon_alarm";
import Notification from "../Notifications/Notification"
import { DataContext } from "../../context/DataContext";
import altImg from "../../assets/images/avatar.png";
<<<<<<< HEAD
=======
import { getData } from "../../helpers/fetch";
>>>>>>> dev
import { ItemsMenu } from "./components/ItemsMenu/ItemsMenu";
import { MenuButton } from "./components/MenuButton/MenuButton";

const Navbar = () => {
<<<<<<< HEAD
  const [activeNotification, setActiveNotification] = useState(false) 
  const onSetActive = () => {setActiveNotification(!activeNotification)}
  const { dataUser } = useContext(DataContext)
  const {avatar} = dataUser
  !localStorage.getItem("avatar") && localStorage.setItem("avatar", JSON.stringify(avatar))
  const avatarUser = JSON.parse(localStorage.getItem("avatar"))
=======
  const [activeNotification, setActiveNotification] = useState(false)
  const onSetActive = () => { setActiveNotification(!activeNotification) }
  const { avatar, setAvatar } = useContext(DataContext)
  const idUser = JSON.parse(localStorage.getItem("loggedAgoraUser")).id

  const fetchUser = async () => {
    const res = await getData("users", idUser)
    setAvatar(res.avatar)
  }

  !avatar ? fetchUser() : ""

>>>>>>> dev
  const [ toggle, setToggle ] = useState(false)
  
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
            <img
              src={iconoEducamas}
              alt="Prográmate"
              className={styles.iconoEducamas}
            />
            </Link>
            <MenuButton onClickMenu={handleClickMenu} iconActive={toggle ? "fa-solid fa-xmark" : "fa-solid fa-bars"}/>
          
          </div>
          
          
          <ItemsMenu toggle={toggle} onClickItem={handleClickItem}/>
          <div className={styles.containerPhoto}>
            {avatar ? (
              <img src={avatar} alt="Foto" className={styles.imgProfile}/>
            ) : (
                <img src={altImg} alt="Foto" className={styles.imgProfile}/>
            )}
              <div>
              
              <button onClick={onSetActive} className={styles.btnNotification}>
                <Icon_alarm/>
              </button>
              
            </div>
            <DropdownLogOut />
            </div>
            
        </div>
        
        </nav>
      
      { activeNotification && <Notification/>}
    </header>
  );
};

export default Navbar;