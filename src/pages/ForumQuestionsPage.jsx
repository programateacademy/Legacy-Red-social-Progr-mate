import React, { useContext } from "react";
import Footer from "../components/Footer/Footer";
import ForumAddQuestion from "../components/ForumAddQuestion/ForumAddQuestion";



import UsersList from "../components/UsersList/UsersList";

const ForumQuestionsPage = () => {
    return (
        <>
            
            <ForumAddQuestion />
            <Footer />
        </>
    );
};

export default ForumQuestionsPage;
