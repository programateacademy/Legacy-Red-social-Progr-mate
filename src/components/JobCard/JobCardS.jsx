import React, { useState } from "react";
import { BiLike, BiMessageRoundedDots, BiShare } from "react-icons/bi";
import style from "./JobCard.module.css";

/* This is the son component of job card => View Home */
export const JobCardS = (vacancies) => {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    return (
        <div className={style.newscard}>
            {/*---From here is the part when you can see the photo, the user name, the cohort and the time when it was posted  */}

            <div className={style.userInformation}>
                <div className={style.imageAvatar}>
                    <img src={vacancies.avatar} alt="avatar" />
                </div>
                <div className={style.user}>
                    <h3 className={style.namePerson}>{vacancies.user_info}</h3>
                    <h3 className={style.cohort}>{vacancies.cohort} </h3>
                    <h3 className={style.time}>{vacancies.time}</h3>
                </div>
            </div>

            {/* In this part you can read the information of the event, name, date, place and the inscription link */}
            <h3 className={style.namePerson}>
                Nombre de la oferta: {vacancies.title}{" "}
            </h3>

            <div className={style.eventsContainer}>
                <p className={style.paragraph1}>
                    <strong> Tipo de perfil: </strong> {vacancies.type}{" "}
                </p>
                <p className={style.paragraph1}>
                    <strong> Descripción: </strong> {vacancies.description}{" "}
                </p>
                <p className={style.paragraph1}>
                    <strong> Habilidades blandas: </strong>{" "}
                    {vacancies.softSkills}{" "}
                </p>
                <p className={style.paragraph1}>
                    <strong> Lugar: </strong> {vacancies.place}{" "}
                </p>
                <p className={style.paragraph1}>
                    <strong> Modalidad: </strong> {vacancies.modality}{" "}
                </p>
                <p className={style.paragraph1}>
                    <strong> Empresa: </strong> {vacancies.company}{" "}
                </p>
                <p className={style.paragraph1}>
                    <strong> Salario: </strong> {vacancies.salary}{" "}
                </p>
                <p className={style.paragraph1}>
                    <strong> Contacto: </strong> {vacancies.contact}{" "}
                </p>
            </div>
            {/*In this part is the last part with the like, comment and share section  */}

            <div className={style.iconsCard}>
                {/* This is the like button */}
                <div className={style.likeButton}>
                    <BiLike
                        onClick={() => setCount(count + 1)}
                        className={style.like}
                        size="40px"
                    >
                        {" "}
                    </BiLike>
                    <p>{count}</p>
                </div>

                {/* This is the comment button */}
                <div className={style.commentButton}>
                    <BiMessageRoundedDots
                        onClick={() => {
                            setShow(!show);
                        }}
                        className={style.comment}
                        size="40px"
                    >
                        {show ? "Div 2" : "Div 1"}{" "}
                    </BiMessageRoundedDots>
                    {show ? (
                        <div style={{ color: "red" }}></div>
                    ) : (
                        <div style={{ color: "blue" }}>
                            {/*This is the input of the comments */}
                            <input
                                type="text"
                                className={style.commentHidden}
                                name="comment"
                                id="comment"
                                placeholder="Escribe un comentario..."
                            />
                            <button className={style.btnComment} type="submit">
                                Publicar
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className={style.btnApply}>Aplicar</div>
        </div>
    );
};
