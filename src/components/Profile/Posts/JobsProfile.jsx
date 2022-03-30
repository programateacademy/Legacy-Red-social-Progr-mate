import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../../context/DataContext";
import { deleteData, getData, getDataAll, sendData } from "../../../helpers/fetch";
import styles from "../../homePublications/Comment_likes.module.css";
import style from "../../homePublications/Posts.module.css";
import "../../homePublications/style_icon.css";
import Icon_job from "../../../assets/icons/Icon_job";
const JobsProfile = ({
    description,
    technologies,
    title,
    company,
    place,
    modality,
    salary,
    contact,
    id,
    user,
    rol,
    avatar,
    firstName,
    middleName,
    lastName,
    cohorte
}) => {
    const { setGetPosts, idUser, allCohorts, setCohorts } = useContext(DataContext);
    const [showComments, setShowComments] = useState(false);
    const [moreComments, setMoreComments] = useState(false);
    const [inputComment, setInputComment] = useState("");
    const [postComments, setPostComments] = useState([]);
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [userPost, setUserPost] = useState();
    const [like, setLike] = useState(true);
    const [likes, setLikes] = useState([]);
    const [commentId, setCommentId] = useState([]);
    

    let navigate = useNavigate();
    const params = useParams();
    const commentInfo = async () => {
        const data = await getData("posts", id);

        setComments((comments) => data.comments);
        setLikes((likes) => data.likes);
    };
    const getUsers = async () => {
        const data = await getDataAll(`users`);
        setUsers(data);
    };
    const getUser = async () => {
        try {
            const data = await getData("users", user);
            setUserPost(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        let isMounted = true
        const getAsyncData = async () => {
        if(isMounted){
        getUser();
        commentInfo();
        getUsers();
        }
        }
        getAsyncData()
        return () => {
            isMounted = false;
        }
    }, []);
    useEffect(() => {
        let isMounted = true
        const commentAsync = async () => {
            if (isMounted) {
                commentInfo();
            }
        }
        commentAsync();
        return () => {
            isMounted = false;
        }
        
    }, [refresh, setRefresh]);

    const submitData = async (e) => {
        e.preventDefault();

        try {
            await sendData(`posts/comment/${id}`, postComments);
            setInputComment("");
            setRefresh(!refresh);
        } catch (error) {
            console.log("Error" + error);
        }
    };
    const submitLike = async () => {
        setLike(!like);
        console.log("like");
        const data = await getData("posts", id);
        const idPost = data.likes;

        likes.map((like) => {
            if (like._id === idPost) {
            }
        });
        try {
            await sendData(`posts/like/${id}`, { like: 1, user_id: idUser });
            setRefresh(!refresh);
        } catch (error) {
            console.log("Error" + error);
        }
    };
    const onDeleteLike = async () => {
        setLike(!like);
        console.log("dislike");
        likes.map((like) => {
            if (like.user_id === idUser) {
                console.log(like.user_id, like._id);
                deleteData("likes", like._id);
                setRefresh(!refresh);
            }
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputComment(value);
        setPostComments({ ...postComments, [name]: value, user_id: idUser });
    };

    const toggle = () => {
        console.log("click");
        setShowComments(!showComments);
    };
    const onName = (id) => {
        const user = users.filter((user) => user._id === id);
        const userFilter = user[0];
        console.log(userFilter);
        return `${userFilter.firstName} ${userFilter.lastName}`;
    };

    const onImage = (id) => {
        const user = users.filter((user) => user._id === id);
        const userFilter = user[0];
        return userFilter.avatar;
    };
    const onDelete = async (id) => {
        await deleteData("comments", id);
        setRefresh(!refresh);
    };

    useEffect(async () => {
        const dataCohort = await getDataAll("cohorte");
        setCohorts(dataCohort)
    }, []);

    const deletePost = async () => {
        try {
            await deleteData("posts", id);

            const data = await getDataAll("posts");
            const filterData = data.filter(
                (posts) => posts.user_info === idUser
            );
            setGetPosts(filterData.reverse());
        } catch (error) {
            console.log(error);
        }
    };

    const previewComment = (comment, index) => {
        return (
            <div key={index} className={styles.comments}>
                <div className={styles.comment_div}>
                    <div className={styles.header}>
                        <img
                            className={styles.img}
                            src={onImage(comment.user_id)}
                            alt={comment.user_id}
                        />
                        <span className={styles.name}>
                            {onName(comment.user_id)}
                        </span>
                    </div>

                    <span>{comment.comment}</span>
                    {comment.user_id === idUser && (
                        <span
                            onClick={() => onDelete(comment._id)}
                            className={styles.delete}
                        >
                            Eliminar
                        </span>
                    )}
                </div>
            </div>
        );
    };
    return (
        <section className={style.container1}>
            <div className={style.container2}>
                <div className={style.icon_cont1}>
                    <div className={style.postUser}>
                        <div className={style.icon}>
                        
                        {avatar ? (
                                <img src={avatar} alt="Foto" />
                            ) : (
                                <i className="far fa-user-circle"></i>
                            )}
                        </div>
                        <p>
                        <b>
                                {firstName} {middleName} {lastName}
                        </b>
                            <br />
                            <i>{allCohorts.map(item => (
                                        item._id === cohorte ? <span key={cohorte}>{item.cohorte_name}</span> : ""
                                    ))}</i>
                        </p>
                    </div>
                    {!params.id && (
                            <div className={style.iconsModify}>
                                <i
                                    className="fas fa-pencil-alt"
                                    onClick={() => navigate(`/formnews/${id}`)}
                                ></i>
                                <i
                                    className="far fa-trash-alt"
                                    onClick={deletePost}
                                ></i>
                            </div>
                        )}
                    <span><Icon_job/></span>
                </div>
                <div className={style.news}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className={style.techContains}>
                        <p className={style.llavePost}>Tecnologías:&nbsp; </p>
                        {technologies &&
                            technologies.map((tech, index) => (
                                <p key={`tech${index}`}>{tech}&nbsp;</p>
                            ))}
                    </div>
                    <p>
                        <span className={style.llavePost}>Empresa:&nbsp;</span>{" "}
                        {company}
                    </p>
                    <p>
                        <span className={style.llavePost}>Lugar:&nbsp;</span>{" "}
                        {place}
                    </p>
                    <p>
                        <span className={style.llavePost}>
                            Modalidad:&nbsp;
                        </span>{" "}
                        {modality}
                    </p>
                    <p>
                        <span className={style.llavePost}>Salario:&nbsp;</span>{" "}
                        {salary}
                    </p>
                    <p>
                        <span className={style.llavePost}>Contacto:&nbsp;</span>{" "}
                        {contact}
                    </p>
                </div>
                <div className={style.icon_cont2}>
                    <div className={style.like}>
                        <i
                            onClick={like ? submitLike : onDeleteLike}
                            className={
                                like
                                    ? "far fa-thumbs-up "
                                    : "far fa-thumbs-up red "
                            }
                        ></i>
                        <span>{likes.length}</span>
                    </div>
                    <div className={style.like}>
                        <i onClick={toggle} className="far fa-comment-dots"></i>
                        <span>{comments.length}</span>
                    </div>
                </div>
                {showComments && (
                    <div>
                        <p>deja tu comentario</p>
                        <form className={styles.form} onSubmit={submitData}>
                            <textarea
                                name="comment"
                                value={inputComment}
                                className={styles.input_comment}
                                onChange={handleChange}
                            ></textarea>
                            <button className={styles.submit}>Enviar</button>
                        </form>
                        {comments.map(
                            (comment, index) =>
                                index < 2 && previewComment(comment, index)
                        )}

                        
                        {moreComments &&
                            comments.map(
                                (comment, index) =>
                                    index >= 2 && previewComment(comment, index)
                            )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default JobsProfile;
