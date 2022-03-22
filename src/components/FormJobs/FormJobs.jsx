import React, {Fragment, useContext, useState, useEffect } from "react";
import style from "./FormJobs.module.css";
import logo from "../../assets/images/logo-a-color-.jpg";
import { DataContext } from "../../context/DataContext";
import { getData, sendData, updateData } from "../../helpers/fetch";
import HardSkills from "../formInfo/HardSkills";
import JobSoftSkills from "../formInfo/SoftSkills";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const FormJobs = () => {
    const { postsJobs, setPostsJobs, idUser } = useContext(DataContext);

    const navigate = useNavigate();
    const params = useParams();
    
    
    useEffect(() => {
        setPostsJobs({ ...postsJobs, type: "jobs" });
    }, []);

    const [technical, setTechnical] = useState([]);
    const [softSkill, setsoftSkill] = useState([]);
    console.log(submitData)

    //Enviar data del usuario al modelo de user y profile

    const submitData = async (e) => {
        e.preventDefault();
        //Condition to publish the new job offer
        if (
            postsJobs.title.length <= 0 ||
            postsJobs.company.length <= 0 ||
            postsJobs.place.length <= 0 ||
            postsJobs.modality.length <= 0 ||
            postsJobs.contact.length <= 0 ||
            postsJobs.description.length <= 0 ||
            postsJobs.technologies.length <= 0 ||
            postsJobs.softSkills.length <= 0 ||
            postsJobs.salary.length <= 0
        ) {
            // message that pop if conditions arent fulfilles
            Swal.fire({
                title: "Completar datos",
                text: "Los campos de Nombre de la oferta,modalidad y salario son obligatorios",
                icon: "error",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "black",
                timer: "6000",
            });
        } else {
            try {
                if (!params.id) {
                    await sendData("posts", postsJobs);
                    
                } else {
                    await updateData("posts", params.id, postsJobs);
                }

                navigate("/home");
            } catch (error) {
                console.log(error);
            }
        }
    };

    const onChange = ({ target }) => {
        const { name, value } = target;
        setPostsJobs({
            ...postsJobs,
            [name]: value,
            user_info: idUser,
        });
    };
    //Press enter to add the technologies to your job publication
    const onKeyHardSkills = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            technical.push(e.target.value);
            setPostsJobs({
                ...postsJobs,
                technologies: technical,
            });
            e.target.value = "";
            e.preventDefault();
        }
    };
    //Press enter to add soft skills to your job offer
    const onKeySoftSkills = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            softSkill.push(e.target.value);
            setPostsJobs({
                ...postsJobs,
                softSkills: softSkill,
            });
            e.target.value = "";
            e.preventDefault();
        }
    };
    const getDataJobs = async (id) => {
        try {
            const dataJobs = await getData("posts", id);
            setPostsJobs(dataJobs);
            setsoftSkill(dataJobs.softSkills);
            setTechnical(dataJobs.technologies);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (params.id) {
            getDataJobs(params.id);
        }
    }, []);

    return (
        <Fragment>
            <div className={style.headerPerfil}>
                <img src={logo} alt="Educamás" />
                <h2>Agregar una oferta</h2>
            </div>
            <form className={style.from_container} onSubmit={submitData}>
                <div className={style.forms}>
                    <h3>Nombre de la oferta</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="title"
                        value={postsJobs.title}
                        onChange={onChange}
                    />
                    <br />
                </div>
                <div className={style.forms}>
                    <h3>Empresa</h3>
                    <input
                        placeholder=""
                        className={style.nom}
                        type="text"
                        name="company"
                        value={postsJobs.company}
                        onChange={onChange}
                    />
                    <br />
                </div>
                <div className={style.forms}>
                    <h3>Tecnologías</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="technologies"
                        onKeyDown={onKeyHardSkills}
                    />
                    <br />
                    <div className={style.tecnologias} id="technologias">
                        {technical.map((skill, index) => (
                            <HardSkills
                                skill={skill}
                                key={index}
                                technical={technical}
                                setTechnical={setTechnical}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                <div className={style.forms}>
                    <h3>Habilidades blandas</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="softSkills"
                        onKeyDown={onKeySoftSkills}
                    />
                    <br />
                    <div className={style.tecnologias}>
                        {softSkill.map((skill, index) => (
                            <JobSoftSkills
                                skill={skill}
                                key={index}
                                softSkill={softSkill}
                                setsoftSkills={setsoftSkill}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                <div className={style.forms}>
                    <h3>Lugar de la oferta</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="place"
                        value={postsJobs.place}
                        onChange={onChange}
                    />
                    <br />
                </div>
                <div className={style.forms}>
                    <h3>Modalidad</h3>
                    <select
                        className={style.select}
                        name="modality"
                        value={postsJobs.modality}
                        onChange={onChange}
                    >
                        <option value="select">Selecciona la modalidad</option>
                        <option className={style.opcion} value="Presencial">
                            presencial
                        </option>
                        <option className={style.opcion} value="hibrida">
                            hibrida
                        </option>
                        <option className={style.opcion} value="remota">
                            remota
                        </option>
                    </select>
                    <br />
                </div>
                <div className={style.forms}>
                    <h3>Salario</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="salary"
                        value={postsJobs.salary}
                        onChange={onChange}
                    />
                    <br />
                </div>
                <div className={style.forms}>
                    <h3>contacto</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="contact"
                        value={postsJobs.contact}
                        onChange={onChange}
                    />
                    <br />
                </div>
                <div className={style.forms}>
                    <h3>Descripción de la oferta</h3>
                    <textarea
                        className={style.textarea}
                        type="text"
                        name="description"
                        rows=""
                        cols=""
                        value={postsJobs.description}
                        onChange={onChange}
                    ></textarea>
                    <br />
                </div>

                <div className={style.enviar}>
                    <button className="btn" type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </Fragment>
    );
};
export default FormJobs;