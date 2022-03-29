import React, { useState, Fragment, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
                        <Link key={user._id} className={style.card} to={`/profile/${user._id}`}>
                            <img
                                className={style.img}
                                src={user.avatar}
                                alt="ImagDama"
                            />
                            <div>
                                <p className={style.p}>
                                    {user.firstName}{" "}{user.lastName}
                                    <br />
                                </p>
                                <div className={style.cohorteCom}>
                                    {user.firstName}{" "}
                                </div>
                            </div>
                        </Link>
                    )) :
                    [...Array(10)].map((x, i) =>
                <UsersListSkeleton key={i} />
            )}
            </div>
        </Fragment>
    );
};

export default UsersList;
