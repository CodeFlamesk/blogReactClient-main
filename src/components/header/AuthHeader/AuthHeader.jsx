
import { useDispatch, useSelector } from "react-redux"

import UserHeaderBlock from "../UserHeaderBlock/UserHeaderBlock";
import { NavLink } from "react-router-dom";

import "./auth-header.scss"

const AuthHeader = () => {

    const isAuth = useSelector(store => store.user.isAuth)
    

    if(isAuth) {
        return (
            <>
                <UserHeaderBlock/>
            </>
        )
    }

    return (
        <ul className="user-list-login">
            <li  className="menu__item">
                <NavLink to="/login" className="menu__link ">Login</NavLink>
            </li>
            <li className="menu__item">
                <NavLink to='/signup' className="menu__link ">Sign Up</NavLink>
            </li>
        </ul>
    )
}

export default AuthHeader