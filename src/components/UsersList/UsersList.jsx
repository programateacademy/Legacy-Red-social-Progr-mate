import React, { Fragment, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { getDataAll } from "../../helpers/fetch";
import UsersListSkeleton from "../UserListSkeleton/UserListSkeleton";
import style from "./UsersList.module.css";
import LazyLoad from 'react-lazy-load';

const UsersList = () => {
    const navigate = useNavigate()
    const { users, setUsers } = useContext(DataContext)

    const getUsers = async () => {
        const data = await getDataAll("users");
        setUsers(data)
    }

    useEffect(() => {
        let isMounted = true
        !users.length > 0 && getUsers()
        return () => {
            isMounted = false;
        }
    }, [])

    return (
        <Fragment>
            <LazyLoad threshold={0.95}>
                <div className={style.container}>
                    {users.length > 0 ?
                        users.map((user) => (
                            <Link key={user._id} className={style.card} to={`/profile/${user._id}`}>
                                <div className={style.containerName}>
                                    <p className={style.p}>
                                        {user.firstName}
                                        {" "}
                                        {user.lastName}
                                    </p>
                                </div>
                                <img
                                    loading="lazy"
                                    className={style.img}
                                    src={user.avatar}
                                    alt={user.firstName + "AlterIMG"}
                                />
                                <div className={style.cohorteCom}>
                                    {user.contactNumber}
                                </div>
                            </Link>
                        )) :
                        [...Array(10)].map((x, i) =>
                            <UsersListSkeleton key={i} />
                        )}
                </div>
            </LazyLoad>
        </Fragment>
    );
};

export default UsersList;
