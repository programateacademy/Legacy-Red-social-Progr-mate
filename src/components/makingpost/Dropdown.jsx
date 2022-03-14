import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../makingpost/Makingpost.module.css";

function Dropdown() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.dropdown}>
            <div
                className={styles.dropdown_btn}
                onClick={(e) => setIsActive(!isActive)}
            >
                Crear una publicación
                <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
                <div className={styles.dropdown_content}>
                    <Link to="/formevent">
                        <div className={styles.dropdown_item}>Evento</div>
                    </Link>
                    <Link to="/formnews">
                        <div className={styles.dropdown_item}>Noticia</div>
                    </Link>
                    <Link to="/formjobs">
                        <div className={styles.dropdown_item}>
                            Oferta Laboral
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
