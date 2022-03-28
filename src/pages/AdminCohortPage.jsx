import React from 'react'
import AdminCohort from '../components/AdminCohort/AdminCohort'
import { AdminNavigation } from '../components/AdminNavigation/AdminNavigation'
import CreateCohort from '../components/CreateCohort/CreateCohort'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function AdminCohortPage() {
    return (
        <>
            <Navbar/>
            <AdminCohort />
        </>
    )
}

export default AdminCohortPage 