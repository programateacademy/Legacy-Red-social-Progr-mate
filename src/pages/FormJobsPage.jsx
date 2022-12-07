import React from "react";
import LazyLoad from 'react-lazy-load';
import FormJobs from "../components/FormJobs/FormJobs";
import Footer from "../components/Footer/Footer";


const FormJobsPage = () => {



    return (
        <>
            <LazyLoad threshold={0.95}>
                <FormJobs />
            </LazyLoad>
            <Footer/>                    
        </>
    );
};

export default FormJobsPage;
