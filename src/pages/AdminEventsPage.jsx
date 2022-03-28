import React from 'react'
import AdminCrudPosts  from '../components/AdminCrudPosts/AdminCrudPosts'
import AdminNavigation from '../components/AdminNavigation/AdminNavigation'

/* prender in /adminevents */
function AdminEventsPage() {
    return (
        <>
            <AdminNavigation />
            <AdminCrudPosts name={"Eventos"} postType={"event"} fields={["dateEvent", "link", "place"]}>
                <th>Fecha Evento</th>
                <th>Link</th>
                <th>Lugar</th>
            </AdminCrudPosts>
        </>
    )
}


export default AdminEventsPage 