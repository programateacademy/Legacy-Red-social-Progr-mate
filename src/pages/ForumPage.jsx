import React from "react";
import Footer from "../components/Footer/Footer";
import ForumQuestions from "../components/ForumQuestions/ForumQuestions";
import Navbar from "../components/Navbar/Navbar";
import LazyLoad from 'react-lazy-load';

const ForumPage = () => {
    return (
        <>
            <Navbar/>
            <LazyLoad threshold={0.95}>
                <ForumQuestions />
            </LazyLoad>
            <Footer />
        </>
    );
};

export default ForumPage;
