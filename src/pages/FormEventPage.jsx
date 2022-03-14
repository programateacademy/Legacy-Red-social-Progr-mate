import React, { useContext } from "react";
import Footer from "../components/Footer/Footer";


import FormEvent from "../components/FormEvent/FormEvent";
import { DataContext } from "../context/DataContext";

const FormEventPage = () => {

    const { sendData } = useContext(DataContext);

    return (
        <>
            <FormEvent />
            <Footer />
        </>
    );
};

export default FormEventPage;
