import React from "react";

import styles from "../Navbar/Navbar.module.css";
import iconoEducamas from "../../assets/images/iconoEducamas.png";
import logoperfil from "../../assets/images/photoProfile.png";
import { BiGroup, BiMessageRoundedAdd } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineForum } from "react-icons/md";
import { Link } from "react-router-dom";
import DropdownLogOut from "./DropdownLogOut";
import Icon_news  from "../../assets/icons/Icon_new";
import Icon_events from "../../assets/icons/Icon_events";
import Icon_forum from "../../assets/icons/Icon_forum";
import Icon_job from "../../assets/icons/Icon_job";

const Navbar = () => {
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
                <Icon_news size="30" />
                <p>Home</p>
              </li>
            </Link>
            <Link to="/community">
              <li className={styles.navListItem}>
                <Icon_job size="30" />
                <p>Comunidad</p>
              </li>
            </Link>
            <Link to="/questions">
              <li className={styles.navListItem}>
                <Icon_forum size="30" />
                <p>Foro</p>
              </li>
            </Link>
          </ul>
          <div className={styles.containerPhoto}>
            <img
              src={logoperfil}
              alt="Prográmate"
              className={styles.photoProfile}
            />
            <DropdownLogOut />
          </div>
          <div>
            <Icon_events />
          </div>
        </nav>
      </div>
    </header>
);
};

export default Navbar;
