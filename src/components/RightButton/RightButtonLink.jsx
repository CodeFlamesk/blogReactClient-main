import { Link } from "react-router-dom";
import "./right-button.scss";


const RightButtonLink = ({text, cb, to}) => {

    return (
        <Link to={to}  onClick={() => {
            cb()
        }} className="button-arrow button">
            <span className="button-arrow__text">{text}</span>
            <span className="button-arrow__image">
                <i className="fa-solid fa-arrow-up"></i>
            </span>
            <span className="fill-container"></span>
        </Link>
    )

}

export default RightButtonLink