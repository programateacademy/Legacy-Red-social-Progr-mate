import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import LazyLoad from 'react-lazy-load';
import BodyProfile from "../components/Profile/BodyProfile";

const ProfilePage = () => {
    return (
        <>
            <Navbar />
            <LazyLoad threshold={0.95}>
                <BodyProfile />
            </LazyLoad>
            <Footer />
        </>
    );
};

export default ProfilePage;
