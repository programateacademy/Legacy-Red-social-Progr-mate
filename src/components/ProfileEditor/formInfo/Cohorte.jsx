import React from 'react';

const Cohorte =({allCohorts, onChange, field, children})=> {
    return (
        <>
            {children}
            <select
                type="select"
                name= {field}
                onChange={onChange}>
                {allCohorts.map(item => <option value={item._id} key={item._id}>{item.cohorte_name}</option>)}
            </select>
        </>
    )
}
export default Cohorte