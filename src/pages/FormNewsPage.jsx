import React, { useContext } from "react";
import Footer from "../components/Footer/Footer";


import FormNews from "../components/FormNews/FormNews";
import { DataContext } from "../context/DataContext";

const FormNewsPage = () => {

    const { sendData } = useContext(DataContext);

    return (
        <>
            <FormNews />
            <Footer/>
        </>
    );
};

export default FormNewsPage;