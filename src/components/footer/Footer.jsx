import "./footer.scss";
import star from './img/stars.webp';
import tank from './img/tank.webp';
import arrow from './img/arrow-footer.webp';
import arrows from './img/arrow-small-footer.webp';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__section box-footer">
                <div className="box-footer__contant contant-info">
                    <p className="contant-info__title">Small tactical Mobile Groop</p>

                    <div className="contant-info__stars">
                        <img src={star} alt="stars" />
                        <img src={star} alt="stars" />
                        <img src={star} alt="stars" />
                        <img src={star} alt="stars" />
                        <img src={star} alt="stars" />
                    </div>
                    <p className="contant-info__join">Join Us</p>
                    <div className="contant-info__button-subscribe">subscribe now</div>
                </div>
                <img src={arrow} alt="arrow-right" className="box-footer__arrow-img" />
                <img src={tank} alt="tank" className="box-footer__tank-img" />

            </div>
            <div className="footer__small-footer small-footer">
                <img src={arrows} alt="arrow-right" className="box-footer__arrow-small-footer" />

            </div>
        </footer>
    );
};
export default Footer;