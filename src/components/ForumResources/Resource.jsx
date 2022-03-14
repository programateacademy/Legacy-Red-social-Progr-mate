import React from "react";
import { Link } from "react-router-dom";
import styles from "./ForumResources.module.css";
import { BiLike } from "react-icons/bi";

export const Resource = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.resourceContainerMain}>
      <div className={styles.containerResource}>
        <h5 className={styles.resource}>{data.title}</h5>
        <p className={styles.dateResource}>Creado: {data.timestamps}</p>
      </div>
      <div className={styles.containerLikeTags}>
        <div className={styles.tagsContainer}>
          {data.tags.map((tag, index) => (
            <h6 key={index} className={styles.tagsItems}>
              {tag}
            </h6>
          ))}
        </div>
        <div className={styles.containerLikes}>
          <span>30</span>
          <BiLike size="30"/>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <p className={styles.name}>Jhonatan Mosquera Velez</p>
        <Link to={"/resources/" + data.id}>
          <button className={styles.btn__view}>Ver</button>
        </Link>
      </div>
    </div>
  );
};