
import "./input.scss"

const InputItem = ({
    type, 
    placeholder,
    onChange,
    value
}) => {
    return (    
        <input

            type={type}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
            value={value}
            className="input-item"
            />
    )
}

export default InputItem