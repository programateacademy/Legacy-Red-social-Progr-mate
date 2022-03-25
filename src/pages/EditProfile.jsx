import React from "react";
import ProfileEditor from "../components/ProfileEditor/ProfileEditor";
import {useParams} from "react-router-dom";

const EditProfile = () => {

    let params = useParams();
    return <ProfileEditor idUser={params.id}/>;
};

export default EditProfile;
