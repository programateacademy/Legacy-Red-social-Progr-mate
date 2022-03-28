import React, { useContext } from "react";
import Footer from "../components/Footer/Footer";
import AdminHome from "../components/adminHome/AdminHome";
import Navbar from "../components/Navbar/Navbar"; 

const AdminHomePage = () => {
    return (
        <>
            <Navbar/>                        
            <AdminHome/>
        </>
    );
};

export default AdminHomePage;
