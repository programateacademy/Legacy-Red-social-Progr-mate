import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import axios from "axios";
import { baseUrl } from "../../../config";
import { useSelector } from "react-redux";

const handleLogout = async () => {
    try {
        await axios.get(`${baseUrl}/api/logout`);
        window.localStorage.removeItem("firstLogin");
        window.location.href = "/login";
    } catch (err) {
        window.location.href = "/login";
    }
};

function DropdownLogOut() {
    const auth = useSelector((state) => state.auth);
    const { isAdmin } = auth;
    const [isActive, setIsActive] = useState(false);
    const idUser = JSON.parse(localStorage.getItem("loggedAgoraUser")).id;
    return (
        <div className={styles.dropdownLogOut}>
            <div
                className={styles.dropdownBtn}
                onClick={(e) => setIsActive(!isActive)}
            >
                <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
                <div className={styles.dropdownContent}>
                    <Link to={`/profile/${idUser}`}>
                        <div className={styles.dropdownOptions}>
                            <BiUser size="24" color="black" /> Perfil
                        </div>
                    </Link>
                    {isAdmin && (
                        <Link to="/adminhome">
                            <div className={styles.dropdownOptions}>
                                <BiUser size="24" color="black" /> Panel de Administrador
                            </div>
                        </Link>
                    )}

                    <Link to="/" onClick={handleLogout}>
                        <div className={styles.dropdownOptions}>
                            <AiOutlinePoweroff size="24" /> Cerrar Sesión
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default DropdownLogOut;
