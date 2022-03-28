import React from 'react';
import Icon_Delete from '../../assets/icons/Icon_delete'
import { deleteData } from '../../helpers/fetch'
import style from "./DeleteButton.module.css"
/* Delete any thing */
const DeleteButton = ({ endpoint, id}) => {

    const handleDelete = () => {
        deleteData(endpoint, id)
    }
    return (
        <button onClick={handleDelete} className={style.btn}>
            <Icon_Delete/>
        </button>
    )
}

export default DeleteButton