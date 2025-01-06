
import Users from '../Users/Users'

import whitepapers from "./img/whitepapres.png"
import white from "./img/white.png"

import "./unlock.scss"
import Container from 'components/Container/Container'

const Unlock = () => {
    return (
			<section className="main__unlock main-unlock">
                
                    <Container>
                    <div className="main-unlock__items">
                        <div className="main-future__item item-action">
                            <div className="item-action__body">
                                <div className="item-action__image ">
                                    <img loading="lazy" src={whitepapers} alt="image"/>
                                </div>
                                <div className="item-action__title title-40 text-anim _anim-items">
                                    <h3 data-splitting="chars">Whitepapers</h3>
                                </div>
                                <div className="item-action__text text-anim _anim-items">
                                    <p data-splitting="chars">Dive into comprehensive reports and analyses with our collection of whitepapers. </p>
                                </div>
                                <div className="item-action__button">
                                    <button className="button-arrow button-arrow-dark button">
                                        <span className=" button-arrow__text">Download Whitepapers Now</span>
                                        <span className="button-arrow__image">
                                            <i className="fa-solid fa-arrow-up"></i>
                                        </span>
                                        <span className="fill-container"></span>
                                    </button>
                                </div>
                                <div className="item-action__block ">
                                    <div className="user-stats__body">
                                        <div className="user-stats__text">
                                            <p>Downloaded By</p>
                                        </div>
                                        <div className="user-stats__title title-24">
                                            <h3>10k + Users</h3>
                                        </div>
                                    </div>
                                    <div className="users">
                                    <Users/>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="item-action__content  image-cart">
                                <div className="image-cart__items">
                                    <div className="image-cart__top">
                                        <div className="image-cart__title title-24 text-anim _anim-items">
                                            <h3 data-splitting="chars">Topics Coverage</h3>
                                        </div>
                                        <div className="image-cart__text">
                                            <p>Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).</p>
                                        </div>
                                    </div>
                                    <div className="image-cart__image">
                                        <img loading="lazy" src={white} alt="image"/>
                                    </div>
                                    <div className="image-cart__content block-text">
                                        <div className="block-text__content">
                                            <div className="block-text__item block-text__item-1">
                                                <div className="block-text__label">
                                                    <p>Total Whitepapers</p>
                                                </div>
                                                <div className="block-text__title ">
                                                    <p>Over 50 whitepapers</p>
                                                </div>
                                            </div>
                                            <div className="block-text__item block-text__item-2">
                                                <div className="block-item__body">
                                                    <div className="block-text__label">
                                                        <p>Download Formats</p>
                                                    </div>
                                                    <div className="block-text__title">
                                                        <p>PDF format for access.</p>
                                                    </div>
                                                </div>
                                                <div className="block-item__button">
                                                    <button className="button-arrow button">
                                                        <span className="button-arrow__text">Preview</span>
                                                        <span className="button-arrow__image">
                                                            <i className="fa-regular fa-eye"></i>
                                                        </span>
                                                        <span className="fill-container"></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="block-text__body">
                                            <div className="block-text__item">
                                                <div className="block-text__label">
                                                    <p>Average Author Expertise</p>
                                                </div>
                                                <div className="block-text__title">
                                                    <p>Whitepapers are authored by subject matter experts with an average of 20 years of experience.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    </Container>
                    
                    
                
            </section>
    )
}

export default Unlock