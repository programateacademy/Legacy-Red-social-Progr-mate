import React from 'react'
import styles from './AdminNavigation.module.css'

function AdminNavigation({ setActiveState, activePanel }) {
    const setActive = (panel) => {
        setActiveState(panel)
    }

    return (
        <ul className={styles.list}>
            <li className={`${styles.menu} ${activePanel == 'users' && styles.active}  `}>
                <button onClick={() => setActive('users')}>Usuarios</button>
            </li>
            <li className={`${styles.menu} ${activePanel == 'cohorts' && styles.active}`}>
                <button onClick={() => setActive('cohorts')}>Cohorte</button>
            </li>
            <li className={`${styles.menu} ${activePanel == 'jobs' && styles.active}`}>
                <button onClick={() => setActive('jobs')}>Ofertas</button>
            </li>
            <li className={`${styles.menu} ${activePanel == 'news' && styles.active}`}>
                <button onClick={() => setActive('news')}>Noticias</button>
            </li>
            <li className={`${styles.menu} ${activePanel == 'events' && styles.active}`}>
                <button onClick={() => setActive('events')}>Eventos</button>
            </li>
            <li className={`${styles.menu} ${activePanel == 'forum' && styles.active}`}>
                <button onClick={() => setActive('forum')}>Foro</button>
            </li>
        </ul>
    )
}

export default AdminNavigation