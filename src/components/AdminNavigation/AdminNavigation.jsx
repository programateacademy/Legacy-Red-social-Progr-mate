import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavigation() {

    return (
            <ul>
                <li>
                <Link to="/adminhome">Usuarios</Link>
                </li>
                <li>
                    <Link to="/admincohort">Cohorte</Link>
                </li>
                <li>
                    <Link to="/adminjobs">Ofertas</Link>
                </li>
                <li>
                    <Link to="/adminnews">Noticias</Link>
                </li>
                <li>
                    <Link to="/adminevents">Eventos</Link>
                </li>
                <li>
                    <Link to="/adminforum">Foro</Link>
                </li>
            </ul>
    )
}

export {AdminNavigation}