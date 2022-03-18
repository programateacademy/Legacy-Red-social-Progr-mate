import React, { useState, Fragment, useContext, useEffect } from 'react'
import { getDataAll, updateData } from '../../../helpers/fetch'
import { useNavigate } from "react-router-dom";
import style from '../../UsersList/UsersList.module.css'
import { DataContext } from '../../../context/DataContext';
import FilterHome from "../../filterHome/FilterHome";
//import ImagDama from '../../assets/images/ImagDama.png'
//import ImagCaballero from '../../assets/images/ImagCaballero.png'


const AdminCommunity = () =>  {

    // const [toogle, setToogle] = useState(true)

    const navigate = useNavigate()
    const [allUser, setAllUser] = useState([])
    useEffect(async () => {
        const dataToEdit = await getDataAll("users");
        setAllUser(dataToEdit)
    }, [])
    const onToggle = (id) => {
        allUser.map((user) => {
            if (user._id === id) {
                console.log(id, user._id);
                user.state = !user.state
                /* setDataUser(user) */
                console.log(user)
                updateData("users",user._id,{
                    state:user.state
                })
                setAllUser(allUser)
                navigate("/adminhome")
            }
        })

    }

/*     const [connection, setConnection] = useState()

    useEffect(()=>{
        
        const loggedUser = window.localStorage.getItem("loggedAgoraUser")
        const UserLogInfo = JSON.parse(loggedUser);
        console.log(UserLogInfo.msg)

        if(UserLogInfo.msg=='Login success!'){
            setConnection(true) 
        }

       // UserLogInfo!=='undefined'? : setConnection(false)
        console.log(connection)
    },[])
 */
    return (
        <Fragment>
            <div className={style.container}>
                <FilterHome/>
                <table>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nombre</th>
                            <th>Cohorte</th>
                            <th>Correo</th>
                            <th>Telefono</th>
                        </tr>
                    </thead><tbody>
                        
                        {allUser.map((user) => (
                            <tr key={user._id} >
                                <td><img src={user.avatar} alt="ImagDama" /></td>
                                <td>
                                    <p>{user.firstName} {user.middleName && user.middleName}</p>
                                </td>
                                <td>
                                    <i>{user.cohorte.name}</i>
                                </td>
                                <td>
                                    <ul className={user.state ? style.icon_green : style.icon_Gray}>
                                        <i onClick={() => onToggle(user._id)} className="far fa-user" ></i>
                                    </ul>
                                </td>
                                <td>
                                    {user.state ? 'Habilitado' : 'Deshabilitado'}
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
