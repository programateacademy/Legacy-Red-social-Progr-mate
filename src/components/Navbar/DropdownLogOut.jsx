import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import axios from "axios";
import { baseUrl } from "../../../config";

const handleLogout = async () => {
    try {
        await axios.get(`${baseUrl}/api/logout`);
        window.localStorage.removeItem("firstLogin");
        window.location.href = "/login";
        // console.log("Entrando")
    } catch (err) {
        window.location.href = "/login";
    }
};

function DropdownLogOut() {
    const [isActive, setIsActive] = useState(false);

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
                    <Link to="/profile">
                        <div className={styles.dropdownOptions}>
                            <BiUser size="24" color="black" /> Perfil
                        </div>
                    </Link>
                    <Link to="/" onClick={handleLogout}>
                        <div className={styles.dropdownOptions}>
                            <AiOutlineCloseCircle size="24" /> Cerrar Sesión
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default DropdownLogOut;
