import "./right-button.scss";


const ButtonRight = ({text, cb, type}) => {
    return (

            <button type={type ? type : "button"} onClick={(e) => {
                e.preventDefault()
                cb()
            }} className="button-arrow button">
                <span className="button-arrow__text">{text}</span>
                <span className="fill-container"></span>
            </button>
    )
}

export default ButtonRight