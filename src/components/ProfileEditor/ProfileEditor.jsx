import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form_PersonalInfo from "./formInfo/Form_PersonalInfo";
import FormPhotoUser from "./formPhotoUser/FormPhotoUser";
import { getData } from "../../helpers/fetch";
import {FieldProfessional} from "./FormProfile/FieldProfessional/FieldProfessional"
import { v4 as uuid } from "uuid";
import { studyField, experienceField } from "../../helpers/formProfile";

const ProfileEditor = () => {
    let params = useParams()
    const  [dataUser, setDataUser] = useState({
    avatar: "",
    cohorte: {},
    contactNumber: null,
    email: "",
    firstName: "",
    lastName: "",
    middleName: "",
    passwordHash: "",
    program: "Progamate",
    rol: 0,
    secondSurname: "",
    state: true,
    github: "",
    description: "",
    technicalSkills: [],
    softSkills: [],
    languages: [],
    prev_studes: [{ ...studyField, id: uuid() }],
    experience: [{ ...experienceField, id: uuid() }]
    })
    const [dataProfile, setDataProfile] = useState({})
    const setDataUserFromChild = (data ) => {
        setDataUser(data)
    }

    const setDataProfileFromChild = (data ) => {
        setDataProfile(data)
    }
    useEffect(async()=> {
        const data = await getData("users", params.id);
        setDataUser(data);
    },[])
    
    const firstEntry = JSON.parse(localStorage.getItem('firstEntry'));
    firstEntry ? localStorage.setItem("firstEntry", false) : "";

    return (
        <>
            <FormPhotoUser dataUser={dataUser} setDataUser={setDataUserFromChild}/>
            <Form_PersonalInfo dataUser={dataUser}  dataProfile={dataProfile} setDataUser={setDataUserFromChild} setDataProfile={setDataProfileFromChild}/>
            <FieldProfessional dataUser={dataUser} dataProfile={dataProfile} setDataProfile={setDataProfileFromChild} setDataUser={setDataUserFromChild}/>
        </>
    )
};

export default ProfileEditor;
