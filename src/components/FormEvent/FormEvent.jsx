import React, { Fragment, useState, useContext, useEffect } from "react";
import style from "./FormEvent.module.css";
import logo from "../../assets/images/logo-a-color-.jpg";
import { DataContext } from "../../context/DataContext";
import { sendData } from "../../helpers/fetch";
import { useNavigate } from "react-router-dom";
import HardSkills from "../formInfo/HardSkills";

const FormEvent = () => {
    const { postsEvent, setPostsEvent, idUser } = useContext(DataContext);

    const [technical, setTechnical] = useState([]);

    const navigate = useNavigate();

    //Enviar data del usuario al modelo de user y profile
    //Send data from the user to the user model and profile
    const submitData = async (e) => {
        e.preventDefault();
        try {
            await sendData("posts", postsEvent);
            navigate("/home");
        } catch (error) {
            console.log("Error" + error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostsEvent({ ...postsEvent, [name]: value, user_info: idUser });
    };

    // Allows you to add the technologies pressing enter when you wnat to post an event
    const onKeyHardSkills = (e) => {
        if (e.key === "Enter" && e.target.value.length > 0) {
            technical.push(e.target.value);

            setPostsEvent({
                ...postsEvent,
                technologies: technical,
            });
            e.target.value = "";
            e.preventDefault();
        }
    };
    // Post the publication and give it an event type
    useEffect(() => {}, [postsEvent, setPostsEvent]);
    useEffect(() => {
        setPostsEvent({ ...postsEvent, type: "event" });
    }, []);
    return (
        <Fragment>
            <div className={style.headerPerfil}>
                <img src={logo} alt="Educamás" />
                <h2>Agregar evento</h2>
            </div>
            <form className={style.from_container} onSubmit={submitData}>
                <div className={style.forms}>
                    <h3>Nombre del evento</h3>
                    <input
                        placeholder="Nombre del evento"
                        className={style.nom}
                        type="text"
                        name="title"
                        onChange={handleChange}
                    />
                    <br />
                </div>
                <div className={style.forms}>
                    <h3>Descripción</h3>
                    <input
                        placeholder="Breve descripción del evento"
                        className={style.nom}
                        type="textarea"
                        name="description"
                        onChange={handleChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>
                    <h3>Lugar</h3>
                    <input
                        placeholder="Lugar"
                        className={style.nom}
                        type="text"
                        name="place"
                        onChange={handleChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>
                    <h3>Fecha del evento</h3>
                    <input
                        className={style.nom}
                        type="date"
                        name="dateEvent"
                        onChange={handleChange}
                    />
                    <br />
                </div>

                <div className={style.forms}>
                    <h3>Link de inscripción</h3>
                    <input
                        placeholder="Link de inscripción"
                        className={style.nom}
                        type="text"
                        name="link"
                        onChange={handleChange}
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

                <div className={style.enviar}>
                    <button className="btn">Enviar</button>
                </div>
            </form>
        </Fragment>
    );
};
export default FormEvent;