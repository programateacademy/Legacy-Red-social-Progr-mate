import React, { useState, Fragment, useEffect, useContext } from 'react'
import { getDataAll, updateData } from '../../../helpers/fetch'
import { useNavigate } from "react-router-dom";
import style from './AdminCommunity.module.css'
import Searcher from './Searcher/Searcher'
import DeleteButton from '../../DeleteButton/DeleteButton'
import { DataContext } from '../../../context/DataContext';
import CreateUser from '../CreateUser/CreateUser'
import {useModals} from '../../modals/useModals'
import Modal from '../../modals/Modal'
import { BsThreeDotsVertical } from 'react-icons/bs'

/* Table of users - Renders in AdminHome */
const AdminCommunity = () => {
    const [IsOpenModal, openModal, closeModal] = useModals(false);
    const [allCohorts, setCohorts] = useState([])
    const navigate = useNavigate()
    // const [allUser, setAllUser] = useState([])
    const [filterUser, setFilterUser] = useState([])
    const {users, setUsers } = useContext(DataContext)
    
    
    
    useEffect(async () => {
        const data = await getDataAll("users")
        setUsers(data)
        setFilterUser(data)
        const dataCohort = await getDataAll("cohorte");
        setCohorts(dataCohort)
    }, [])
    
    const onToggle = (id) => {
        users.map((user) => {
            if (user._id === id) {
                console.log(id, user._id);
                user.state = !user.state
                /* setDataUser(user) */
                console.log(user)
                updateData("users", user._id, {
                    state: user.state
                })
                setUsers(users)
                navigate("/adminhome")
            }
        })
    }

    
    return (
        <Fragment>
            <div className={style.container_row}>
                <h1><span>🚀 </span>Usuarios</h1>
            </div>
            <div className={style.container_row}>
                <button onClick={openModal}>
                    Crear Usuario
                </button>
                <Modal IsOpen={IsOpenModal} closeModal={closeModal}>
                    <CreateUser/>
                </Modal>
                <Searcher typeOfSearch='Busqueda por correo' setFilter={setFilterUser} dataToFilter={users} objectKey={'email'}/>
            </div>
            <div className={style.tableContainer}>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nombre</th>
                            <th>Cohorte</th>
                            <th>Correo</th>
                            <th>Estado</th>
                            <th>Perfil</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead><tbody>
                        {filterUser.map((user) => (
                            <tr key={user._id} >
                                <td>
                                    <img src={user.avatar} alt="ImagDama" className={style.image}/>
                                </td>
                                <td>
                                    <p>{user.firstName} {user.middleName && user.middleName}</p>
                                </td>
                                <td>
                                    <i>{allCohorts.map(item => (
                                        item._id === user.cohorte ? <p key={user._id}>{item.cohorte_name}</p> : ""
                                    ))}</i>
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    <div className={user.state ? style.icon_green : style.icon_Gray}>
                                        <i onClick={() => onToggle(user._id)} className="far fa-user" ></i>
                                        {user.state ? 'Habilitado' : 'Deshabilitado'}
                                    </div>
                                </td>
                                <td>
                                    <button
                                        className={style.btn}
                                        type="button"
                                        onClick={() => navigate(`/profile/${user._id}`)}
                                    >
                                        Ver perfil
                                    </button>
                                </td>
                                <td>
                                    <button className={style.btn} onClick={() => window.open(`/formprofile/adminhome/${user._id}`, '_blank')} >
                                        <BsThreeDotsVertical />
                                    </button>
                                </td>
                                <td>
                                    <DeleteButton endpoint={'users'} id={user._id} />
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
