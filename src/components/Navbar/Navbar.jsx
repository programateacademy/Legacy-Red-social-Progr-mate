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
import Icon_work from "../../assets/icons/Icon_work";

const Navbar = () => {
    return (
    <header className={styles.globalNav}>
<<<<<<< HEAD
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
                    <BiHomeAlt size="30" />
                    <p>Home</p>
                    </li>
                </Link>
                <Link to="/community">
                    <li className={styles.navListItem}>
                    <BiGroup size="30" />
                    <p>Comunidad</p>
                    </li>
                </Link>
                <Link to="/questions">
                    <li className={styles.navListItem}>
                    <BiMessageRoundedAdd size="30" />
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
                    <Icon_news />
                </div>
                <div>
                    <Icon_events />
                </div>
                <div>
                    <Icon_forum />
                </div>
                <div>
                    <Icon_work />
                </div>
            </nav>
        </div>
=======
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
                <Icon_work size="30" />
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
>>>>>>> 36a9512d07d8cd009b69854a536d6b8c91e8b694
    </header>
);
};

export default Navbar;
