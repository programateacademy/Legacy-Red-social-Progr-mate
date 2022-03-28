import React from "react";
import style from "../ProfessionalInformation.module.css";


const FieldExperience = ({ deleteExperience, handleChange, item }) => {
    return (
        <div className={style.experience} id="2">
            <div className={style.inputs}>
                <label className={style.label} htmlFor="position">
                    Cargo
                </label>
                <i
                    className="far fa-trash-alt"
                    onClick={() => deleteExperience(item.id)}
                ></i>
                <input
                    type="text"
                    className={style.inputPersonal}
                    name="charge"
                    id="position"
                    value={item.charge}
                    onChange={(e) => handleChange(e, item.id)}
                    placeholder="Desarrollador backend Java"
                />
            </div>

            <div className={style.inputs}>
                <label className={style.label} htmlFor="company">
                    Empresa
                </label>
                <input
                    type="text"
                    className={style.inputPersonal}
                    name="company"
                    id="company"
                    value={item.company}
                    onChange={(e) => handleChange(e, item.id)}
                    placeholder="Nombre de la empresa"
                />
            </div>
            <div className={style.containDate}>
                <label className={style.label} htmlFor="email">
                    Fecha inicio{" "}
                </label>
                <input
                    type="date"
                    className={style.inputDate}
                    name="jobDateInit"
                    id="fecha inicio"
                    value={item.jobDateInit}
                    onChange={(e) => handleChange(e, item.id)}
                />
            </div>

            <div className={style.containDate}>
                <label className={style.label} htmlFor="edad">
                    Fecha fin
                </label>
                <input
                    type="date"
                    className={style.inputDate}
                    name="jobDateFin"
                    id="fecha fin"
                    value={item.jobDateFin}
                    onChange={(e) => handleChange(e, item.id)}
                />
            </div>

            <div className={style.inputs}>
                <label className={style.label} htmlFor="description">
                    {" "}
                    Descripción{" "}
                </label>
                <input
                    type="textarea"
                    className={style.inputPersonal}
                    name="descriptionJob"
                    id="description"
                    value={item.descriptionJob}
                    onChange={(e) => handleChange(e, item.id)}
                    placeholder="Realicé..."
                />
            </div>
        </div>
    );
};

export default FieldExperience;