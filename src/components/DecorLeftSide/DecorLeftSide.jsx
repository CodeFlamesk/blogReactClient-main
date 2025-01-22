import "./decor-left-side.scss"
import soldier from "./img/soldier.png"
import arrow from "./img/arrows.webp"
import game from './img/game-img.webp'
import over from './img/over-img.webp'
const DecorLeftSide = () => {

    return (
        <div className="decor-page">
            {/*      <img src={arrow} alt="arrow" className="decor-page__arrow" /> */}
            <div className="decor-page__line"></div>
            <img src={over} alt="over-img" className="decor-page__over-img" />
            <img src={game} alt="game-img" className="decor-page__game-img" />
            <img src={soldier} alt="soldier" className="decor-page__soldier" />
            <img src={arrow} alt="arrow" className="decor-page__arrow-down" />
        </div>
    )
}

export default DecorLeftSide