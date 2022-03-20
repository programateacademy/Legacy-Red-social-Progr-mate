import React, { useEffect, useState } from "react"
import { getDataAll, sendData } from "../../helpers/fetch"

function CreateCohort() {
    const [newCohort, setNewCohort] = useState([])
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    const [cohortData, setCohortData] = useState()

    const showUsers = () => { console.log(users) }

    const handleCohort = (e) => {
        setNewCohort({ cohorte: e.target.value })
    }
    const handleUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const addCohortToUser = () => {
        setUsers(prevState => prevState.map(item => (
            { ...item, cohorte: cohortData._id }
        )))

    }

    const onAdduser = (e) => {
        e.preventDefault()
        setUsers(prevState => [...prevState, user])
        setUser({})
        e.target.reset()
    }

    const sendCohort = async (event) => {
        event.preventDefault()
        await sendData("cohorte", newCohort)
        await obtainCohortData()

    }
    const sendUsers =() => {
        users.forEach(async (item) => await sendData("users", item))
    }

    const obtainCohortData = async () => {
        const cohorts = await getDataAll("cohorte")
        const cohort = await cohorts.find(({ cohorte }) => cohorte === parseInt(newCohort.cohorte))
        setCohortData(cohort)
    }

    useEffect(() => {
        addCohortToUser()
        sendUsers()
    }, [cohortData])

    return (
        <>
            <p>Cohorte</p>

            <label>Nombre de la Cohorte</label>
            <input type="number" name="cohorte" onChange={handleCohort} />

            <p>Datos del usuario</p>
            <form onSubmit={onAdduser}>
                <label>Primer Nombre</label>
                <input type="text" onChange={handleUser} name="firstName" /><br />
                <label>Segundo Nombre</label>
                <input type="text" onChange={handleUser} name="middleName" /><br />
                <label>Primer Apellido</label>
                <input type="text" onChange={handleUser} name="lastName" /><br />
                <label>Segundo Apellido</label>
                <input type="text" onChange={handleUser} name="secondSurname" /><br />
                <label>Correo Electronico</label>
                <input type="text" onChange={handleUser} name="email" /><br />
                <label>Numero de Celular</label>
                <input type="text" onChange={handleUser} name="contactNumber" /><br />
                <label>Contraseña</label>
                <input type="text" onChange={handleUser} name="passwordHash" /><br />

                <input type="submit" value="Agregar Usuario" />
            </form>

            <button onClick={sendCohort}>Crear Cohorte</button>
            <button onClick={showUsers}>Show users</button>
            {/* <button onClick={addCohortToUser}>Add Cohort User</button> */}
        </>
    )
}

export default CreateCohort