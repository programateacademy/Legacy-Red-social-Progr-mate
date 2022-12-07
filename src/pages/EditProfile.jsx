import React from "react";
import ProfileEditor from "../components/ProfileEditor/ProfileEditor";
import {useParams} from "react-router-dom";
import Navbar from '../components/Navbar/Navbar'
import LazyLoad from 'react-lazy-load';

const EditProfile = () => {

    let params = useParams();
    return (
        <>
            <Navbar/>
            <LazyLoad threshold={0.95}>
                <ProfileEditor idUser={params.id}/>
            </LazyLoad>
        </>
        )
};

export default EditProfile;
