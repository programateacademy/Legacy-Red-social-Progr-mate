import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavigation({setActiveState}) {
    const setActive = (panel) => {
        setActiveState(panel)
    }
    return (
            <ul>
                <li>
                <button onClick={() => setActive('users')}>Usuarios</button>
                </li>
                <li>
                    <button onClick={() => setActive('cohorts')}>Cohorte</button>
                </li>
                <li>
                    <button onClick={() => setActive('jobs')}>Ofertas</button>
                </li>
                <li>
                    <button onClick={() => setActive('news')}>Noticias</button>
                </li>
                <li>
                    <button onClick={() => setActive('events')}>Eventos</button>
                </li>
                <li>
                    <button onClick={() => setActive('forum')}>Foro</button>
                </li>
            </ul>
    )
}

export default AdminNavigation