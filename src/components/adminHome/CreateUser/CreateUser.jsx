import React, {useState, useEffect, useContext} from 'react';
import {sendData, getDataAll } from '../../../helpers/fetch'
import styles from './CreateUser.module.css'
import {DataContext} from '../../../context/DataContext'
/* Create user - Renders in AdminHome*/
const CreateUser = () => {
    const [userModel, setUserModel] = useState({});
    const {allCohorts, setCohorts}= useContext(DataContext);

    useEffect(async()=> {
        const dataCohort = await getDataAll("cohorte");
        setCohorts(dataCohort)
    },[])
    const handleChange = ({target}) => {
        setUserModel({
            ...userModel,
            [target.name]: target.value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendData('users', userModel)
    }
    return (
        <form className={styles.form}>
            <h1>Nombre</h1>
            <input className={styles.text} type="text" name='firstName' placeholder="Primer Nombre" value={userModel.firstName} onChange={handleChange}/>
            <input className={styles.text} type="text" name='middleName' placeholder="Segundo Nombre" value={userModel.middleName} onChange={handleChange}/>
            <input className={styles.text} type="text" name='lastName' placeholder="Apellido" value={userModel.lastName} onChange={handleChange}/>
            <input className={styles.text} type="text" name='secondSurname' placeholder="Segundo Apellido" value={userModel.secondSurname} onChange={handleChange}/>
            <h1>Contacto</h1>
            <input className={styles.text} type="text" name='email' placeholder="Correo" value={userModel.email} onChange={handleChange}/>            
            <input className={styles.text} type="text" name='contactNumber' placeholder="Telefono" value={userModel.contactNumber} onChange={handleChange}/>
            <input className={styles.text} type="password" name='passwordHash' placeholder="Contraseña" value={userModel.passwordHash} onChange={handleChange}/>
            <h1>Cohorte</h1>
            <select className={styles.nom}
                type="select"
                name= "cohorte"
                onChange={handleChange}>
                {allCohorts.map(item => <option value={item._id} key={item._id}>{item.cohorte_name}</option>)}
            </select>
            <button onClick={handleSubmit} className={styles.btn}>Crear Usuario</button>
        </form>
    )
}

export default CreateUser
