import React, { Fragment, useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDataAll } from "../../helpers/fetch";
import style from "./Portfolio.module.css";
import Project from "./Project";
import { DataContext } from "../../context/DataContext";
import Swal from "sweetalert2";

const Portfolio = () => {
    const { setPortfolio, portfolio, idUser } = useContext(DataContext);

    const navigate = useNavigate();
    const params = useParams();

    const [dataPortfolios, setdataPortfolios] = useState([]);

    useEffect(() => {
        setPortfolio({ ...portfolio, profile_id: idUser });
    }, [idUser]);

    const getDataPort = async () => {
        try {
            const data = await getDataAll("portfolios");
            if (!params.id) {
                const filterData = data.filter(
                    (project) => project.profile_id === idUser
                );
                setdataPortfolios(filterData);
            } else {
                const filterData = data.filter(
                    (project) => project.profile_id === params.id
                );
                setdataPortfolios(filterData);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getDataPort();
    }, [idUser]);

    const addProject = () => {
        if (dataPortfolios.length < 10) {
            navigate(`/formproject`);
        } else {
            Swal.fire({
                title: "Máximo de proyectos",
                text: "No puedes subir más de diez proyectos",
                icon: "warning",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "black",
                timer: "6000",
            });
        }
    };

    return (
        <Fragment>
            <div className={style.containProjects}>
                {!params.id && (
                    <div className={style.containBtn}>
                        <div className={style.addProject} onClick={addProject}>
                            <i className="fa-solid fa-plus icon"></i>
                        </div>
                    </div>
                )}

                {dataPortfolios?.map((data) => (
                    <Project
                        key={data._id}
                        deploy={data.deploy}
                        decription={data.description_proyect}
                        project={data.proyect_link}
                        technologies={data.technologies}
                        title={data.title}
                        image={data.image}
                        getDataPort={getDataPort}
                        id={data._id}
                    />
                ))}
            </div>
        </Fragment>
    );
};

export default Portfolio;
