import React from 'react'
import styles from './Form_PersonalInfo.module.css'
const Name = ({nameField, onChange , field, children}) => {
        return (<>
            {children}
            <input
                className={styles.nom}
                type="text"
                name= {field}
                onKeyDown={onChange}
                placeholder={nameField}
            />
        </>)
}

export default Name