import React from "react";
import { deleteData } from "../../helpers/fetch";
import style from "./Portfolio.module.css";
import { useNavigate, useParams } from "react-router-dom";

const Project = ({
    deploy,
    decription,
    project,
    technologies,
    title,
    image,
    getDataPort,
    id,
}) => {
    const navigate = useNavigate();
    const params = useParams();

    const deleteProject = async () => {
        try {
            await deleteData("portfolios", id);
            getDataPort();
        } catch (error) {
            console.log(error);
        }
    };
    // console.log(id);
    return (
        <div className={style.container}>
            <div className={style.title_container}>
                <div className={style.title}>
                    <h1>{title}</h1>
                    {!params.id && (
                        <div className={style.titleIcons}>
                            <i
                                className="fas fa-pencil-alt"
                                onClick={() => navigate(`/formproject/${id}`)}
                            ></i>
                            <i
                                className="far fa-trash-alt"
                                onClick={deleteProject}
                            ></i>
                        </div>
                    )}
                </div>
                <p>{decription}</p>
            </div>
            <section className={style.section1}>
                <img src={image} alt="Proyecto" />
            </section>

            <section className={style.section_container2}>
                <div className={style.boton2}>
                    <button className={style.boton_principal2}>
                        <a href={deploy}>Ver proyecto</a>
                    </button>
                    <button className={style.boton_principal2}>
                        <a href={project}>Github</a>
                    </button>
                </div>

                <div className={style.tecnologias}>
                    {technologies.map((tech, index) => (
                        <button key={index}>{tech}</button>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Project;
