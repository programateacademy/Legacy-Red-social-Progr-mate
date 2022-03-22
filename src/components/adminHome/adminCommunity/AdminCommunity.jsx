import React, { useState, Fragment, useContext, useEffect } from 'react'
import { getDataAll, updateData } from '../../../helpers/fetch'
import { useNavigate } from "react-router-dom";
import style from '../../UsersList/UsersList.module.css'
import Searcher from './Searcher/Searcher'
import { DataContext } from '../../../context/DataContext';
import FilterHome from "../../filterHome/FilterHome";


const AdminCommunity = () => {

    const [allCohorts, setCohorts] = useState([])
    const navigate = useNavigate()
    const [allUser, setAllUser] = useState([])
    const [filterUser, setFilterUser] = useState([])
    useEffect(async () => {
        const dataToEdit = await getDataAll("users");
        const dataCohort = await getDataAll("cohorte");
        setAllUser(dataToEdit)
        setCohorts(dataCohort)
        setFilterUser(dataToEdit)
    }, [])
    const onToggle = (id) => {
        allUser.map((user) => {
            if (user._id === id) {
                console.log(id, user._id);
                user.state = !user.state
                /* setDataUser(user) */
                console.log(user)
                updateData("users", user._id, {
                    state: user.state
                })
                setAllUser(allUser)
                navigate("/adminhome")
            }
        })
    }

  
    const filter = (toSearch) => {
        let userToSet = allUser.filter((users) => {if (users.email.toString().toLowerCase().includes(toSearch.toLowerCase())){
            return users
        }})
        setFilterUser(userToSet)
        // setFilterUser(userToSet)
    }

    return (
        <Fragment>
            <Searcher typeOfSearch='Busqueda por correo' filter={filter}/>
            <div className={style.container}>
                <table>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nombre</th>
                            <th>Cohorte</th>
                            <th>Correo</th>
                            <th>Estado</th>
                        </tr>
                    </thead><tbody>
                        {filterUser.map((user) => (
                            <tr key={user._id} >
                                <td><img src={user.avatar} alt="ImagDama" /></td>
                                <td>
                                    <p>{user.firstName} {user.middleName && user.middleName}</p>
                                </td>
                                <td>
                                    <i>{allCohorts.map(item => (
                                        item._id === user.cohorte ? <p key={user._id}>{item.cohorte_name}</p> : ""
                                    ))}</i>
                                </td>
                                <td>
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    <ul className={user.state ? style.icon_green : style.icon_Gray}>
                                        <i onClick={() => onToggle(user._id)} className="far fa-user" ></i>
                                        {user.state ? 'Habilitado' : 'Deshabilitado'}
                                    </ul>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() => navigate(`/profile/${user._id}`)}
                                    >
                                        Ver perfil
                                    </button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
export default AdminCommunity
