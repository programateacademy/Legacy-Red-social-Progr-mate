import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { deleteData, getData, getDataAll, sendData } from "../../helpers/fetch";
import styles from "./Comment_likes.module.css";
import "./style_icon.css";
import style from "./Posts.module.css";
import Icon_events from "../../assets/icons/Icon_events";
import LazyLoad from 'react-lazy-load';

const News = ({
  description,
  technologies,
  title,
  place,
  link,
  dateEvent,
  id,
  user,
  rol,
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



  let navigate = useNavigate();

  const commentInfo = async () => {
    const data = await getData("posts", id);
    setLikes((likes) => data.likes);
    setComments((comments) => data.comments);
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

  useEffect(async () => {
    const dataCohort = await getDataAll("cohorte");
    setCohorts(dataCohort)
  }, []);

  useEffect(() => {
    getUser();
    commentInfo();
    getUsers();
  }, []);
  useEffect(() => {
    commentInfo();
  }, [setRefresh, refresh]);
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

  const deletePost = async () => {
    try {
      await deleteData("posts", id);

      const data = await getDataAll("posts");
      setGetPosts(data.reverse());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LazyLoad threshold={0.95}>
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
            <span className="Icon_events">
              <Icon_events width={30} height={30} />
            </span>
          </div>
          <div className={style.news}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={style.containerDesc}>
              <p>
                {" "}
                <span className={style.llavePost}><svg width="25px" height="25px" strokeWidth="1.73" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffcc02"><path d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1116 0z" stroke="#ffcc02" strokeWidth="1.73"></path><path d="M12 11a1 1 0 100-2 1 1 0 000 2z" fill="#ffcc02" stroke="#ffcc02" strokeWidth="1.73" strokeLinecap="round" strokeLinejoin="round"></path></svg></span> &nbsp;
                {place}
              </p>
            </div>
            <div className={style.containerDesc}>
              <p>
                <span className={style.llavePost}><svg width="25px" height="25px" strokeWidth="1.73" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffcc02"><path d="M15 4V2m0 2v2m0-2h-4.5M3 10v9a2 2 0 002 2h14a2 2 0 002-2v-9H3zM3 10V6a2 2 0 012-2h2M7 2v4M21 10V6a2 2 0 00-2-2h-.5" stroke="#ffcc02" strokeWidth="1.73" strokeLinecap="round" strokeLinejoin="round"></path></svg></span> &nbsp;
                {dateEvent}
              </p>
            </div>
            <div className={style.containerDesc}>
              <p>
                <span className={style.llavePost}><svg width="25px" height="25px" strokeWidth="1.73" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffcc02"><path d="M14 11.998C14 9.506 11.683 7 8.857 7H7.143C4.303 7 2 9.238 2 11.998c0 2.378 1.71 4.368 4 4.873a5.3 5.3 0 001.143.124" stroke="#ffcc02" strokeWidth="1.73" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 11.998c0 2.491 2.317 4.997 5.143 4.997h1.714c2.84 0 5.143-2.237 5.143-4.997 0-2.379-1.71-4.37-4-4.874A5.304 5.304 0 0016.857 7" stroke="#ffcc02" strokeWidth="1.73" strokeLinecap="round" strokeLinejoin="round"></path></svg>&nbsp;</span> <a href={link}>{link}</a>
              </p>
            </div>
            <div className={style.techContains}>
              <p className={style.llavePost}>Tags:&nbsp;</p>

              {technologies &&
                technologies.map((tech, index) => (
                  <p className={style.arrtech} key={`technologies${index}`}>
                    {tech}&nbsp;
                  </p>
                ))}
            </div>
          </div>
          <div className={style.icon_cont2}>
            <div className={style.like}>
              <i
                onClick={like ? submitLike : onDeleteLike}
                className={like ? "fa-regular fa-heart" : "fa-solid fa-heart red"}
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
                    onClick={() => navigate(`/formeventedit/${id}`)}
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
                (comment, index) => index < 15 && previewComment(comment, index)
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
    </LazyLoad>
  );
};

export default News;
