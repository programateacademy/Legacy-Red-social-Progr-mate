import React, { useContext, useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import style from "../../ProfileEditor.module.css";
import { DataContext } from "../../../../context/DataContext";

const FieldEducation = ({
    item,
    handleChange,
    onFileChange,
    deleteCertificate,
    deleteEducation,
}) => {
    const { dataProfile } = useContext(DataContext);
    return (
        <form className={style.form_container}  >
            <div className={style.form}>
                <h3 htmlFor="institution">
                    Título*
                </h3>
                <i
                    className="far fa-trash-alt"
                    onClick={() => deleteEducation(item.id)}
                />
                <input
                    type="text"
                    name="degree"
                    id="institution"
                    value={item.degree}
                    onChange={(e) => handleChange(e, item.id)}
                    placeholder="Título"
                />
            </div>
            <div  className={style.form}>
                <h3 className={style.h3} htmlFor="institution">
                    Institución Educativa*
                </h3>
                <input
                    type="text"
                    name="institution"
                    id="institution"
                    value={item.education}
                    onChange={(e) => handleChange(e, item.id)}
                    placeholder="nombre de la institución"
                />
            </div>
            {/* seccion de las fechas */}
            <div className={style.form}>
                <h3 htmlFor="email">
                    Fecha inicio{" "}
                </h3>
                <input
                    type="date"
                    name="eduDateInit"
                    id="fecha inicio"
                    value={item.eduDateInit}
                    onChange={(e) => handleChange(e, item.id)}
                />
            </div>
            <div  className={style.form}>
                <h3  htmlFor="edad">
                    Fecha fin
                </h3>
                <input
                    type="date"
                    name="eduDateEnd"
                    id="fecha fin"
                    value={item.eduDateEnd}
                    onChange={(e) => handleChange(e, item.id)}
                />
            </div>

            <div className={style.form} name="formulario" >
                <h3 htmlFor="edad">
                    Añadir certificado <span>*jpg *png *jpeg</span>
                </h3>

                <input
                    type="file"
                    name="certificate"
                    accept="image/jpg, image/png, image/jpeg,"
                    multiple
                    value=""
                    onChange={(e) => onFileChange(e, item.id)}
                />
            </div>
            {dataProfile.prev_studes.map(
                (dataCert) =>
                    item.id === dataCert.id &&
                    dataCert.certificate && (
                        <div key={item.id}>
                            <BiX
                                onClick={() => deleteCertificate(item.id)}
                            />

                            <img
                                className={style.imgDocument}
                                src={dataCert.certificate}
                                alt="Document"
                            />
                        </div>
                    )
            )}

            {/* {nameFile[0].length > 0 ? (
                <div className={style.containDelete}>
                    <BiX
                        className={style.deleteImg}
                        onClick={deleteCertificate}
                    />

                    <h5 className={style.nameFile}>{nameFile[0]}</h5>
                </div>
            ) : null} */}
        </form>
    );
};

export default FieldEducation;