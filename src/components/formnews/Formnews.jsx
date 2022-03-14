import React, { Fragment, useContext, useEffect, useState } from "react";
import styles from "./Formnews.module.css";

import { getData, sendData, updateData } from "../../helpers/fetch";
import { DataContext } from "../../context/DataContext";
import HardSkills from "./HardSkills";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Formnews = () => {
    const { posts, setPosts, idUser } = useContext(DataContext);

    const { user_info, title, type, description, images, technologies } = posts;

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        setPosts({ ...posts, type: "news" });
    }, []);

    //Enviar data de la noticia al modelo de post
    const submitData = async (e) => {
        e.preventDefault();

        if (posts.title.length <= 0 || posts.description.length <= 0) {
            Swal.fire({
                title: "Completar datos",
                text: "Los campos de Nombre de la noticia y Contenido escrito son obligatorios",
                icon: "error",
                confirmButtonText: "Aceptar",
                confirmButtonColor: "black",
                timer: "6000",
            });
        } else {
            try {
                if (!params.id) {
                    await sendData("posts", {
                        user_info: idUser,
                        title,
                        description,
                        images,
                        technologies,
                        type,
                    });
                } else {
                    await updateData("posts", params.id, {
                        user_info: idUser,
                        title,
                        description,
                        images,
                        technologies,
                        type,
                    });
                }

                navigate(`/home`);
                // history.push("/formevent");
            } catch (error) {
                console.log(error);
            }
        }
    };

    const onChange = ({ target }) => {
        // console.log(posts);
        const { name, value } = target;
        setPosts({
            ...posts,
            [name]: value,
        });
    };

    const [technical, setTechnical] = useState([]);
    const onKeyTechnologies = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            technical.push(e.target.value);
            setPosts({
                ...posts,
                technologies: technical,
            });
            e.target.value = "";
            e.preventDefault();
            // console.log(posts, technical);
        }
    };

    const getDataNews = async (id) => {
        try {
            const dataNews = await getData("posts", id);
            setPosts(dataNews);
            setTechnical(dataNews.technologies);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (params.id) {
            getDataNews(params.id);
        }
    }, []);

    const onFileChange = (e) => {
        const file = e.target.files[0];
        if (file.size < 200000) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function load() {
                setPosts({ ...posts, images: reader.result });
            };
        } else {
            alert(`El tamaño máximo es 200 KB`);
        }
    };

    return (
        <section className={styles.section_container}>
            <form className={styles.form_container} onSubmit={submitData}>
                <h1 className={styles.title}>Noticias</h1>
                <div className={styles.form}>
                    <h3>Nombre de la noticia</h3>

                    <input
                        className={styles.nom_input}
                        type="text"
                        name="title"
                        value={posts.title}
                        onChange={onChange}
                    />

                    <br />
                </div>

                <div className={styles.form}>
                    <h3>Contenido escrito de la misma</h3>
                    <textarea
                        className={styles.textarea}
                        type="text"
                        name="description"
                        rows=""
                        cols=""
                        value={posts.description}
                        onChange={onChange}
                    ></textarea>
                    <br />
                </div>

                <div className={styles.form}>
                    <h3 className={styles.subtitle}>Tecnologías</h3>
                    <input
                        className={styles.nom_input}
                        type="text"
                        name="tecno"
                        onKeyDown={onKeyTechnologies}
                    />
                    <br />
                    <div className={styles.tecno}>
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

                <div className={styles.form}>
                    <h3>Imagen</h3>

                    <input
                        className={styles.image}
                        type="file"
                        name="image"
                        onChange={onFileChange}
                    />
                    {posts.images ? (
                        <img src={posts.images} alt="File" />
                    ) : null}
                    <br />
                </div>
                <div className={styles.send}>
                    <button className="btn">Enviar</button>
                </div>
            </form>
        </section>
    );
};

export default Formnews;
