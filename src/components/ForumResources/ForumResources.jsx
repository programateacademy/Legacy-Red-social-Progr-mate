import React from "react";
import styles from "./ForumResources.module.css";
import { Resource } from "./Resource";
import { BiFilterAlt } from "react-icons/bi";
import { BiMessageAdd } from "react-icons/bi";
import { BiBox } from "react-icons/bi";
import { Link } from "react-router-dom";

import data from "./data.json";

const ForumResources = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__global}>
        <div className={styles.section__head}>
          <h1 className={styles.section__title}>
            RECURSOS
            <BiBox size="27" />
          </h1>
          <hr className={styles.section__lineTitle} />
        </div>
        <div className={styles.section__options}>
          <div className={styles.container__search}>
            <input type="text" placeholder="Buscar recurso" className={styles.searchQuestion} />
          </div>
          <div className={styles.btn__container}>
          <Link to="/addresource"><button className={styles.btn__addfilter}>
              Añadir <BiMessageAdd />
            </button></Link>
            <button className={styles.btn__addfilter}>
              Filtro <BiFilterAlt />
            </button>
          </div>
          <div className={styles.questionAnswer}>
            <p>4 respuestas</p>
            <p>30 preguntas</p>
          </div>
        </div>
        <div className={styles.section__container}>
          {data.map((data) => (
            <Resource key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ForumResources;
