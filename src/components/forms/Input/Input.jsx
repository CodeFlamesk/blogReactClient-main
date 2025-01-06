

import "./input.scss";

const Input = ({
    id,
    holder,
    type,
    text,
    value,
    setValue
}) => {
    return (
        <label className='form__label' htmlFor={id}>
            {text}
            <input 
                onChange={e => setValue(e.target.value)}
                id={id} 
                value={value} 
                type={type} 
                className='form__input' 
                placeholder={holder}
                />
        </label>
    )
}

export default Input