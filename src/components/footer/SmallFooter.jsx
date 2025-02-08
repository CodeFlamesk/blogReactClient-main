import './small-footer.scss';
import arrows from './img/arrow-small-footer.webp';
import line from './img/decor-line.webp';
import tree from './img/tree.webp';
const SmallFooter = () => {
    return (
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
    )
}
export default SmallFooter