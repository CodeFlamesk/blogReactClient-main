
import { Link } from "react-router-dom"
import "./footer.scss"
import Container from "components/Container/Container"


const Footer = () => {
    return (
        <footer className="footer">
            <Container>

            <div className="footer__top">
                    <div className="footer__block">
                        <div className="footer__title">
                            <h3>Home</h3>
                        </div>
                        <nav className="footer__nav">
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="/" className="footer__link">Features</a>
                                </li>
                                <li className="footer__item">
                                    <Link to="/blog" className="footer__link">Blogs</Link>
                                </li>
                                <li className="footer__item">
                                    <a href="blogui-resourse.html" className="footer__link">Resources <span>New</span></a>
                                </li>
                                <li className="footer__item">
                                    <a href="/" className="footer__link">Testimonials</a>
                                </li>
                                <li className="footer__item">
                                    <a href="blogui-contact.html" className="footer__link">Contact Us</a>
                                </li>
                                <li className="footer__item">
                                    <a href="/" className="footer__link">Newsletter</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer__block">
                        <div className="footer__title">
                            <h3>News</h3>
                        </div>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="/" className="footer__link">Trending Stories</a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">Featured Videos</a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">Technology</a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">Health</a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">Politics</a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">Environment</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__block">
                        <div className="footer__title">
                            <h3>Blogs</h3>
                        </div>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="/" className="footer__link">Quantum Computing</a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">AI Ethics</a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">Space Exploration</a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">Biotechnology <span>New</span></a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">Renewable Energy</a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">Biohacking</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__block">
                        <div className="footer__title">
                            <h3>Podcasts</h3>
                        </div>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="/" className="footer__link">AI Revolution</a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">AI Revolution</a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">TechTalk AI</a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="footer__link">AI Conversations <span>new</span></a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__block">
                        <div className="footer__title">
                            <h3>Resources</h3>
                        </div>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="/" className="button-opacity button">
                                    <span className=" button-opacity__text button-text">Whitepapers</span>
                                    <span className="button-opacity__image button-text">
                                        <i className="fa-solid fa-arrow-up"></i>
                                    </span>
                                    <div className="fill-container"></div>
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="button-opacity button">
                                    <span className=" button-opacity__text button-text">Ebooks</span>
                                    <span className="button-opacity__image button-text">
                                        <i className="fa-solid fa-arrow-up"></i>
                                    </span>
                                    <div className="fill-container"></div>
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="button-opacity button">
                                    <span className=" button-opacity__text button-text">Reports</span>
                                    <span className="button-opacity__image button-text">
                                        <i className="fa-solid fa-arrow-up"></i>
                                    </span>
                                    <div className="fill-container"></div>
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="/" className="button-opacity button">
                                    <span className=" button-opacity__text button-text">Research Papers</span>
                                    <span className="button-opacity__image button-text">
                                        <i className="fa-solid fa-arrow-up"></i>
                                    </span>
                                    <div className="fill-container"></div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer__bottom">
                    <div className="footer__politic">
                        <p>Terms & Conditions</p> | <p><a href="/">Privacy Policy</a></p>
                    </div>
                    <ul className="footer__social social">
                        <li className="social__image">
                            <a href="/"><i className="fa-brands fa-twitter"></i></a>
                        </li>
                        <li className="social__image">
                            <a href="/">  <i className="fa-brands fa-telegram"></i></a>
                        </li>
                        <li className="social__image">
                            <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                        </li>
                    </ul>
                    <div className="footer__tech">
                        <p>© 2024 FutureTech. All rights reserved.</p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer