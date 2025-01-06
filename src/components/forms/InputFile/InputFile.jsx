import React from 'react'

const InputFile = ({
    id,
    holder,
    type,
    text,
    setValue
}) => {
    return (
        <label className='form__label' htmlFor={id}>
            {text}
            <input 
                accept="image/*"
                onChange={e => setValue(e)}
                id={id}  
                type={type} 
                className='form__input' 
                placeholder={holder}
                />
        </label>
    )
}

export default InputFile