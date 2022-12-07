import React from "react";
import Footer from "../components/Footer/Footer";
import AdminHome from "../components/adminHome/AdminHome";
import Navbar from "../components/Navbar/Navbar";
import LazyLoad from 'react-lazy-load';

const AdminHomePage = () => {
    return (
        <>
            <Navbar/>
            <LazyLoad threshold={0.95}>
                <AdminHome/>
            </LazyLoad>
            <Footer/>
        </>
    );
};

export default AdminHomePage;
