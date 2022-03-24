import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { studyField, experienceField } from "../../../helpers/formProfile";
import { v4 as uuid } from "uuid";

import style from "../ProfessionalInformation.module.css";
import { DataContext } from "../../../context/DataContext";
import { getData, sendData, updateData } from "../../../helpers/fetch";
import {FieldEducation} from "../FieldEducation/FieldEducation"
import { FieldExperience } from "../FieldExpirience/FieldExpirience";
export const FieldProfessional = () => {
    const params = useParams();
    const { dataProfile, setDataProfile, dataUser, setDataUser, idUser } =
        useContext(DataContext);
    const navigate = useNavigate();

    const {
        user_info,
        github,
        description,
        technicalSkills,
        softSkills,
        lenguages,
        prev_studes,
        experience,
    } = dataProfile;

    const {
        avatar,
        cohorte,
        contactNumber,
        email,
        firstName,
        lastName,
        middleName,
        passwordHash,
        program,
        rol,
        secondSurname,
        state,
        _id,
    } = dataUser;

    //Traer data del usuario
    useEffect(async () => {
        if (idUser) {
            const data = await getData("users", idUser);
            setDataUser(data);
        }
    }, [idUser]);

    //Enviar data del usuario al modelo de user y profile
    const submitData = async (e) => {
        if (!params.id) {
            if (dataProfile) {
                e.preventDefault();

                await sendData("users", {
                    user_info: idUser,
                    github,
                    description,
                    technicalSkills,
                    softSkills,
                    lenguages,
                    prev_studes,
                    experience,
                });

                await updateData("users", idUser, {
                    avatar,
                    cohorte,
                    contactNumber,
                    email,
                    firstName,
                    lastName,
                    middleName,
                    passwordHash,
                    program,
                    rol,
                    secondSurname,
                    state,
                    _id: idUser,
                });
                navigate(`/profile`);
            } else {
                e.preventDefault();
                console.log("Error");
            }
        } else {
            try {
                await updateData("users", idUser, dataUser);
                /* await updateData("users", dataProfile._id, dataProfile); */
                navigate(`/profile`);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleChangeEdu = ({ target }, id) => {
        const { name, value } = target;
        setDataProfile({
            ...dataProfile,
            prev_studes: dataProfile.prev_studes.map((item) => ({
                ...item,
                [name]: item.id === id ? value : item[name],
            })),
        });
    };

    const addEducationField = () => {
        setDataProfile({
            ...dataProfile,
            prev_studes: [
                ...dataProfile.prev_studes,
                {
                    ...studyField,
                    id: uuid(),
                },
            ],
        });
    };

    const [nameFile, setNameFile] = useState(["", "", ""]);
    const onFileChange = ({ target }, id) => {
        const file = target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function load() {
            setDataProfile({
                ...dataProfile,
                prev_studes: dataProfile.prev_studes.map((item) => ({
                    ...item,
                    certificate:
                        item.id === id ? reader.result : item.certificate,
                })),
            });
        };

        if (file.type === "application/pdf") {
            nameFile[0] = file.name;
            setNameFile([...nameFile]);
        }
    };

    const deleteCertificate = (id) => {
        setDataProfile({
            ...dataProfile,
            prev_studes: dataProfile.prev_studes.map((item) => ({
                ...item,
                certificate: item.id === id ? "" : item.certificate,
            })),
        });
    };

    const deleteEducation = (id) => {
        setDataProfile({
            ...dataProfile,
            prev_studes: dataProfile.prev_studes.filter(
                (item) => item.id !== id
            ),
        });
    };

    const handleChangeExperience = ({ target }, id) => {
        const { name, value } = target;
        setDataProfile({
            ...dataProfile,
            experience: dataProfile.experience.map((item) => ({
                ...item,
                [name]: item.id === id ? value : item[name],
            })),
        });
    };

    const deleteExperience = (id) => {
        setDataProfile({
            ...dataProfile,
            experience: dataProfile.experience.filter((item) => item.id !== id),
        });
    };

    const addExperienceField = () => {
        setDataProfile({
            ...dataProfile,
            experience: [
                ...dataProfile.experience,
                {
                    ...experienceField,
                    id: uuid(),
                },
            ],
        });
    };

    return (
        <div className={style.formProfessionalInformation}>
            <div className={style.education}>
                {/* Seccion de educación formal  */}
                <div className={style.title}>
                    <h2> Educación </h2>

                    {prev_studes.length < 3 && (
                        <i
                            className="fa-solid fa-plus icon"
                            onClick={addEducationField}
                        ></i>
                    )}
                </div>
                {prev_studes.map((edu) => (
                    <FieldEducation
                        key={edu.id}
                        handleChange={handleChangeEdu}
                        item={edu}
                        onFileChange={onFileChange}
                        deleteCertificate={deleteCertificate}
                        deleteEducation={deleteEducation}
                    />
                ))}
            </div>

            {/* Experiencia laboral */}
            <div className={style.experience}>
                <div className={style.title}>
                    <h2>Experiencia</h2>

                    {experience.length < 3 && (
                        <i
                            className="fa-solid fa-plus icon"
                            onClick={addExperienceField}
                        ></i>
                    )}
                </div>

                {experience.map((exp) => (
                    <FieldExperience
                        key={exp.id}
                        handleChange={handleChangeExperience}
                        item={exp}
                        deleteExperience={deleteExperience}
                    />
                ))}
            </div>
            <button
                className={style.btnSubmit}
                type="submit"
                onClick={submitData}
            >
                Guardar cambios
            </button>
        </div>
    );
};