

import "./contact.scss";
const MainBlockContact = () => {
    return (
        
        <div className="main__contact main-contact">
        <div className="main-contact__container">
            <div className="main-contact__items">
                <div className="main-contact__item main-contact__item-1">
                    <div className="main-contact__title text-anim _anim-items">
                        <h2  data-splitting="chars">General Inquiries</h2>
                    </div>
                    <div className="main-contact__button">
                        <a href="mail-to:contact@ai-podcasts.com"  className="button-arrow button button-arrow-dark ">
                            <span className="button-arrow__text ">contact@ai-podcasts.com</span>
                            <span className="button-arrow__image">
                                <i className="fa-solid fa-arrow-up"></i>
                            </span>
                            <span className="fill-container"></span>
                        </a>
                        <a href="tel:123456789" className="button-arrow  button button-arrow-dark ">
                            <span  className=" button-arrow__text">+1 (123) 456-7890</span>
                            <span className="button-arrow__image">
                                <i className="fa-solid fa-arrow-up"></i>
                            </span>
                            <span className="fill-container"></span>
                        </a>
                    </div>
                </div>
                <div className="main-contact__item main-contact__item-2">
                    <div className="main-contact__title text-anim _anim-items">
                        <h2 data-splitting="chars">Technical Support</h2>
                    </div>
                    <div className="main-contact__button">
                        <a href="mail-to:contact@ai-podcasts.com" className="button-arrow button  button-arrow-dark ">
                            <span  className=" button-arrow__text">contact@ai-podcasts.com</span>
                            <span className="button-arrow__image">
                                <i className="fa-solid fa-arrow-up"></i>
                            </span>
                            <span className="fill-container"></span>
                        </a>
                        <a href="tel:123456789" className="button-arrow button button-arrow-dark ">
                            <span className=" button-arrow__text">+1 (123) 456-7890</span>
                            <span className="button-arrow__image">
                                <i className="fa-solid fa-arrow-up"></i>
                            </span>
                            <span className="fill-container"></span>
                        </a>
                        
                    </div>
                </div>
                <div className="main-contact__item main-contact__item-3">
                    <div className="main-contact__title text-anim _anim-items">
                        <h2 data-splitting="chars">Our Office</h2>
                    </div>
                    <div className="main-contact__button">
                        <div className="main-contact__text text-anim _anim-items">
                            <p data-splitting="chars">Address: 123 AI Tech Avenue, Techville, 54321</p>
                        </div>
                        <a href="#" className="button-arrow button button-arrow-dark">
                            <span className=" button-arrow__text">Get Directions</span>
                            <span className="button-arrow__image">
                                <i className="fa-solid fa-arrow-up"></i>
                            </span>
                            <span className="fill-container"></span>
                        </a>
                    </div>
                </div>
                <div className="main-contact__item main-contact__item-4">
                    <div className="main-contact__title text-anim _anim-items">
                        <h2 data-splitting="chars">Connect with Us</h2>
                    </div>
                    <div className="main-contact__buttons">
                        <a href="#" className="button-opacity">
                            <span className="button-opacity__image">
                                <i className="fa-brands fa-twitter"></i>
                            </span>
                        </a>
                        <a href="#" className="button-opacity">
                            <span className="button-opacity__image">
                                <i className="fa-brands fa-facebook"></i>
                            </span>
                        </a>
                        <a href="#" className="button-opacity ">
                            <span className="button-opacity__image">
                                <i className="fa-brands fa-linkedin"></i>
                            </span>   
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MainBlockContact