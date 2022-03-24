import React, { Fragment, useContext, useEffect, useState } from "react";
import style from "./FormProject.module.css";
import { DataContext } from "../../context/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import HardSkills from "./HardSkills";
import { getData, sendData, updateData } from "../../helpers/fetch";
import Swal from "sweetalert2";

const FormProject = () => {
    const { portfolio, setPortfolio, initialStatePortfolio, idUser } =
        useContext(DataContext);

    const navigate = useNavigate();

    const {
        profile_id,
        image,
        title,
        description_proyect,
        deploy,
        proyect_link,
        technologies,
    } = portfolio;

    const params = useParams();

    //Send the proyect data to the portfolio model
    const submitData = async (e) => {
        e.preventDefault();

        if (
            portfolio.title.length <= 0 ||
            portfolio.deploy.length <= 0 ||
            portfolio.description_proyect.length <= 0 ||
            portfolio.proyect_link.length <= 0 ||
            portfolio.image.length <= 0
        ) {
            Swal.fire({
                title: "Completar datos",
                text: "Campos requeridos sin completar",
                icon: "error",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "black",
                timer: "6000",
            });
        } else {
            try {
                if (!params.id) {
                    await sendData("portfolios", {
                        ...portfolio,
                        profile_id: idUser,
                    });
                    setPortfolio(initialStatePortfolio);
                } else {
                    await updateData("portfolios", params.id, {
                        ...portfolio,
                        profile_id: idUser,
                    });
                    setPortfolio(initialStatePortfolio);
                }

                navigate("/portfolio");
            } catch (error) {
                console.log(error);
            }
        }
    };

    const onChange = ({ target }) => {
        const { name, value } = target;
        setPortfolio({
            ...portfolio,
            [name]: value,
        });
    };

    const [technical, setTechnical] = useState([]);
    const onKeyTechnologies = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            technical.push(e.target.value);
            setPortfolio({
                ...portfolio,
                technologies: technical,
            });
            e.target.value = "";
            e.preventDefault();
            
        }
    };

    const getDataPortfolio = async (id) => {
        try {
            const dataNews = await getData("portfolios", id);
            setPortfolio(dataNews);
            setTechnical(dataNews.technologies);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (params.id) {
            getDataPortfolio(params.id);
        }
        {
            setPortfolio(initialStatePortfolio);
        }
    }, []);

    const onFileChange = (e) => {
        const file = e.target.files[0];
        if (file.size < 75000) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function load() {
                setPortfolio({ ...portfolio, image: reader.result });
            };
        } else {
            alert(`El tamaño máximo es 70 KB`);
        }
    };

    const cancelSend = () => {
        setPortfolio(initialStatePortfolio);
        navigate("/portfolio");
    };

    return (
        <Fragment>
            <form className={style.from_container} onSubmit={submitData}>
                <div className={style.title}>
                    <h1>Editar proyecto</h1>
                    <hr />
                </div>

                <div className={style.container_img}>
                    <div className={style.img}>
                        <div>
                            <h3>Imagen del proyecto *</h3>
                        </div>
                        <br />
                        <input
                            className={style.image}
                            type="file"
                            name="image"
                            onChange={onFileChange}
                        />
                    </div>
                    {image.length > 0 && <img src={image} alt="Imagen" />}
                </div>

                <div className={style.forms}>
                    <h3>Nombre del proyecto *</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="title"
                        value={title}
                        onChange={onChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>
                    <h3>Descripción *</h3>
                    <textarea
                        className={style.textarea}
                        rows="3"
                        name="description_proyect"
                        value={description_proyect}
                        onChange={onChange}
                    ></textarea>
                    <br />
                </div>

                <div className={style.forms}>
                    <h3>Link de despliegue *</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="proyect_link"
                        value={proyect_link}
                        onChange={onChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>
                    <h3>Link de repositorio *</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="deploy"
                        value={deploy}
                        onChange={onChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>
                    <h3>Tegnologías utilizadas</h3>
                    <input
                        className={style.nom}
                        type="text"
                        name="technologies"
                        onKeyDown={onKeyTechnologies}
                    />
                    <br />
                    <div className={style.tecnologias}>
                        {technical.map((skill, index) => (
                            <HardSkills
                                skill={skill}
                                key={index}
                                technical={technical}
                                setTechnical={setTechnical}
                            />
                        ))}
                    </div>
                </div>

                <div className={style.boton_envia_container}>
                    <button className={style.boton_envia} onClick={cancelSend}>
                        Cancelar
                    </button>
                    <button className={style.boton_envia}>Guardar</button>
                </div>
            </form>
        </Fragment>
    );
};

export default FormProject;
