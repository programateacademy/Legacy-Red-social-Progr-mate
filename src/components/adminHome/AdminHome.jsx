import React, { Fragment } from 'react'
import AdminCommunity from './adminCommunity/AdminCommunity'
import CreateUser from '../CreateUser/CreateUser'

/* Renders in AdminHomePage */
const AdminHome = () => {

    return (
        <>
            <CreateUser />
            <AdminCommunity />
        </>
    );
};

export default AdminHome;
