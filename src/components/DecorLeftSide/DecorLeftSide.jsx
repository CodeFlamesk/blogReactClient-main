import "./decor-left-side.scss"
import soldier from "./img/soldier.png"
import arrow from "./img/arrows.webp"
const DecorLeftSide = () => {

    return (
        <div className="decor-page">
            {/*      <img src={arrow} alt="arrow" className="decor-page__arrow" /> */}
            <div className="decor-page__line"></div>
            <img src={soldier} alt="soldier" className="decor-page__soldier" />
            <img src={arrow} alt="arrow" className="decor-page__arrow-down" />
        </div>
    )
}

export default DecorLeftSide