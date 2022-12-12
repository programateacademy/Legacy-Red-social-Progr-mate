import React from "react";
function Search() {
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