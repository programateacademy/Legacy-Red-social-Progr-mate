import React, { Fragment, useState, useContext, useEffect } from "react";
import style from "./FormEvent.module.css";
import logo from "../../assets/images/logo-a-color-.jpg";
import { DataContext } from "../../context/DataContext";
import { updateData, getData } from "../../helpers/fetch";
import { useNavigate, useParams } from "react-router-dom";

const FormEventEdit = () => {
  const { postsEvent, setPostsEvent } = useContext(DataContext);
  const [techs, setTechs] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(async () => {
    const dataToEdit = await getData("posts", params.id);
    setTechs(dataToEdit.technologies);
    setPostsEvent(dataToEdit);
  }, []);

  const submitData = async (e) => {
    e.preventDefault();
    try {
      await updateData("posts", params.id, postsEvent);
      navigate("/home");
    } catch (error) {
      console.log("Error" + error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostsEvent({ ...postsEvent, [name]: value });
  };
  const onCapture = (e) => {
    const value = e.target.value;

    if (e.key === "Enter" && value.length > 0) {
      techs.push(e.target.value);
      setPostsEvent({ ...postsEvent, technologies: techs });
      e.target.value = "";
      e.preventDefault();
    }
  };
  const onDelete = (tech) => {
    setTechs(techs.filter((item) => item !== tech));
  };

  return (
    <Fragment>
      <div className={style.headerPerfil}>
        <img src={logo} alt="Educamás" />
        <h2>Agregar Evento</h2>
      </div>
      <form className={style.from_container} onSubmit={submitData}>
        <div className={style.forms}>
          <h3>Nombre del evento</h3>
          <input
            placeholder="Nombre del evento"
            className={style.nom}
            value={postsEvent && postsEvent.title}
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
            value={postsEvent && postsEvent.description}
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
            value={postsEvent && postsEvent.place}
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
            value={postsEvent && postsEvent.dateEvent}
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
            value={postsEvent && postsEvent.link}
            onChange={handleChange}
          />
          <br />
        </div>
        <div className={style.forms}>
          <h3>Tegnologías</h3>
          <input
            className={style.nom}
            type="text"
            placeholder="Tecnologías <dar enter para añadir>"
            name="technologies"
            onKeyDown={onCapture}
          />

          <br />

          <div className={style.tecnologias}>
            {techs.map((tech, index) => (
              <button onClick={() => onDelete(tech)} key={index}>
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className={style.enviar}>
          <button className="btn">Actualizar</button>
        </div>
      </form>
    </Fragment>
  );

};
export default FormEventEdit;
