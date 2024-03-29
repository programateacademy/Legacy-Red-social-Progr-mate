import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getData, getDataAll, sendData, deleteData } from "../../helpers/fetch";
import styles from "./ForumAnswers.module.css";
import { DataContext } from "../../context/DataContext";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { RiQuestionLine } from "react-icons/ri";

const ForumAnswers = () => {
    const navigate = useNavigate();
    const { questionId } = useParams();
    const [user, setUser] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const [postComments, setPostComments] = useState([]);
    const [refresh, setRefresh] = useState(false);
    // const [clear, setClear] = useState(false);
    const [comment, setComment] = useState("");
    const [question, setQuestion] = useState([]);
    // const [userComment, setUserComment] = useState([]);


    const { setDataUser, idUser } = useContext(DataContext);
    const searchUrl = idUser;


    const userInfo = async () => {
        const data = await getData("users", searchUrl);
        setUser(data);
        console.log(data, "users");
    };

    const commentInfo = async () => {
        const data = await getData("posts", questionId);
        setComments((comments) => data.comments);
        console.log(comments, "commets");
    };

    const submitData = async (e) => {
        e.preventDefault();

        try {
            await sendData(`posts/comment/${questionId}`, postComments);
            setRefresh((refresh) => !refresh);
        } catch (error) {
            console.log("Error" + error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setComment(value);
        setPostComments({ ...postComments, [name]: value, user_id: searchUrl });
    };

    const getUsers = async () => {
        const data = await getDataAll(`users`);
        setUsers(data);
    };

    useEffect(() => {
        userInfo();
        commentInfo();
        getUsers();
    }, []);
    useEffect(() => {
        commentInfo();
    }, [refresh, setRefresh]);

    const onUpdate = () => {
        setRefresh((refresh) => !refresh);
        setComment("");
    };

    useEffect(() => {
        const singleQuestions = async () => {
            const data = await getData("posts", questionId);
            setQuestion(data);
        };
        singleQuestions();
    }, [questionId]);

    const onName = (id) => {
        if (users.length > 0) {
            const user = users?.filter((user) => user._id === id);
            const userFilter = user[0];
            return `${userFilter.firstName} ${userFilter.lastName}`;
        }
    };

    const onImage = (id) => {
        if (users.length > 0) {
            const user = users?.filter((user) => user._id === id);
            const userFilter = user[0];
            return userFilter.avatar;
        }
    };

    const onDelete = async (id) => {
        await deleteData("comments", id);
        setRefresh((refresh) => !refresh);
    };
    const onDeletequestions = async (id) => {
        await deleteData("posts", id);
        setRefresh((refresh) => !refresh);
        navigate("/questions")
    };

    let date = question.createdAt?.slice(0, 10);

    console.log(question)

    return (
        <>
            <Navbar />
            <div className={styles.titleForum}>
                <h1 className={styles.answer__title}>
                    FORO CODERY
                    <RiQuestionLine size="22" />
                </h1>

                <hr className={styles.question__lineTitle} />
                <div className={styles.questionContainerMain}>
                    <div className={styles.containerQuestion}>
                        <img src={question.user_info?.avatar} alt="Avatar person asking" />
                        <p className={styles.questionName}> {question.user_info?.firstName} {question.user_info?.lastName} </p>
                        <p className={styles.dateQuestion}>
                            Creado: {date}
                        </p>
                    </div>
                    <div>
                        <h5 className={styles.questionTitle}>{question.title}</h5>
                        <p className={styles.questionText}>{question.description}</p>
                    </div>
                    <div className={styles.tagsContainer}></div>


                    {user._id === question.user_info?._id ? (
                        <span
                            className={styles.links}
                            onClick={() => onDeletequestions(question._id)}
                        >
                            Eliminar
                        </span>

                    ) : user.rol === 9 ? (
                        <span
                            className={styles.links}
                            onClick={() => onDeletequestions(question._id)}
                        >
                            Eliminar
                        </span>
                    ) : ("")}
                </div>
                <div className={styles.questionContainerMain}>
                    <form className={styles.from_container} onSubmit={submitData}>
                        <div className={styles.forms}>
                            <h3>Tu respuesta</h3>
                            <textarea
                                placeholder="Escribe tu respuesta"
                                className={styles.nom}
                                type="text"
                                name="comment"
                                value={comment}
                                onChange={handleChange}
                            />
                            <br />
                        </div>
                        <div className={styles.enviar}>
                            <button onClick={onUpdate} className="btn">
                                Responder
                            </button>
                        </div>
                    </form>
                </div>
                <p className={styles.title}> {question.comments?.length} Respuestas</p>
                {comments.map((comment, i) => (
                    <div key={i} className={styles.questionContainerMain}>
                        <div className={styles.answerInfoAnswer} >
                            <img className={styles.answerAvatar} src={onImage(comment.user_id)} />
                            <p className={styles.answerName} >{onName(comment.user_id)}</p>
                            <p className={styles.dateQuestion2}>
                                Creado: {date}
                            </p>
                        </div>
                        <div>
                            <p className={styles.answerUserAnswer}>{comment.comment}</p>
                        </div>
                        {user._id === comment.user_id ? (
                            <span
                                className={styles.links}
                                onClick={() => onDelete(comment._id)}
                            >
                                Eliminar
                            </span>
                        ) : user.rol === 9 ? (
                            <span
                                className={styles.links}
                                onClick={() => onDelete(comment._id)}
                            >
                                Eliminar
                            </span>
                        ) : ("")}
                    </div>
                ))}

                <br />
            </div>
        </>
    );
};

export default ForumAnswers;