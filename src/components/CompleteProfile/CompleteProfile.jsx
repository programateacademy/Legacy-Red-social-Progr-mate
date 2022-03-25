import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Form_PersonalInfo from "../formInfo/Form_PersonalInfo";
import FormPhotoUser from "../formPhotoUser/FormPhotoUser";
import { DataContext } from "../../context/DataContext";
import { getDataAll, getData } from "../../helpers/fetch";
import {FieldProfessional} from "../FormProfile/FieldProfessional/FieldProfessional"


const CompletePerfil = () => {
    const { idUser, setDataUser, dataUser } =
        useContext(DataContext);

    const [status, setStatus] = useState(false);
    const [statusOff, setStatusOff] = useState(true);
    const [items, setItems] = useState([]);
    const [user, setUser] = useState([]);

    const firstEntry = JSON.parse(localStorage.getItem('firstEntry'))
    firstEntry ? localStorage.setItem("firstEntry", false) : ""

    useEffect(() => {
        setDataUser({ ...dataUser, user_info: idUser });
    }, [idUser]);

    return (
        <>
            <FormPhotoUser />
            <Form_PersonalInfo />
            <FieldProfessional/>
        </>
    )
};

export default CompleteProfile;
