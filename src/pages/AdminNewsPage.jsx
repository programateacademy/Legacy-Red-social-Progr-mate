import React from 'react'
import { AdminCrudPosts } from '../components/AdminCrudPosts/AdminCrudPosts'
import { AdminNavigation } from '../components/AdminNavigation/AdminNavigation'

/* /adminnes */
function AdminNewsPage() {
    return (
        <>
            <AdminNavigation />
            <AdminCrudPosts name={"Noticias"} postType={"news"} fields={[]}>
            </AdminCrudPosts>
        </>
    )
}


export { AdminNewsPage }