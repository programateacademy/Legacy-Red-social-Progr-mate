import React from "react";
import Footer from "../components/Footer/Footer";
import ForumAddQuestion from "../components/ForumAddQuestion/ForumAddQuestion";
import Navbar from "../components/Navbar/Navbar";
import LazyLoad from 'react-lazy-load';

const ForumQuestionsPage = () => {
    return (
        <>
            <Navbar />
            <LazyLoad threshold={0.95}>
                <ForumAddQuestion />
            </LazyLoad>
            <Footer />
        </>
    );
};

export default ForumQuestionsPage;
