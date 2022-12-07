import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import LazyLoad from 'react-lazy-load';
import UsersList from "../components/UsersList/UsersList"


const CommunityPage = () => {

    return (
        <>
            <Navbar />
            <LazyLoad threshold={0.95}>
                <UsersList />
            </LazyLoad>
            <Footer />
        </>
    );
};

export default CommunityPage;
