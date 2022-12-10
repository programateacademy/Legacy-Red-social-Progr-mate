import React, { Fragment, useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { getDataAll } from "../../helpers/fetch";
import UsersListSkeleton from "../UserListSkeleton/UserListSkeleton";
import style from "./UsersList.module.css";
import pagination from "./pagination.module.css";
import LazyLoad from 'react-lazy-load';

const UsersList = () => {

    const { users, setUsers } = useContext(DataContext)
    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    const getUsers = async () => {
        const data = await getDataAll("users");
        setUsers(data)
        setTablaUsuarios(data)
    }

    const [counterUser, setcounterUser] = useState(users.length);
    const [busqueda, setBusqueda] = useState("");

    const handleChange = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {

        var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
            if (elemento.firstName.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.lastName.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });

        setUsers(resultadosBusqueda);

        //Cantidad de usuarios encontrados
        var number = 0;
        if (resultadosBusqueda.length == 0) {
            number = users.length
        } else {
            number = resultadosBusqueda.length
        }
        console.log(`Usuarios encontrados: ${number}`)
        setcounterUser(number)
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
            <div className={style.searchUser}>
                <input type="text" placeholder="Busca un estudiante..." id="searchDataUser" onChange={handleChange} />
                <button onClick={handleChange}><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className={style.searchCount}>
                <h3>Usuarios encontrados: </h3><h3 className={style.searchCountVar} id="userNumber">{counterUser}</h3>
            </div>
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
