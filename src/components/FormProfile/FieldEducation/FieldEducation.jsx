import React, { useContext, useEffect, useState } from "react";
import { BiX } from "react-icons/bi";

import style from "../ProfessionalInformation.module.css";
import { DataContext } from "../../../context/DataContext";

export const FieldEducation = ({
    item,
    handleChange,
    onFileChange,
    deleteCertificate,
    deleteEducation,
}) => {
    const { dataProfile } = useContext(DataContext);
    return (
        <div className={style.education} id="0">
            <div className={style.inputs}>
                <label className={style.label} htmlFor="institution">
                    Título*
                </label>
                <i
                    className="far fa-trash-alt"
                    onClick={() => deleteEducation(item.id)}
                />
                <input
                    type="text"
                    className={style.inputPersonal}
                    name="degree"
                    id="institution"
                    value={item.degree}
                    onChange={(e) => handleChange(e, item.id)}
                    placeholder="Título"
                />
            </div>
            <div className={style.inputs}>
                <label className={style.label} htmlFor="institution">
                    Institución Educativa*
                </label>
                <input
                    type="text"
                    className={style.inputPersonal}
                    name="institution"
                    id="institution"
                    value={item.education}
                    onChange={(e) => handleChange(e, item.id)}
                    placeholder="nombre de la institución"
                />
            </div>
            {/* seccion de las fechas */}
            <div className={style.containDate}>
                <label className={style.label} htmlFor="email">
                    Fecha inicio{" "}
                </label>
                <input
                    type="date"
                    className={style.inputDate}
                    name="eduDateInit"
                    id="fecha inicio"
                    value={item.eduDateInit}
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
                    name="eduDateEnd"
                    id="fecha fin"
                    value={item.eduDateEnd}
                    onChange={(e) => handleChange(e, item.id)}
                />
            </div>

            <div name="formulario" className={style.inputFile}>
                <label className={style.label} htmlFor="edad">
                    Añadir certificado <span>*jpg *png *jpeg</span>
                </label>

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
                        <div className={style.containDelete} key={item.id}>
                            <BiX
                                className={style.deleteImg}
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
        </div>
    );
};