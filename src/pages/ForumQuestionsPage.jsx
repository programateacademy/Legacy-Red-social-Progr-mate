import React, { useContext } from "react";
import Footer from "../components/Footer/Footer";
import ForumAddQuestion from "../components/ForumAddQuestion/ForumAddQuestion";
import Navbar from "../components/Navbar/Navbar";



import UsersList from "../components/UsersList/UsersList";

const ForumQuestionsPage = () => {
    return (
        <>
            <Navbar />
            <ForumAddQuestion />
            <Footer />
        </>
    );
};

export default ForumQuestionsPage;
