import React, { useState, Fragment, useContext, useEffect } from 'react'
import { getDataAll, updateData } from '../../../helpers/fetch'
import { useNavigate } from "react-router-dom";
import style from '../../UsersList/UsersList.module.css'
import { DataContext } from '../../../context/DataContext';
import FilterHome from "../../filterHome/FilterHome";
//import ImagDama from '../../assets/images/ImagDama.png'
//import ImagCaballero from '../../assets/images/ImagCaballero.png'


const AdminCommunity = () =>  {

    const [toogle, setToogle] = useState(true)

    const navigate = useNavigate()
    const [allUser, setAllUser] = useState([])
    
    useEffect(async () => {
        const dataToEdit = await getDataAll("users");

        setAllUser(dataToEdit)
    }, [])

    useEffect(() => {

    }, [allUser, setAllUser]);

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

                {allUser.map((user) => (

                    <div key={user._id} className={style.card}>
                        <img className={style.img} src={user.avatar} alt="ImagDama" />
                        <p className={style.p}>{user.firstName} {user.middleName && user.middleName}<br />
                            {user.state ? 'Habilitado' : 'Deshabilitado'}<br/>
                            {/* {user.connection ? 'En linea': 'Desconectado'} */}
                            </p>
                            <i>{user.cohorte.name}</i> 

                            <button
                            type="button"
                            onClick={() => navigate(`/profile/${user._id}`)}
                        >
                            Ver perfil
                        </button>




                        <ul className={user.state ? style.icon_green : style.icon_Gray}>
                            <i onClick={() => onToggle(user._id)} className="far fa-user" ></i>
                        </ul>
                    </div>

                ))

                }

            </div>
        </Fragment>
    )
}

export default AdminCommunity
