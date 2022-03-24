import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import style from "./filterHome.module.css";

/* Filter post in home -> NOT USING */
const FilterHome = () => {
    const { filterHome, setFilterHome } = useContext(DataContext);

    const handleChange = ({ target }) => {
        const valueInput = target.value.toLowerCase();
        setFilterHome(valueInput);
    };

    return (
        <div className={style.filter}>
            <input
                type="text"
                placeholder="Buscar publicación "
                value={filterHome}
                onChange={handleChange}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    );
};
