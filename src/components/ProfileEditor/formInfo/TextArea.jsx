import React from 'react'
const TextArea = ({nameField, onChange , field, children, value}) => {
        return (<>
            {children}
            <textarea
                type="text"
                name={field}
                onKeyDown={onChange}
                placeholder={nameField}
                value={value}
            />
        </>)
}

export default TextArea