import React from 'react'
import { AdminNavigation } from '../components/AdminNavigation/AdminNavigation'
import CreateCohort from '../components/CreateCohort/CreateCohort'
import Navbar from '../components/Navbar/Navbar'

function AdminCohortPage() {
    return (
        <>
            <Navbar/>
            <AdminNavigation />
            <CreateCohort/>
        </>
    )
}

export default AdminCohortPage 