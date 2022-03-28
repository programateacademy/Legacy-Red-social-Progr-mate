import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDataAll, getData } from "../../helpers/fetch";
import styles from "./ForumQuestions.module.css";

export const Question = ({ data, name }) => {
    let date = data.createdAt.slice(0, 10);
    return (
        <div className={styles.questionContainerMain}>
                <div className={styles.containerProfileInfo} >
                <img
                    className={styles.question}
                    src={name(data.user_info, false)}
                />
                <p className={styles.name}>
                    {name(data.user_info, true)}
                </p> 
                <p className={styles.dateQuestion}>Creado: {date}</p>
                </div>
                <div className={styles.containerQuestion}>
                <h5 className={styles.question}>{data.title}</h5>
                <p className={styles.question} >{data.description}</p>
               
            </div>
            <div className={styles.questionBottom}>
            <div className={styles.tagsContainer}>
                <p>Tags:</p>
                <section className={styles.questionTags} >
                {data.tags.map((tag, index) => (
                    <h6 key={index} className={styles.tagsItems}>
                        {tag}{" "}
                    </h6>
                ))}
                </section>
            </div>
            <div className={styles.infoContainer}>

                <Link
                    to={"/questions/" + data._id}
                    state={{ from: "user" }}
                    className={styles.btn__question}
                >
                    Responder
                </Link>
                
            </div>
            </div>
        </div>
    );
};
