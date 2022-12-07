import React from "react";
import Footer from "../components/Footer/Footer";
import ForumAnswers from "../components/ForumAnswers/ForumAnswers";
import Navbar from "../components/Navbar/Navbar";
import LazyLoad from 'react-lazy-load';


const ForumAnswersPage = () => {
    return (
        <>
            <Navbar />
            <LazyLoad threshold={0.95}>
                <ForumAnswers />
            </LazyLoad>
            <Footer />
        </>
    );
};

export default ForumAnswersPage;
