import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { deleteData, getData, getDataAll, sendData } from "../../helpers/fetch";
import style from "./Posts.module.css";
import styles from "./Comment_likes.module.css";
import Technologies from "./Technologies";
import "./style_icon.css";
import Icon_news from "../../assets/icons/Icon_new";
import LazyLoad from "react-lazy-load";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const News = ({ description, images, technologies, title, id, user, rol }) => {
  const { setGetPosts, idUser, allCohorts, setCohorts } =
    useContext(DataContext);
  const [showComments, setShowComments] = useState(false);
  const [moreComments, setMoreComments] = useState(false);
  const [inputComment, setInputComment] = useState("");
  const [postComments, setPostComments] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [like, setLike] = useState(true);
  const [likes, setLikes] = useState([]);
  const [userPost, setUserPost] = useState();

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
  const cohort = async () => {
    const dataCohort = await getDataAll("cohorte");
    setCohorts(dataCohort);
  };

  useEffect(() => {
    let isMounted = true;
    const getInfo = async () => {
      if (isMounted) {
        getUser();
        commentInfo();
        getUsers();
        cohort();
      }
    };
    getInfo();
    return () => {
      isMounted = false;
    };
  }, []);
  useEffect(() => {
    let isMounted = true;
    const commentAsync = async () => {
      if (isMounted) {
        commentInfo();
      }
    };
    commentAsync();
    return () => {
      isMounted = false;
    };
  }, [refresh, setRefresh]);

  const deletePost = async () => {
    try {
      await deleteData("posts", id);
      const data = await getDataAll("posts");
      setGetPosts(data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const toggle = () => {
    setShowComments(!showComments);
  };
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

  const onName = (id) => {
    const user = users.filter((user) => user._id === id);
    const userFilter = user[0];

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

    likes.map((like) => {
      if (like.user_id === idUser) {
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
            <span className={styles.name}>{onName(comment.user_id)}</span>
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

            <span className="Icon_news">
              <Icon_news width={30} height={30} />
            </span>
          </div>
          <div className={style.news}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={style.techContain}>
              {/* <p className={style.llavePost}>Tecnologías:&nbsp; </p> */}
              {technologies &&
                technologies.map((tech, index) => (
                  <Technologies
                    className={style.arrtech}
                    tech={tech}
                    key={index}
                  />
                ))}
            </div>
            <TransformWrapper>
              <TransformComponent>
                <img src={images} alt="Foto" />
              </TransformComponent>
            </TransformWrapper>
          </div>

          <div className={style.icon_cont2}>
            <div className={style.like}>
              <i
                onClick={like ? submitLike : onDeleteLike}
                className={
                  like ? "fa-regular fa-heart" : "fa-solid fa-heart red "
                }
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
                    onClick={() => navigate(`/formnews/${id}`)}
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
              <p>Deja tu comentario</p>
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
