import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { deleteData, getData, getDataAll, sendData } from "../../helpers/fetch";
import styles from "./Comment_likes.module.css";
import style from "./Posts.module.css";
import "./style_icon.css";
import Icon_job from "../../assets/icons/Icon_job";
const Jobs = ({
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
}) => {
    const { setGetPosts, idUser,allCohorts} = useContext(DataContext);
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
    }, [refresh]);
    let navigate = useNavigate();

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

    const deletePost = async () => {
        try {
            await deleteData("posts", id);
            const data = await getDataAll("posts");
            setGetPosts(data.reverse());
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
                {userPost?.avatar ? (
                  <img src={userPost?.avatar} alt="Foto" />
                ) : (
                  <i className="far fa-user-circle"></i>
                )}
              </div>
              <p>
                <b>
                  {userPost?.firstName} {userPost?.middleName}{" "}
                  {userPost?.lastName}
                </b>
                <br />
                <i>
                  {allCohorts.map((item) =>
                    item._id === userPost?.cohorte ? (
                      <span key={userPost._id}>{item.cohorte_name}</span>
                    ) : (
                      ""
                    )
                  )}
                </i>
              </p>
            </div>

            <span className="Icon_job">
              <Icon_job width={30} height={30} />
            </span>
          </div>
          <div className={style.news}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>
              <span className={style.llavePost}><svg width="23px" height="23px" stroke-width="1.73" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffcc02"><path d="M17 22H7a2 2 0 01-2-2v-8.818a.6.6 0 00-.1-.333L3.1 8.15a.6.6 0 01-.1-.333V2.6a.6.6 0 01.6-.6h1.8a.6.6 0 01.6.6v1.8a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V2.6a.6.6 0 01.6-.6h2.8a.6.6 0 01.6.6v1.8a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V2.6a.6.6 0 01.6-.6h1.8a.6.6 0 01.6.6v5.218a.6.6 0 01-.1.333l-1.8 2.698a.6.6 0 00-.1.333V20a2 2 0 01-2 2z" stroke="#ffcc02" stroke-width="1.73"></path></svg>&nbsp;</span> {company}
            </p>
            <p>
              <span className={style.llavePost}><svg width="23px" height="23px" stroke-width="1.73" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffcc02"><path d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1116 0z" stroke="#ffcc02" stroke-width="1.73"></path><path d="M12 11a1 1 0 100-2 1 1 0 000 2z" fill="#ffcc02" stroke="#ffcc02" stroke-width="1.73" stroke-linecap="round" stroke-linejoin="round"></path></svg>&nbsp;</span> {place}
            </p>
            <p>
              <span className={style.llavePost}><svg width="23px" height="23px" stroke-width="1.73" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffcc02"><path d="M7 4v1M7 9v1M17 20V4m0 0l3 3m-3-3l-3 3M7 14v6m0 0l3-3m-3 3l-3-3" stroke="#ffcc02" stroke-width="1.73" stroke-linecap="round" stroke-linejoin="round"></path></svg>&nbsp;</span>{" "}
              {modality}
            </p>
            <p>
              <span className={style.llavePost}><svg width="23px" height="23px" stroke-width="1.73" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffcc02"><path d="M16.154 7.154c-.949-.949-2.619-1.608-4.154-1.65m-4.154 10.65c.893 1.19 2.552 1.868 4.154 1.926m0-12.576c-1.826-.049-3.461.778-3.461 3.034 0 4.154 7.615 2.077 7.615 6.231 0 2.37-2.027 3.387-4.154 3.31m0-12.575V3m0 15.08V21" stroke="#ffcc02" stroke-width="1.73" stroke-linecap="round" stroke-linejoin="round"></path></svg>&nbsp;</span> {salary}
            </p>
            <p>
              <span className={style.llavePost}><svg width="23px" height="23px" stroke-width="1.73" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffcc02"><path d="M18.118 14.702L14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584l-3.882-1.479z" stroke="#ffcc02" stroke-width="1.73" stroke-linecap="round" stroke-linejoin="round"></path></svg>&nbsp;</span> {contact}
            </p>
            <div className={style.techContains}>
              <p className={style.llavePost}>Tecnologías:&nbsp; </p>
              {technologies &&
                technologies.map((tech, index) => (
                  <p className={style.arrtech} key={`tech${index}`}>
                    {tech}&nbsp;
                  </p>
                ))}
            </div>
          </div>
          <div className={style.icon_cont2}>
            <div className={style.like}>
              <i
                onClick={like ? submitLike : onDeleteLike}
                className={like ? "fa-regular fa-heart" : "fa-solid fa-heart red "}
              ></i>
              <span>{likes.length}</span>
            </div>
            <div className={style.like}>
              <i onClick={toggle} className="far fa-comment-dots"></i>
              <span>{comments.length}</span>
            </div>
            <div className={style.editButtons}>
            {idUser === user ? (
              <div className={style.iconsModify}>
                <i
                  className="fas fa-pencil-alt"
                  onClick={() => navigate(`/formjobs/${id}`)}
                ></i>
                <i className="far fa-trash-alt" onClick={deletePost}></i>
              </div>
            ) : rol === 9 ? (
              <div className={style.iconsModify}>
                <i className="far fa-trash-alt" onClick={deletePost}></i>
              </div>
            ) : (
              ""
            )}
            </div>
          </div>
          {showComments && (
            <div className={style.comment}>
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
                (comment, index) => index < 2 && previewComment(comment, index)
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

export default Jobs;
