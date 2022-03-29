import React, { useState, Fragment, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { getDataAll, updateData } from "../../helpers/fetch";
import UsersListSkeleton from "../UserListSkeleton/UserListSkeleton";
import style from "./UsersList.module.css";

const UsersList = () => {
    const navigate = useNavigate()
    const { users, setUsers } = useContext(DataContext)

    const getUsers = async () => {
        const data = await getDataAll("users");
        setUsers(data)
    }

    useEffect(() => {
        let isMounted = true
        !users && getUsers()
        return () => {
            isMounted = false;
        }
    }, [])

    return (
        <Fragment>
            <div className={style.container}>
                {users ?
                    users.map((user) => (
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
                                <i className="far fa-user"></i>
                            </ul>
                        </div>
                    )) :
                    [...Array(10)].map((x, i) =>
                <UsersListSkeleton key={i} />
            )}
            </div>
        </Fragment>
    );
};

export default UsersList;
