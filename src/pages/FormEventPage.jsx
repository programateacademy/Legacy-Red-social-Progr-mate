import React from "react";
import Footer from "../components/Footer/Footer";
import LazyLoad from 'react-lazy-load';
import FormEvent from "../components/FormEvent/FormEvent";

const FormEventPage = () => {
    return (
        <>
            <LazyLoad threshold={0.95}>
                <FormEvent />
            </LazyLoad>
            <Footer />
        </>
    );
};

export default FormEventPage;
