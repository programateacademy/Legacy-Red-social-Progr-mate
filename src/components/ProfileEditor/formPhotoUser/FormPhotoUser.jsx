import React, { useContext, useEffect, useState } from "react"
import style from "./formPhoto.module.css"
import { BiTrash } from "react-icons/bi"

import { DataContext } from "../../../context/DataContext"

const FormPhotoUser = ({dataUser, setDataUser}) => {

    const [pathImage, setPathImage] = useState("")

    const deleteImage = () => {
        setDataUser({
            ...dataUser,
            avatar: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
        })
    }


    const onFileChange = (e) => {
        if (e.target.files.length) {
            const file = e.target.files[0]
// the picture must be less than 75KB
            if (file.size < 75000) {
                if (file.type.includes("image")) {
                    const reader = new FileReader()
                    reader.readAsDataURL(file)
                    reader.onload = function load() {
                        setPathImage(reader.result)
                        setDataUser({
                            ...dataUser,
                            avatar: reader.result,
                        })
                        console.log(reader.result)
                    }
                } else {
                    console.log("Hubo un error")
                }
            } else {
                alert(`El tamaño máximo es 70 KB`)
            }
        }
    }

    return (
        <>
            <div className={style.headerPerfil}>
                <h1>Completa tu perfil</h1>
                <p>Hola {`${dataUser.firstName} ${dataUser.middleName} ${dataUser.lastName} ${dataUser.secondSurname}`}, completa tus datos</p>
            </div>        
            <form>
                <div className={style.containPhoto}>
                    <div className={style.iconsHead}>
                        <label className={style.label} htmlFor="photo">
                            Foto de perfil
                        </label>
                        <div className={style.fileImage}>
                            {dataUser.avatar ? (
                                <img src={dataUser.avatar} alt="Foto-usuario" />
                            ) : null}
                        </div>
                        <div className={style.icons}>
                            <div className={style.inputFile}>
                                <i className="fa-solid fa-plus icon"></i>
                                <input
                                    type="file"
                                    accept="image/png, image/jpeg, image/jpg, image/svg"
                                    className="photoFile"
                                    placeholder="Foto"
                                    onChange={onFileChange}
                                />
                            </div>
                            <BiTrash
                                onClick={deleteImage}
                                className={style.icon}
                            />
                        </div>
                    </div>
                    
                </div>
            </form>
        </>
    )
}

export default FormPhotoUser
