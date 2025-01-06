

import "./textarea.scss"

const Textarea = ({text, value, setValue}) => {
    return (
        <div className="form__item  ">
            <label className="form__label">{text}</label>
            <textarea
                onChange={e => setValue(e.target.value)}
                value={value} 
                className="form__textarea" name="textarea"  placeholder="Enter your Message"></textarea>
        </div>
    )
}

export default Textarea