import React from 'react'
const Name = ({ nameField, onChange, field, children, value }) => {
    return (

        <>
            {children}
            <input
                type="text"
                name={field}
                onKeyDown={onChange}
                placeholder={nameField}
                value={value}
            />
        </>
    )
}

export default Name