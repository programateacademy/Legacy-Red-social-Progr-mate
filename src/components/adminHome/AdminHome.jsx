import React, { Fragment } from 'react'
import AdminCommunity from './adminCommunity/AdminCommunity'
import CreateUser from '../CreateUser/CreateUser'
import { AdminNavigation } from '../AdminNavigation/AdminNavigation';

/* Renders in AdminHomePage */
const AdminHome = () => {

    return (
        <>
            <AdminNavigation/>
            <CreateUser />
            <AdminCommunity />
        </>
    );
};

export default AdminHome;
