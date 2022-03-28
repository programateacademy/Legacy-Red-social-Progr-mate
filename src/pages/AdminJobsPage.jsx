import React from 'react'
import { AdminCrudPosts } from '../components/AdminCrudPosts/AdminCrudPosts'
import { AdminNavigation } from '../components/AdminNavigation/AdminNavigation'

/* prender in /adminjobs */
function AdminJobsPage() {
    return (
        <>
            <AdminNavigation />
            <AdminCrudPosts name={"Ofertas"} postType={"jobs"} fields={["company", "place", "modality", "salary", "contact"]}>
                <th>Compañia</th>
                <th>Lugar</th>
                <th>Modalidad</th>
                <th>Salario</th>
                <th>Contacto</th>
            </AdminCrudPosts>
        </>
    )
}


export default AdminJobsPage 