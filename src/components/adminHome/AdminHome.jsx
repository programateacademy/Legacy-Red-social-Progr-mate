import React, { Fragment } from 'react'
import style from './AdminHome.module.css'
import AdminCommunity from './adminCommunity/AdminCommunity'
import FormJobs from '../FormJobs/FormJobs'



const AdminHome = () => {

    return (
        <Fragment>
                        
                        <AdminCommunity/>
                        <FormJobs/>
        </Fragment>
    );
};

export default AdminHome;
