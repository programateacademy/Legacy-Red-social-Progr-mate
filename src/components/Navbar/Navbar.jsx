import React from "react";

import styles from "../Navbar/Navbar.module.css";
import iconoEducamas from "../../assets/images/iconoEducamas.png";
import logoperfil from "../../assets/images/photoProfile.png";
import { BiGroup, BiMessageRoundedAdd } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import DropdownLogOut from "./DropdownLogOut";
import FilterHome from "../filterHome/FilterHome";

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
                    <FilterHome/>
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
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
