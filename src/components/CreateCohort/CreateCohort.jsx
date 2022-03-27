import React, { useEffect, useState } from "react"
import { getDataAll, sendData } from "../../helpers/fetch"
import styles from "./styles.module.css"
import Icon_cohorte from "../../assets/icons/Icon_cohorte"
import { showErrMsg, showSuccess } from "../../utils/notification"
import { useNavigate } from "react-router-dom"
/* Create cohort and his users - Renders in AdminCohort*/
function CreateCohort() {
    const [newCohort, setNewCohort] = useState([])
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    const navigate = useNavigate()
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
        try {
            await sendData("cohorte", newCohort)
            await obtainCohortId()
        } catch (err) {
            console.log(err)
            showErrMsg(err.response.data.error)
        }
    }

    /* obtain id of cohort created in data base */
    const obtainCohortId = async () => {
        const cohorts = await getDataAll("cohorte")
        const cohort = await cohorts.find(({ cohorte }) => cohorte === parseInt(newCohort.cohorte))
        addCohortToUser(cohort._id)
    }

    /* Add cohort id for each user and provisional random password*/
    const addCohortToUser = (idCohort) => {
        setUsers(prevState => prevState.map(user => (
            {
                ...user,
                cohorte: idCohort,
                passwordHash: Math.random().toString(36).slice(2)
            }
        )))
    }

    /* create user in data base */
    const sendUsers = () => {
        try {
            users.forEach(async (item) => await sendData("users", item))
            showSuccess("Cohorte Creada", "Cohorte creada con éxito")
            setTimeout(() => { navigate("/adminhome") }, 2000)
        } catch (err) {
            console.log(err)
            showErrMsg(err.response.data.error)
        }
    }

    /* delete user in state */
    const deleteUser = (userEmail) => {
        setUsers(users.filter(item => item.email !== userEmail))
    }

    useEffect(() => {
        /* execute sendUsers when each user in state have cohort */
        users.some(item => item.cohorte) && sendUsers()
    }, [users])

    return (
        <>
            <h1 className={styles.title}><span><Icon_cohorte /></span>Cohorte</h1>

            <form id="cohort" onSubmit={sendCohort} className={`${styles.formCohort} ${styles.form}`}>
                <div className={styles.formCohortContainer}>
                    <label>Numero de Cohorte<span>*</span></label>
                    <input type="number" name="cohorte" onChange={handleCohort} />
                </div>
                <div className={styles.formCohortContainer}>
                    <label>Nombre de la Cohorte</label>
                    <input type="text" name="cohorte_name" onChange={handleCohort} />
                </div>
            </form>
            <div>
                <h2 className={styles.subtitle}>Datos del usuario</h2>
                <hr />
            </div>
            <form onSubmit={onAdduser} className={`${styles.formUser} ${styles.form}`}>
                <div className={styles.formCohortContainer}>
                    <label>Primer Nombre<span>*</span></label>
                    <input type="text" onChange={handleUser} name="firstName" required />
                </div>
                <div className={styles.formCohortContainer}>
                    <label>Segundo Nombre</label>
                    <input type="text" onChange={handleUser} name="middleName" />
                </div>
                <div className={styles.formCohortContainer}>
                    <label>Primer Apellido<span>*</span></label>
                    <input type="text" onChange={handleUser} name="lastName" required />
                </div>
                <div className={styles.formCohortContainer}>
                    <label>Segundo Apellido<span>*</span></label>
                    <input type="text" onChange={handleUser} name="secondSurname" required />
                </div>
                <div className={styles.formCohortContainer}>
                    <label>Correo Electronico<span>*</span></label>
                    <input type="email" onChange={handleUser} name="email" required />
                </div>
                <div className={styles.formCohortContainer}>
                    <label>Numero de Celular<span>*</span></label>
                    <input type="number" onChange={handleUser} name="contactNumber" required />
                </div>

                <input type="submit" value="Agregar Usuario" id={styles.button} />
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

            <input disabled={!users.length} type="submit" value="Crear Cohorte" form="cohort" id={styles.button} />
        </>
    )
}

export default CreateCohort