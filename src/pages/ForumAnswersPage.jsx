import React from "react";
import Footer from "../components/Footer/Footer";
import ForumAnswers from "../components/ForumAnswers/ForumAnswers";
import Navbar from "../components/Navbar/Navbar";

const ForumAnswersPage = () => {
    return (
        <>
            <Navbar />
            <ForumAnswers />
            <Footer />
        </>
    );
};

export default ForumAnswersPage;
