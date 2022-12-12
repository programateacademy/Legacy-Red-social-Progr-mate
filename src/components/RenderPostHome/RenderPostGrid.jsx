import React, { useState } from "react";
import { BiLike, BiMessageRoundedDots } from "react-icons/bi";
import style from "./RenderPostHome.module.css";
import LazyLoad from 'react-lazy-load';
/* This is the son component of news => View Home  */
export const RenderPostGrid = (post) => {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    return (
        <LazyLoad threshold={0.95}>
            <div className={style.newscard}>
                {/*---From here is the part when you can see the photo, the user name, the cohort and the time when it was posted  */}

                <div className={style.userInformation}>
                    <div className={style.imageAvatar}>
                        <img src={post.avatar} alt="avatar" />
                    </div>
                    <div className={style.user}>
                        <h3 className={style.namePerson}>{post.name_person}</h3>
                        <h3 className={style.cohort}>{post.cohort} </h3>
                        <h3 className={style.time}>{post.time}</h3>
                    </div>
                </div>

                {/* In this part you can read the information of the news */}
                <p className={style.paragraph}>{post.news} </p>

                {/* In this part you can see the image of the news */}
                <div className={style.imageContainer}>
                    <img src={post.image} alt="noticia" />
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
                                    placeholder="Deja un comentario..."
                                />
                                <button className={style.btnComment} type="submit">
                                    Publicar
                                </button>
                            </div>
                        )}
                        <div className={style.commentButton}></div>
                    </div>
                    {/*This is the share button  */}
                </div>
            </div>
        </LazyLoad>
    );
};
