import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiX } from "react-icons/bi";
import { studyField, experienceField } from "../../helpers/formProfile";
import { v4 as uuid } from "uuid";

import style from "./ProfessionalInformation.module.css";
import { DataContext } from "../../context/DataContext";
import { getData, sendData, updateData } from "../../helpers/fetch";

export const ProfessionalInformation = () => {
    const params = useParams();
    const { dataUser, setDataUser, idUser } =
        useContext(DataContext);
    const navigate = useNavigate();
    
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
        user_info,
        github,
        description,
        technicalSkills,
        softSkills,
        lenguages,
        prev_studes,
        experience,
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
            if (dataUser) {
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
                /* await updateData("users", dataUser._id, dataUser); */
                navigate(`/profile`);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleChangeEdu = ({ target }, id) => {
        const { name, value } = target;
        setDataUser({
            ...dataUser,
            prev_studes: dataUser.prev_studes.map((item) => ({
                ...item,
                [name]: item.id === id ? value : item[name],
            })),
        });
    };

    const addEducationField = () => {
        setDataUser({
            ...dataUser,
            prev_studes: [
                ...dataUser.prev_studes,
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
            setDataUser({
                ...dataUser,
                prev_studes: dataUser.prev_studes.map((item) => ({
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
        setDataUser({
            ...dataUser,
            prev_studes: dataUser.prev_studes.map((item) => ({
                ...item,
                certificate: item.id === id ? "" : item.certificate,
            })),
        });
    };

    const deleteEducation = (id) => {
        setDataUser({
            ...dataUser,
            prev_studes: dataUser.prev_studes.filter(
                (item) => item.id !== id
            ),
        });
    };

    const handleChangeExperience = ({ target }, id) => {
        const { name, value } = target;
        setDataUser({
            ...dataUser,
            experience: dataUser.experience.map((item) => ({
                ...item,
                [name]: item.id === id ? value : item[name],
            })),
        });
    };

    const deleteExperience = (id) => {
        setDataUser({
            ...dataUser,
            experience: dataUser.experience.filter((item) => item.id !== id),
        });
    };

    const addExperienceField = () => {
        setDataUser({
            ...dataUser,
            experience: [
                ...dataUser.experience,
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

const FieldEducation = ({
    item,
    handleChange,
    onFileChange,
    deleteCertificate,
    deleteEducation,
}) => {
    const { dataUser } = useContext(DataContext);
    return (
        <div className={style.education} id="0">
            <div className={style.inputs}>
                <label className={style.label} htmlFor="institution">
                    Título*
                </label>
                <i
                    className="far fa-trash-alt"
                    onClick={() => deleteEducation(item.id)}
                />
                <input
                    type="text"
                    className={style.inputPersonal}
                    name="degree"
                    id="institution"
                    value={item.degree}
                    onChange={(e) => handleChange(e, item.id)}
                    placeholder="Título"
                />
            </div>
            <div className={style.inputs}>
                <label className={style.label} htmlFor="institution">
                    Institución Educativa*
                </label>
                <input
                    type="text"
                    className={style.inputPersonal}
                    name="institution"
                    id="institution"
                    value={item.education}
                    onChange={(e) => handleChange(e, item.id)}
                    placeholder="nombre de la institución"
                />
            </div>
            {/* seccion de las fechas */}
            <div className={style.containDate}>
                <label className={style.label} htmlFor="email">
                    Fecha inicio{" "}
                </label>
                <input
                    type="date"
                    className={style.inputDate}
                    name="eduDateInit"
                    id="fecha inicio"
                    value={item.eduDateInit}
                    onChange={(e) => handleChange(e, item.id)}
                />
            </div>
            <div className={style.containDate}>
                <label className={style.label} htmlFor="edad">
                    Fecha fin
                </label>
                <input
                    type="date"
                    className={style.inputDate}
                    name="eduDateEnd"
                    id="fecha fin"
                    value={item.eduDateEnd}
                    onChange={(e) => handleChange(e, item.id)}
                />
            </div>

            <div name="formulario" className={style.inputFile}>
                <label className={style.label} htmlFor="edad">
                    Añadir certificado <span>*jpg *png *jpeg</span>
                </label>

                <input
                    type="file"
                    name="certificate"
                    accept="image/jpg, image/png, image/jpeg,"
                    multiple
                    value=""
                    onChange={(e) => onFileChange(e, item.id)}
                />
            </div>
            {dataUser.prev_studes.map(
                (dataCert) =>
                    item.id === dataCert.id &&
                    dataCert.certificate && (
                        <div className={style.containDelete} key={item.id}>
                            <BiX
                                className={style.deleteImg}
                                onClick={() => deleteCertificate(item.id)}
                            />

                            <img
                                className={style.imgDocument}
                                src={dataCert.certificate}
                                alt="Document"
                            />
                        </div>
                    )
            )}

            {/* {nameFile[0].length > 0 ? (
                <div className={style.containDelete}>
                    <BiX
                        className={style.deleteImg}
                        onClick={deleteCertificate}
                    />

                    <h5 className={style.nameFile}>{nameFile[0]}</h5>
                </div>
            ) : null} */}
        </div>
    );
};

const FieldExperience = ({ deleteExperience, handleChange, item }) => {
    return (
        <div className={style.experience} id="2">
            <div className={style.inputs}>
                <label className={style.label} htmlFor="position">
                    Cargo
                </label>
                <i
                    className="far fa-trash-alt"
                    onClick={() => deleteExperience(item.id)}
                ></i>
                <input
                    type="text"
                    className={style.inputPersonal}
                    name="charge"
                    id="position"
                    value={item.charge}
                    onChange={(e) => handleChange(e, item.id)}
                    placeholder="Desarrollador backend Java"
                />
            </div>

            <div className={style.inputs}>
                <label className={style.label} htmlFor="company">
                    Empresa
                </label>
                <input
                    type="text"
                    className={style.inputPersonal}
                    name="company"
                    id="company"
                    value={item.company}
                    onChange={(e) => handleChange(e, item.id)}
                    placeholder="Nombre de la empresa"
                />
            </div>
            <div className={style.containDate}>
                <label className={style.label} htmlFor="email">
                    Fecha inicio{" "}
                </label>
                <input
                    type="date"
                    className={style.inputDate}
                    name="jobDateInit"
                    id="fecha inicio"
                    value={item.jobDateInit}
                    onChange={(e) => handleChange(e, item.id)}
                />
            </div>

            <div className={style.containDate}>
                <label className={style.label} htmlFor="edad">
                    Fecha fin
                </label>
                <input
                    type="date"
                    className={style.inputDate}
                    name="jobDateFin"
                    id="fecha fin"
                    value={item.jobDateFin}
                    onChange={(e) => handleChange(e, item.id)}
                />
            </div>

            <div className={style.inputs}>
                <label className={style.label} htmlFor="description">
                    {" "}
                    Descripción{" "}
                </label>
                <input
                    type="textarea"
                    className={style.inputPersonal}
                    name="descriptionJob"
                    id="description"
                    value={item.descriptionJob}
                    onChange={(e) => handleChange(e, item.id)}
                    placeholder="Realicé..."
                />
            </div>
        </div>
    );
};
