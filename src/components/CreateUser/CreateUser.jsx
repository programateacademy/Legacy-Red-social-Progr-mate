import React, {useState} from 'react';
import {sendData} from '../../helpers/fetch'

/* Create user - Renders in AdminHome*/
const CreateUser = () => {
    const [userModel, setUserModel] = useState({})

    const handleChange = ({target}) => {
        setUserModel({
            ...userModel,
            [target.name]: target.value
        });
        console.log(userModel)
    }
    const handleSubmit = async () => {
        await sendData('users', userModel)
        
    }
    return (
        <form action="">
            <input type="text" name='firstName' placeholder="Primer Nombre" value={userModel.firstName} onChange={handleChange}/>
            <input type="text" name='email' placeholder="Correo" value={userModel.email} onChange={handleChange}/>
            <input type="text" name='lastName' placeholder="Apellido" value={userModel.lastName} onChange={handleChange}/>
            <input type="text" name='contactNumber' placeholder="Telefono" value={userModel.contactNumber} onChange={handleChange}/>
            <input type="password" name='passwordHash' placeholder="Contraseña" value={userModel.passwordHash} onChange={handleChange}/>
            <input type="submit" onClick={handleSubmit} name/>
        </form>
    )
}

export default CreateUser
