import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

function Search () {
    return (
        <div>
            <input
                className="TodoSearch"
                placeholder="Buscar aquí..."
                /* value={searchValue}
            onChange={onSearchValueChange} */
            />
        </div>
    );
}

export { Search };