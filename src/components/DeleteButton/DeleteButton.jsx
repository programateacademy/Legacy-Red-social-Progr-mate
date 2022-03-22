import React from 'react';
import Icon_Delete from '../../assets/icons/Icon_delete'
import { deleteData } from '../../helpers/fetch'

/* Delete any thing */
const DeleteButton = ({ endpoint, id}) => {

    const handleDelete = () => {
        deleteData(endpoint, id)
    }
    return (
        <button onClick={handleDelete}>
            <Icon_Delete/>
        </button>
    )
}

export default DeleteButton