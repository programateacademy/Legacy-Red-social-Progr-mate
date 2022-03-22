import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDataAll, getData } from "../../helpers/fetch";
import styles from "./ForumQuestions.module.css";

export const Question = ({ data }) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("");
    const getUsers = async () => {
        const data = await getDataAll(`users`);
        setUsers(data);
    };
    useEffect(() => {
        getUsers();
    }, []);

    const onName = (id) => {
        const user = users.filter((user) => user._id === id);
        const userFilter = user[0];
        if (userFilter) {
            return `${userFilter.firstName} ${userFilter.lastName}`;
        }
    };

    const onImage = (id) => {
        const user = users.filter((user) => user._id === id);
        const userFilter = user[0];
        if (userFilter) {
            return userFilter.avatar;
        }
    };

    let date = data.createdAt.slice(0, 10);

    return (
        <div className={styles.questionContainerMain}>
            <div className={styles.containerQuestion}>
                <img
                    className={styles.question}
                    src={data.title && onImage(data.user_info)}
                />
                <h5 className={styles.question}>{data.title}</h5>
                <p className={styles.question} >{data.description}</p>
                <p className={styles.dateQuestion}>Creado: {date}</p>
            </div>
            <div className={styles.tagsContainer}>
                {data.tags.map((tag, index) => (
                    <h6 key={index} className={styles.tagsItems}>
                        {tag}{" "}
                    </h6>
                ))}
            </div>
            <div className={styles.infoContainer}>
                <p className={styles.name}>
                    {data.user_info && onName(data.user_info)}
                </p>
                <Link
                    to={"/questions/" + data._id}
                    state={{ from: "user" }}
                    className={styles.btn__question}
                >
                    Responder
                </Link>
            </div>
        </div>
    );
};
