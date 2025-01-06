import "./button-arrow.scss";

const ButtonArrow = ({href, text}) => {
    return (
        <a href={href} className="button-arrow button ">
            <span className="button-arrow__text">{text}</span>     
            <div className="fill-container"></div> 
        </a>
    )
}

export default ButtonArrow