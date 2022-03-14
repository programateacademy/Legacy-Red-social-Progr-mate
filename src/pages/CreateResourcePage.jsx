import React from "react";
import  Footer  from "../components/Footer/Footer"
import ForumCreateResources from "../components/ForumAddResources/ForumAddResources";
import Navbar from "../components/Navbar/Navbar";


const CreateResourcePage = () => {
  return (
    <>  
        <Navbar />
        <ForumCreateResources />
        <Footer />
    </>
  );
};

export default CreateResourcePage;