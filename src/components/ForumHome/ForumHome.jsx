/* import React from "react";
import styles from "./ForumHome.module.css";
import { BiGroup } from "react-icons/bi";
import { BiBox } from "react-icons/bi";
import { BiQuestionMark } from "react-icons/bi";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ForumHome = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__global}>
        <div className={styles.section__head}>
          <h1 className={styles.section__title}>
            FORO
            <BiGroup size="27" />
          </h1>
          <hr className={styles.section__lineTitle} />
        </div>
        <div className={styles.section__container}>
          <Link to='/questions' className={styles.section__options}>
            <BiQuestionMark size="40" />
            <p>PREGUNTAS</p>
          </Link>
          <Link to='/resources' className={styles.section__options}>
            <BiBox size="40" />
            <p>RECURSOS</p>
          </Link>
        </div>
      </div>
    </section>
    
  );
};

export default ForumHome; */