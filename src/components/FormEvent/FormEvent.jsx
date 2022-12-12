import React, { Fragment, useState, useContext, useEffect } from "react";
import style from "./FormEvent.module.css";
import { DataContext } from "../../context/DataContext";
import { sendData } from "../../helpers/fetch";
import { useNavigate } from "react-router-dom";
import HardSkills from "../formInfo/HardSkills";
import Swal from "sweetalert2";
/* Create new event */
const FormEvent = () => {
  const { postsEvent, setPostsEvent, idUser } = useContext(DataContext);

  const [technical, setTechnical] = useState([]);

  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);




  //Send data from the user to the user model and profile
  const submitData = async (e) => {
    e.preventDefault();
    //Condition to publish the new job offer
    if (
      postsEvent.title.length <= 0 ||
      postsEvent.place.length <= 0 ||
      postsEvent.description.length <= 0
    ) {
      // message that pop if conditions arent fulfilled
      Swal.fire({
        title: "Completar datos",
        text: "Los campos de Nombre del evento, lugar y son obligatorios",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "black",
        timer: "6000",
      });
    } else {
      try {
        await sendData("posts", postsEvent);
        setRefresh(!refresh);
        navigate("/events");

      } catch (error) {
        console.log("Error" + error);
      }
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
  useEffect(() => {
    setPostsEvent({ ...postsEvent, type: "event" });
  }, []);



  return (
    <Fragment>
      <div className={style.headerPerfil}>

        <h2>Agregar Evento</h2>
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
            placeholder="Descripción del evento"
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
            placeholder="Tecnologías <dar enter para añadir>"
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