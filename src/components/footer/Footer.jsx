import "./footer.scss";
import star from './img/stars.webp';
import tank from './img/tank.webp';
import arrow from './img/arrow-footer.webp';
import arrows from './img/arrow-small-footer.webp';
import line from './img/decor-line.webp';
import tree from './img/tree.webp';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__section box-footer">
                <div className="box-footer__contant contant-info">


                    <p className="contant-info__title">Small tactical Mobile Groop</p>
                    <img src={arrow} alt="arrow-right" className="box-footer__arrow-img" />


                    <div className="contant-info__stars stars">
                        <img src={star} alt="stars" className="stars-img" />
                        <img src={star} alt="stars" className="stars-img" />
                        <img src={star} alt="stars" className="stars-img" />
                        <img src={star} alt="stars" className="stars-img" />
                        <img src={star} alt="stars" className="stars-img" />
                    </div>
                    <p className="contant-info__join">Play with Us</p>
                    <a
                        href="discord://discord.gg/JYvMMKwm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contant-info__button-subscribe"
                    >
                        Join Now
                    </a>

                </div>

                <img src={tank} alt="tank" className="box-footer__tank-img" />

            </div>
            <div className="footer__small-footer small-footer">
                <div className="small-footer__decor-line">
                    <img src={line} alt="decor-line-ua" />
                </div>

                <div className="small-footer__info info">

                    <img src={arrows} alt="arrow-right" className="info__arrow" />
                    <div className="info__info-authors info-authors">
                        <img src={tree} alt="tree" />
                        <div className="info-authors__text">
                            <p>developed by Code_Flamesk</p>
                            <p>designed by mantraneon</p>
                        </div>
                        <img src={tree} alt="tree" />
                    </div>
                    <img src={arrows} alt="arrow-right" className="info__arrow-return" />
                </div>
            </div>
        </footer>
    );
};
export default Footer;