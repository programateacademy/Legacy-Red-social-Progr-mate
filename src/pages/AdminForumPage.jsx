import React from 'react'
import { AdminCrudPosts } from '../components/AdminCrudPosts/AdminCrudPosts'
import { AdminNavigation } from '../components/AdminNavigation/AdminNavigation'

/*render in /adminforum */
function AdminForumPage() {
    return (
        <>
            <AdminNavigation />
            <AdminCrudPosts name={"Preguntas"} postType={"questions"} fields={[]}>
            </AdminCrudPosts>
        </>
    )
}


export { AdminForumPage }