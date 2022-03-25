    import React, { useContext } from "react";
    import { useNavigate, useParams } from "react-router-dom";
    import { DataContext } from "../../../context/DataContext";
    import { deleteData, getDataAll } from "../../../helpers/fetch";
    import style from "./Posts.module.css";
    import Technologies from "./Technologies";

    const NewsProfile = ({
        description,
        images,
        technologies,
        title,
        id,
        firstName,
        middleName,
        lastName,
        cohorte,
        avatar,
    }) => {
        const { setGetPosts, idUser } = useContext(DataContext);

        let navigate = useNavigate();
        const params = useParams();

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
                                {cohorte.name}
                                {/* <br /> <span>2 hr</span> */}
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
                    </div>
                    <div className={style.news}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className={style.image}>
                            <img src={images} alt="Foto" />
                        </div>
                        <div className={style.techContain}>
                            {technologies &&
                                technologies.map((tech, index) => (
                                    <Technologies tech={tech} key={index} />
                                ))}
                        </div>
                    </div>
                    <div className={style.icon_cont2}>
                        <div className={style.like}>
                            <i className="far fa-thumbs-up"></i>
                            <span>23</span>
                        </div>
                        <div className={style.like}>
                            <i className="far fa-comment-dots"></i>
                            <span>20</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    export default NewsProfile;
