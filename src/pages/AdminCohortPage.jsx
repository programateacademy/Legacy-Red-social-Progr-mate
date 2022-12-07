import React from 'react'
import AdminNavigation from '../components/AdminNavigation/AdminNavigation'
import CreateCohort from '../components/CreateCohort/CreateCohort'
import LazyLoad from 'react-lazy-load';

function AdminCohortPage() {
    return (
        <>
            <LazyLoad threshold={0.95}>
                <AdminNavigation />
                <CreateCohort />
            </LazyLoad>
        </>
    )
}

export default AdminCohortPage 