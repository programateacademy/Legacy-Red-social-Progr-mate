import React from 'react'
import { AdminNavigation } from '../AdminNavigation/AdminNavigation'
import CreateCohort from '../CreateCohort/CreateCohort'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function AdminCohort() {
    return (
        <>
            <AdminNavigation />
            <CreateCohort />
        </>
    )
}

export default AdminCohort