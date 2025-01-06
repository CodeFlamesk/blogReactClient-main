
import "./checkbox.scss"

const PoliticCheckbox = ({onChangeChecked, checked}) => {

    return (
        <label onChange={e => onChangeChecked(e)} htmlFor="input-1" className="form__checkbox form-checkbox ">
            <input checked={checked}   id="input-1" type="checkbox" className="form-checkbox__input" required/>
            <span className="form-checkbox__block"></span>
            <span className="form-checkbox__text">I agree with Terms of Use and  <a href="#">Privacy Policy</a></span>
        </label>
    )
}

export default PoliticCheckbox