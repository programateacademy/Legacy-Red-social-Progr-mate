import React, {Fragment, useContext, useState, useEffect } from "react";
import style from "./FormJobs.module.css";
import logo from "../../assets/images/logo-a-color-.jpg";
import { DataContext } from "../../context/DataContext";
import { getData, sendData, updateData } from "../../helpers/fetch";
import HardSkills from "../formInfo/HardSkills";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const FormJobs = () => {
    const idUser = JSON.parse(localStorage.getItem("loggedAgoraUser")).id
    const [postData, setPostData] = useState({});
    const navigate = useNavigate();
    const params = useParams();
    const [technical, setTechnical] = useState([]);

    const getDataJobs = async (id)  => {
        try {
            const dataJobs = await getData("posts", id);
            setPostData(dataJobs);
            setTechnical(dataJobs.technologies);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (params.id) {
            getDataJobs(params.id);
        }
    }, []);

    

    //Send User data to user model and profile

    const submitData = async (e) => {
        e.preventDefault();
        //Condition to publish the new job offer
        if (
            postData.title.length <= 0 ||
            postData.company.length <= 0 ||
            postData.place.length <= 0 ||
            postData.modality.length <= 0 ||
            postData.contact.length <= 0 ||
            postData.description.length <= 0 ||
            postData.salary.length <= 0
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
                    navigate("/jobs");
                    
                } else {
                    await updateData("posts", params.id, postData);
                }

                
            } catch (error) {
                console.log(error);
            }
        }
        navigate("/home");
    };

    const onChange = ({ target }) => {
        const { name, value } = target;
        setPostData({
            ...postData,
            [name]: value,
            ["type"]: "jobs",
            ["user_info"]: postData.user_info ? postData.user_info : idUser
        });
    };
    //Press enter to add the technologies to your job publication
    const onKeyHardSkills = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            technical.push(e.target.value);
            setPostData({
                ...postData,
                technologies: technical,
            });
            e.target.value = "";
            e.preventDefault();
        }
    };

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
                        value={postData.title}
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
                        value={postData.company}
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
                        value={postData.place}
                        onChange={onChange}
                    />
                    <br />
                </div>
                <div className={style.forms}>
                    <h3>Modalidad</h3>
                    <select
                        className={style.select}
                        name="modality"
                        value={postData.modality}
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
                        value={postData.salary}
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
                        value={postData.contact}
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
                        value={postData.description}
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