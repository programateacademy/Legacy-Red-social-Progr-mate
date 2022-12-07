import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { studyField, experienceField } from "../../../../helpers/formProfile"
import { v4 as uuid } from "uuid"

import style from "../../ProfileEditor.module.css"
import { updateData } from "../../../../helpers/fetch"
import FieldEducation from "../FieldEducation/FieldEducation"
import FieldExperience from "../FieldExpirience/FieldExpirience"

const FieldProfessional = ({ dataUser, setDataUser }) => {
  const params = useParams()
  const navigate = useNavigate()

  const {
    github,
    portfolio,
    description,
    avatar,
    cohorte,
    contactNumber,
    email,
    firstName,
    lastName,
    middleName,
    passwordHash,
    program,
    rol,
    secondSurname,
    state,
    _id,
    technicalSkills,
    softSkills,
    languages,
    prev_studes,
    experience,
  } = dataUser

  //Traer data del usuario

  //Enviar data del usuario al modelo de user y profile
  const submitData = async (e) => {

    if (params.id) {
      if (dataUser) {
        e.preventDefault()
        // await sendData("users", {
        //     user_info: params.id,
        //     github,
        //     description,
        //     technicalSkills,
        //     softSkills,
        //     languages,
        //     prev_studes,
        // })
        await updateData("users", params.id, {
          avatar,
          cohorte,
          contactNumber,
          email,
          firstName,
          github,
          portfolio,
          description,
          lastName,
          technicalSkills,
          softSkills,
          languages,
          middleName,
          passwordHash,
          program,
          rol,
          secondSurname,
          state,
          _id: params.id,
          experience,
          prev_studes,
        })
        let url = `/${params.type}`
        navigate(url.toString())
      } else {
        e.preventDefault()
        console.log("Error")
      }
    } else {
      try {
        await updateData("users", params.id, dataUser)
        /* await updateData("users", dataUser._id, dataUser) */
        navigate(`/profile`)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleChangeEdu = ({ target }, id) => {
    const { name, value } = target
    setDataUser({
      ...dataUser,
      prev_studes: dataUser.prev_studes.map((item) => ({
        ...item,
        [name]: item.id === id ? value : item[name],
      })),
    })
  }

  const addEducationField = () => {
    setDataUser({
      ...dataUser,
      prev_studes: [
        ...dataUser.prev_studes,
        {
          ...studyField,
          id: uuid(),
        },
      ],
    })
  }

  const [nameFile, setNameFile] = useState(["", "", ""])
  const onFileChange = ({ target }, id) => {
    const file = target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function load() {
      setDataUser({
        ...dataUser,
        prev_studes: dataUser.prev_studes.map((item) => ({
          ...item,
          certificate: item.id === id ? reader.result : item.certificate,
        })),
      })
    }

    if (file.type === "application/pdf") {
      nameFile[0] = file.name
      setNameFile([...nameFile])
    }
  }

  const deleteCertificate = (id) => {
    setDataUser({
      ...dataUser,
      prev_studes: dataUser.prev_studes.map((item) => ({
        ...item,
        certificate: item.id === id ? "" : item.certificate,
      })),
    })
  }

  const deleteEducation = (id) => {
    setDataUser({
      ...dataUser,
      prev_studes: dataUser.prev_studes.filter((item) => item.id !== id),
    })
  }

  const handleChangeExperience = ({ target }, id) => {
    const { name, value } = target
    setDataUser({
      ...dataUser,
      experience: dataUser.experience.map((item) => ({
        ...item,
        [name]: item.id === id ? value : item[name],
      })),
    })
  }

  const deleteExperience = (id) => {
    setDataUser({
      ...dataUser,
      experience: dataUser.experience.filter((item) => item.id !== id),
    })
  }

  const addExperienceField = () => {
    setDataUser({
      ...dataUser,
      experience: [
        ...dataUser.experience,
        {
          ...experienceField,
          id: uuid(),
        },
      ],
    })
  }

  return (
    <div className={style.expirience_container}>
      <div className={style.form_container}>
        <div className={style.row_inputs}>
          <div className={`${style.form} ${style.card}`}>
            {/* Seccion de educación formal  */}
            <div >
              <h2> Educación </h2>
              {prev_studes.length < 3 && (
                <i
                  className="fa-solid fa-plus icon"
                  onClick={addEducationField}
                ></i>
              )}
            </div>
            {prev_studes.map((edu) => (
              <FieldEducation
                key={edu.id}
                handleChange={handleChangeEdu}
                item={edu}
                onFileChange={onFileChange}
                deleteCertificate={deleteCertificate}
                deleteEducation={deleteEducation}
              />
            ))}
          </div>
          {/* Experiencia laboral */}
          <div className={`${style.form} ${style.card}`}>
            <div >
              <h2>Experiencia</h2>
              {experience.length < 3 && (
                <i
                  className="fa-solid fa-plus icon"
                  onClick={addExperienceField}
                ></i>
              )}
            </div>
            {experience.map((exp) => (
              <FieldExperience
                key={exp.id}
                handleChange={handleChangeExperience}
                item={exp}
                deleteExperience={deleteExperience}
              />
            ))}
          </div>
        </div>
        <button className={style.form_button} type="submit" onClick={submitData}>
          Guardar cambios
        </button>
      </div>
    </div>
  )
}

export default FieldProfessional
