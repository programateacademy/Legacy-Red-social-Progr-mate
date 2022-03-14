import React, { useContext } from "react";
import Footer from "../components/Footer/Footer";


import Formnews from "../components/formnews/Formnews";
import { DataContext } from "../context/DataContext";

const FormNewsPage = () => {

    const { sendData } = useContext(DataContext);

    return (
        <>
            <Formnews />
            <Footer/>
        </>
    );
};

export default FormNewsPage;