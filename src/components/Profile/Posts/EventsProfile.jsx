import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../../context/DataContext";
import { deleteData, getDataAll } from "../../../helpers/fetch";
import style from "./Posts.module.css";

const EventsProfile = ({
    description,
    technologies,
    title,
    place,
    link,
    dateEvent,
    id,
    firstName,
    middleName,
    lastName,
    cohorte,
    avatar,
}) => {
    const { setGetPostsProfile, idUser } = useContext(DataContext);

    let navigate = useNavigate();
    const params = useParams();

    const deletePost = async () => {
        try {
            await deleteData("posts", id);

            const data = await getDataAll("posts");
            const filterData = data.filter(
                (posts) => posts.user_info === idUser
            );
            setGetPostsProfile(filterData.reverse());
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
                                onClick={() => navigate(`/formeventedit/${id}`)}
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
                    <p>
                        <span className={style.llavePost}>Link:&nbsp;</span>{" "}
                        {link}
                    </p>
                    <p>
                        {" "}
                        <span className={style.llavePost}>Lugar:</span> &nbsp;
                        {place}
                    </p>
                    <p>
                        <span className={style.llavePost}>Fecha:</span> &nbsp;
                        {dateEvent}
                    </p>
                    <div className={style.techContains}>
                        <p className={style.llavePost}>Tecnologías:&nbsp;</p>

                        {technologies &&
                            technologies.map((tech, index) => (
                                <p key={`technologies${index}`}>{tech}&nbsp;</p>
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

export default EventsProfile;
