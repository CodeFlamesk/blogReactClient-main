import "./footer.scss";
import star from './img/stars.webp';
import tank from './img/tank.webp';
import arrow from './img/arrow-footer.webp';

import SmallFooter from "./SmallFooter";
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
            <SmallFooter />
        </footer>
    );
};
export default Footer;