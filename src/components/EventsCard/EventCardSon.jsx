import React, { useState } from "react";
import { BiLike, BiMessageRoundedDots, BiShare } from "react-icons/bi";
import style from "./eventCard.module.css";

/* this is the son component of event card */

export const EventCardSon = (props) => {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    return (
        <div className={style.newscard}>
            {/*---From here is the part when you can see the photo, the user name, the cohort and the time when it was posted  */}

            <div className={style.userInformation}>
                <div className={style.imageAvatar}>
                    <img src={props.avatar} alt="avatar" />
                </div>
                <div className={style.user}>
                    <h3 className={style.namePerson}>{props.user_info}</h3>
                    <h3 className={style.cohort}>{props.cohort} </h3>
                    <h3 className={style.time}>{props.time}</h3>
                </div>
            </div>

            {/* In this part you can read the information of the event, name, date, place and the inscription link */}
            <h3 className={style.namePerson}>{props.title} </h3>

            <div className={style.imageContainer}>
                <img src={props.image} alt="noticia" />
            </div>

            <div className={style.eventsContainer}>
                <p className={style.paragraph1}>
                    <strong> Descripción: </strong> {props.description}{" "}
                </p>
                <p className={style.paragraph1}>
                    <strong> Link: </strong> {props.link}{" "}
                </p>
                <p className={style.paragraph1}>
                    <strong> Fecha: </strong> {props.dateEvent}{" "}
                </p>
                <p className={style.paragraph1}>
                    <strong> Lugar: </strong> {props.place}{" "}
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
                    <div className={style.commentButton}></div>
                </div>
            </div>
        </div>
    );
};
