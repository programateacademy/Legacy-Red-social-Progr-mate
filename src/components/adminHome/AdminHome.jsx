import React, { Fragment } from 'react'
import style from './AdminHome.module.css'
import AdminCommunity from './adminCommunity/AdminCommunity'
import FormJobs from '../FormJobs/FormJobs'
import CreateUser from '../CreateUser/CreateUser'


const AdminHome = () => {

    return (
            < >
                <CreateUser/>
                <AdminCommunity/>
            </ >
    );
};

export default AdminHome;
