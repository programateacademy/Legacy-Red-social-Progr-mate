import React from 'react';
import styles from './Form_PersonalInfo.module.css'

const Cohorte =({allCohorts, onChange, field, children})=> {

    return (
        <>
            {children}
            <select className={styles.nom}
                type="select"
                name= {field}
                onChange={onChange}>
                {allCohorts.map(item => <option value={item._id} key={item._id}>{item.cohorte_name}</option>)}
            </select>
        </>
    )
}

export default Cohorte