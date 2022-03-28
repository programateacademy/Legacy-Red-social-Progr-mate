import React, {Fragment, useContext, useState, useEffect } from "react";
import style from "./FormJobs.module.css";
import logo from "../../assets/images/logo-a-color-.jpg";
import { DataContext } from "../../context/DataContext";
import { getData, sendData, updateData } from "../../helpers/fetch";
import HardSkills from "../formInfo/HardSkills";
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
    console.log(submitData)

    //Send User data to user model and profile

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
            postsJobs.salary.length <= 0
        ) {
            // message that pop if conditions arent fulfilled
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
                    navigate("/questions");
                    
                } else {
                    await updateData("posts", params.id, postsJobs);
                }

                
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

    // Verify funtion
    const getDataJobs = async (id) => {
        try {
            const dataJobs = await getData("posts", id);
            setPostsJobs(dataJobs);
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
                <h2>Agregar una Oferta</h2>
            </div>
            <form className={style.from_container} onSubmit={submitData}>
                <div className={style.forms}>
                    <h3>Nombre de la oferta</h3>
                    <input
                        className={style.nom}
                        placeholder="Nombre de la oferta"
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
                        placeholder="Nombre de la empresa"
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
                        placeholder="Tecnologías <Enter> para guardarla"
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
                    <h3>Lugar de la oferta</h3>
                    <input
                        className={style.nom}
                        placeholder="Lugar"
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
                        placeholder="Salario"
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
                        placeholder="Contacto"
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
                        placeholder="Descripcion de la oferta"
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