import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Form_PersonalInfo from "./formInfo/Form_PersonalInfo";
import FormPhotoUser from "./formPhotoUser/FormPhotoUser";
import { getData, getDataAll } from "../../helpers/fetch";
import FieldProfessional from "./FormProfile/FieldProfessional/FieldProfessional"
import { v4 as uuid } from "uuid";
import { studyField, experienceField } from "../../helpers/formProfile";
import styles from './ProfileEditor.module.css'
import { DataContext } from "../../context/DataContext";
const ProfileEditor = () => {
    const {allCohorts, setCohorts} = useContext(DataContext);
    let params = useParams()
    const  [dataUser, setDataUser] = useState({
    avatar: "",
    cohorte: "" ,
    contactNumber: null,
    email: "",
    firstName: "",
    secondSurname: "",
    lastName: "",
    middleName: "",
    passwordHash: "",
    program: "Progamate",
    rol: 0,
    state: true,
    github: "",
    description: "",
    technicalSkills: [],
    softSkills: [],
    languages: [],
    prev_studes: [{ ...studyField, id: uuid() }],
    experience: [{ ...experienceField, id: uuid() }]
    });
    const setDataUserFromChild = (data ) => {
        setDataUser(data)
    };
    useEffect(async()=> {
        const data = await getData("users", params.id);
        setDataUser(data);
        const dataCohort = await getDataAll("cohorte");
        setCohorts(dataCohort)
    },[])
    
    const firstEntry = JSON.parse(localStorage.getItem('firstEntry'));
    firstEntry ? localStorage.setItem("firstEntry", false) : "";

    return (
            <div className={styles.editor_container}>
                <FormPhotoUser dataUser={dataUser} setDataUser={setDataUserFromChild}/>
                <Form_PersonalInfo dataUser={dataUser}  setDataUser={setDataUserFromChild} allCohorts={allCohorts}/>
                <FieldProfessional dataUser={dataUser} setDataUser={setDataUserFromChild}/>
            </div>
    )
};

export default ProfileEditor;
