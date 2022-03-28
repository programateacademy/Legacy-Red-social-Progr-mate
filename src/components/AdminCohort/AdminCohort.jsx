import React from 'react'
import { AdminNavigation } from '../AdminNavigation/AdminNavigation'
import CreateCohort from '../CreateCohort/CreateCohort'
import style from "../adminHome/AdminHome.module.css"

import { AdminCrudPosts } from '../AdminCrudPosts/AdminCrudPosts'

function AdminCohort() {
    return (
        <div className={style.home_container}>
            <div className={style.admin_navigation}><AdminNavigation /></div>
            <div className={style.admin_comunity}>
                {/*  <CreateCohort /> */}
                <AdminCrudPosts name={"Eventos"} postType={"event"} fields={["dateEvent", "link", "place"]}>
                    <th>Fecha Evento</th>
                    <th>Link</th>
                    <th>Lugar</th>
                </AdminCrudPosts>
            </div>
        </div>
    )
}

export default AdminCohort