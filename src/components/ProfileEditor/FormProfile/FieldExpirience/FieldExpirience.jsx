import React from "react"
import style from "../../ProfileEditor.module.css"


const FieldExperience = ({ deleteExperience, handleChange, item }) => {
    return (
        <form className={style.form_container}>
            <div className={style.form}>
                <h3  htmlFor="position">
                    Cargo
                </h3>
                <i
                    className="far fa-trash-alt"
                    onClick={() => deleteExperience(item.id)}
                ></i>
                <input
                    type="text"
                    name="charge"
                    id="position"
                    value={item.charge}
                    onChange={(e) => handleChange(e, item.id)}
                    placeholder="Desarrollador backend Java"
                />
            </div>

            <div className={style.form}>
                <h3 htmlFor="company">
                    Empresa
                </h3>
                <input
                    type="text"
                    name="company"
                    id="company"
                    value={item.company}
                    onChange={(e) => handleChange(e, item.id)}
                    placeholder="Nombre de la empresa"
                />
            </div>
            <div className={style.form}>
                <h3 htmlFor="email">
                    Fecha inicio{" "}
                </h3>
                <input
                    type="date"
                    name="jobDateInit"
                    id="fecha inicio"
                    value={item.jobDateInit}
                    onChange={(e) => handleChange(e, item.id)}
                />
            </div>

            <div className={style.form}>
                <h3  htmlFor="edad">
                    Fecha fin
                </h3>
                <input
                    type="date"
                    name="jobDateFin"
                    id="fecha fin"
                    value={item.jobDateFin}
                    onChange={(e) => handleChange(e, item.id)}
                />
            </div>

            <div className={style.form}>
                <h3 htmlFor="description">
                    {" "}
                    Descripción{" "}
                </h3>
                <input
                    type="textarea"
                    name="descriptionJob"
                    id="description"
                    value={item.descriptionJob}
                    onChange={(e) => handleChange(e, item.id)}
                    placeholder="Realicé..."
                />
            </div>
        </form>
    )
}

export default FieldExperience