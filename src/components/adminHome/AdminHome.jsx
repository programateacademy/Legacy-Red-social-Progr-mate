import React, { Fragment } from 'react'
import AdminCommunity from './adminCommunity/AdminCommunity'
import CreateUser from '../CreateUser/CreateUser'
import { AdminNavigation } from '../AdminNavigation/AdminNavigation';
import style from "./AdminHome.module.css"
/* Renders in AdminHomePage */
const AdminHome = () => {

    return (

            <div className={style.home_container}>
                <div className={style.admin_navigation}><AdminNavigation/></div>
                {/* <CreateUser /> */}
                <div className={style.admin_comunity}>
                    <AdminCommunity />
                </div>
            </div>
        
    );
};

export default AdminHome;
