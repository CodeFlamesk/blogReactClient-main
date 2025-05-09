import { NavLink } from 'react-router-dom'
import "./header.scss"

import logoMobile from "./img/logo-mobile.webp"
import logoDesktop from "./img/logo-stmg.webp"
import logoTablet from "./img/logo-small.webp"

import { useEffect, useState } from 'react'

import AuthHeader from './AuthHeader/AuthHeader'
import { useDispatch, useSelector } from 'react-redux'
import { changeSubscribe } from 'store/newsletterStore'


const menu = [
    {
        to: "/",
        page: "Home"
    },
    {
        to: "/admin/addgame",
        page: "Create Game"

    },
    {
        to: "/allgame",
        page: "Game"
    },
    {
        to: "https://bir3791.github.io/race-mobile/",
        page: "Mini Game"
    },
    {
        to: "/volunteer",
        page: "Our Volunteer"
    },
]

const Header = () => {

    const { newsletter } = useSelector(store => store.newsletter)
    const { role } = useSelector(store => store.user.user);

    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem("newsletterBlog")) {
            dispatch(changeSubscribe(localStorage.getItem("newsletterBlog")));
        }
    }, [dispatch]);

    const [active, setActive] = useState(false);

    const closeMenu = () => setActive(false);

    return (
        <header className={`header ${active ? " _active" : ""}`}>
            <div className="header__body">
                <div className="header__container">
                    <div className="header__content">
                        <div className="header__logo">
                            <picture>
                                <source media="(min-width:1300px )" srcSet={logoDesktop} type="image/webp" />
                                <source media="(min-width:991.98px )" srcSet={logoTablet} type="image/webp" />
                                <img src={logoMobile} alt="Logo" />
                            </picture>
                        </div>
                        <nav className="header__menu menu">
                            <ul className="menu__list">
                                {menu.map(({ to, page }) => {
                                    if (
                                        (to === "/allgame" && role === "USER") ||
                                        (["/admin/addgame"].includes(to) && !["ADMIN", "LEADER"].includes(role))
                                    ) {
                                        return null;
                                    }
                                    return (
                                        <li key={to} className="menu__item">
                                            <NavLink to={to} className="menu__link" onClick={closeMenu}>
                                                {page}
                                            </NavLink>
                                        </li>
                                    );
                                })}


                            </ul>
                        </nav>
                        <AuthHeader />
                        <button onClick={() => setActive(prev => !prev)} className="icon-menu" aria-label="menu">
                            <svg className={`ham hamRotate ham8 ${active ? " active" : ""}`} viewBox="0 0 100 100" width="80">
                                <path
                                    className="line top"
                                    d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                                <path className="line middle" d="m 30,50 h 40" />
                                <path
                                    className="line bottom"
                                    d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
