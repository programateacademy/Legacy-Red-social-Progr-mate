import React, { useContext } from "react";
import Footer from "../components/Footer/Footer";
import ForumQuestions from "../components/ForumQuestions/ForumQuestions";
import Navbar from "../components/Navbar/Navbar";


const ForumPage = () => {
    return (
        <>
            <Navbar/>
            <ForumQuestions />
            <Footer />
        </>
    );
};

export default ForumPage;
