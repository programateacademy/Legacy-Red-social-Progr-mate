import React, { useEffect, useState, useContext } from 'react'
import { sendData, getDataAll } from '../../helpers/fetch'
import styles from './styles.module.css'

import { showErrMsg } from '../../utils/notification'
import { DataContext } from '../../context/DataContext'
import DeleteButton from '../DeleteButton/DeleteButton'
/* Create cohort and his users - Renders in AdminCohort*/
function CreateCohort() {
  const { allCohorts, setCohorts } = useContext(DataContext)
  const [newCohort, setNewCohort] = useState([])

  const [cohorts, set] = useState([])
  /* Update cohort state */

  useEffect(() => {
    set(allCohorts)
  }, [allCohorts])

  const updateCohorts = async () => {
    const dataCohort = await getDataAll('cohorte')
    set(dataCohort)
  }

  const checkCohort = (cohort) => {
    let checkNumber = allCohorts
      .map((e) => e.cohorte == cohort.cohorte)
      .filter((c) => c === true)[0]
    let checkName = allCohorts
      .map((e) => e.cohorte_name == cohort.cohorte_name)
      .filter((c) => c === true)[0]
    if (checkNumber || checkName) {
      console.log(
        allCohorts
          .map((e) => e.cohorte == cohort.cohorte)
          .filter((c) => c === true),
      )
      return false
    } else {
      return true
    }
  }
  const handleCohort = (e) => {
    setNewCohort({
      ...newCohort,
      [e.target.name]: e.target.value,
    })
  }

  /* create cohort in data base */
  const sendCohort = async (event) => {
    event.preventDefault()
    if (checkCohort(newCohort)) {
      try {
        await sendData('cohorte', newCohort)
      } catch (err) {
        console.log(err)
        showErrMsg(err.response.data.error)
      }
    } else {
      alert('Numero de Cohorte existente')
    }
    updateCohorts()
  }
  return (
    <>
      <form
        id="cohort"
        onSubmit={sendCohort}
        className={`${styles.formCohort} ${styles.form}`}
      >
        <h1 className={styles.title}>Cohorte</h1>
        <div className={styles.formCohortContainer}>
          <label>
            Numero de Cohorte<span>*</span>
          </label>
          <input
            type="number"
            name="cohorte"
            onChange={handleCohort}
            required
          />
        </div>
        <div className={styles.formCohortContainer}>
          <label>
            Nombre de la Cohorte<span>*</span>
          </label>
          <input
            type="text"
            name="cohorte_name"
            onChange={handleCohort}
            required
          />
        </div>
        <input type="submit" className={styles.button} value="Crear Cohorte" />
      </form>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Cohorte</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cohorts.map((item, index) => (
            <tr key={index}>
              <td>{item.cohorte}</td>
              <td>{item.cohorte_name}</td>
              <td>
                <DeleteButton
                  endpoint="cohorte"
                  id={item._id}
                  onClick={updateCohorts}
                />

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default CreateCohort
