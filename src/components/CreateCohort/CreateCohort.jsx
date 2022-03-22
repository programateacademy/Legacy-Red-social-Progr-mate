import React, { useEffect, useState } from "react"
import { getDataAll, sendData } from "../../helpers/fetch"

function CreateCohort() {
    const [newCohort, setNewCohort] = useState([])
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    const [cohortData, setCohortData] = useState({})

    /* Update cohort state */
    const handleCohort = (e) => {
        setNewCohort({
            ...newCohort,
            [e.target.name]: e.target.value
        })
    }

    /* Update user state */
    const handleUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    /* Add cohort for each user */
    const addCohortToUser = () => {
        setUsers(prevState => prevState.map(item => (
            { ...item, cohorte: cohortData._id }
        )))
        console.log("Agregada la nueva cohorte")
    }

    /* Add an user to users state */
    const onAdduser = (e) => {
        e.preventDefault()
        setUsers(prevState => [...prevState, user])
        setUser({})
        e.target.reset()
    }

    /* create cohort in data base */
    const sendCohort = async (event) => {
        event.preventDefault()
        await sendData("cohorte", newCohort)
        await obtainCohortData()
    }

    /* create user in data base */
    const sendUsers = () => {
        users.forEach((item) => sendData("users", item))
        console.log("Enviado los usuarios")
    }


    /* obtain data of cohort */
    const obtainCohortData = async () => {
        const cohorts = await getDataAll("cohorte")
        const cohort = await cohorts.find(({ cohorte }) => cohorte === parseInt(newCohort.cohorte))
        setCohortData(cohort)
    }

    /* delete user in state */
    const deleteUser = (userEmail) => {
        setUsers(users.filter(item => item.email !== userEmail))
    }
    const showUsers = () => {
        console.log(users)
        console.log(cohortData)
    }
    /* when cohort data is true */
    useEffect(() => {
        console.log(cohortData)
        console.log("Se entro a use effect")
        addCohortToUser()
        console.log("Se Agregar las cohortes a los usuarios")
        sendUsers()
        console.log("Se terminaron de enviar usuarios")
    }, [cohortData])

    return (
        <>
            <p>Cohorte</p>

            <form id="cohort" onSubmit={sendCohort}>
                <label>Numero de Cohorte</label>
                <input type="number" name="cohorte" onChange={handleCohort} />
                <label>Nombre de la Cohorte</label>
                <input type="text" name="cohorte_name" onChange={handleCohort} />
            </form>

            <p>Datos del usuario</p>
            <form onSubmit={onAdduser}>
                <label>Primer Nombre</label>
                <input type="text" onChange={handleUser} name="firstName" />
                <label>Segundo Nombre</label>
                <input type="text" onChange={handleUser} name="middleName" required /><br />
                <label>Primer Apellido</label>
                <input type="text" onChange={handleUser} name="lastName" required />
                <label>Segundo Apellido</label>
                <input type="text" onChange={handleUser} name="secondSurname" required /><br />
                <label>Correo Electronico</label>
                <input type="email" onChange={handleUser} name="email" required />
                <label>Numero de Celular</label>
                <input type="number" onChange={handleUser} name="contactNumber" required /><br />
                <label>Contraseña</label>
                <input type="text" onChange={handleUser} name="passwordHash" required /><br />

                <input type="submit" value="Agregar Usuario" />
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Primer Nombre</th>
                        <th>Segundo Nombre</th>
                        <th>Primer Apellido</th>
                        <th>Segundo Apellido</th>
                        <th>Correo Electronico</th>
                        <th>Numero de Celular</th>
                        <th>Contraseña</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(item => (
                        <tr key={item.email}>
                            <th>{item.firstName}</th>
                            <th>{item.middleName}</th>
                            <th>{item.lastName}</th>
                            <th>{item.secondSurname}</th>
                            <th>{item.email}</th>
                            <th>{item.contactNumber}</th>
                            <th>{item.passwordHash}</th>
                            <th><button onClick={() => { deleteUser(item.email) }}>Borrar</button></th>
                        </tr>
                    ))}
                </tbody>
            </table>

            <input disabled={!users.length} type="submit" value="Crear Cohorte" form="cohort" />
            <button onClick={showUsers}>Usuario</button>
            <button onClick={sendUsers}>Enviar Usuarios</button>
        </>
    )
}

export default CreateCohort