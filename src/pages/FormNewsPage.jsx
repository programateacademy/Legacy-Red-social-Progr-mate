import React from "react";
import Footer from "../components/Footer/Footer";
import LazyLoad from 'react-lazy-load';
import FormNews from "../components/FormNews/Formnews";

const FormNewsPage = () => {

    return (
        <>
            <LazyLoad threshold={0.95}>
                <FormNews />
            </LazyLoad>
            <Footer />
        </>
    );
};

export default FormNewsPage;