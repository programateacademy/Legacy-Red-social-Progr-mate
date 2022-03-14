import React, { useState, Fragment, useContext, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { getDataAll, updateData } from "../../helpers/fetch";
import FilterHome from "../filterHome/FilterHome";
import { Search } from "../ForumQuestions/Search";
import style from "./UsersList.module.css";
//import ImagDama from '../../assets/images/ImagDama.png'
//import ImagCaballero from '../../assets/images/ImagCaballero.png'

const UsersList = () => {

    const [toogle, setToogle] = useState(true)
    const navigate = useNavigate()
    const [allUser, setAllUser] = useState([])
    const [filteredUser, setfilteredUser] = useState("");



    useEffect(async () => {
        const dataToEdit = await getDataAll("users");

        setAllUser(dataToEdit)
    }, [])

    useEffect(() => {

    }, [allUser, setAllUser]);


    return (
        <Fragment>

            <div className={style.container}>

                <FilterHome/>

                {allUser.map((user) => (
                    <div key={user._id} className={style.card}>
                        <img
                            className={style.img}
                            src={user.avatar}
                            alt="ImagDama"
                        />
                        <p className={style.p}>
                            {user.firstName}{" "}
                            {user.middleName && user.middleName}
                            <br />
                            {/* {user.state ? "En línea" : "off line"} 
                            <br/>*/}
                            <i>{user.cohorte.name}</i> 
                        </p>
                        <button
                            type="button"
                            onClick={() => navigate(`/profile/${user._id}`)}
                        >
                            Ver perfil
                        </button>

                        <ul
                            className={
                                user.state ? style.icon_green : style.icon_Gray
                            }
                        >
                            <i
                                /* onClick={() => onToggle(user._id)} */
                                className="far fa-user"
                            ></i>
                        </ul>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default UsersList;
