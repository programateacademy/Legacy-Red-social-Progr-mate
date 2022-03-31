import React from "react";
import ProfileEditor from "../components/ProfileEditor/ProfileEditor";
import {useParams} from "react-router-dom";
import Navbar from '../components/Navbar/Navbar'
const EditProfile = () => {

    let params = useParams();
    return (
        <>
            <Navbar/>
            <ProfileEditor idUser={params.id}/>;
        </>
        )
};

export default EditProfile;
