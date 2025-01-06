import RightButton from 'components/RightButton/RightButton';
import Input from 'components/forms/Input/Input';
import React, { useEffect, useState } from 'react'
import { v4 } from "uuid"

import "./login.scss"

import RightButtonLink from 'components/RightButton/RightButtonLink';
import Images from './Images/Images';
import authAction from 'action/authAction';
import { useDispatch, useSelector } from 'react-redux';
import ModalsParent from 'components/Modals/ModalsParent/ModalsParent';
import ModalsThank from 'components/Modals/ModalsThank/ModalsThank';
import { changeActiveModal } from 'store/modalsStore';


const Sign = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const {active} = useSelector(store => store.modals)
    const isAuth = useSelector(store => store.user.isAuth)

    const dispatch = useDispatch();

    const onSign = async (email, pass, name, lastname) => {
        dispatch(authAction.registration(email, pass, name, lastname))
    }


    return (
        <>
            <section className="main-forms">
                <div className="main-forms__container">
                    <div className="main-forms__body-login">
                        <div className='main-forms__header-item header-item block-margin'>
                            <div className='header-item__title'>
                                <h2><span>Sign Up</span></h2>
                            </div>
                            <div className='header-item__text text'>
                                <p>Join our community today! Create an account to unlock exclusive features and personalized experiences.</p>
                            </div>
                        </div>
                        <form  className="main-forms__form-login form-login">
                            <div className="form-login__body">
                                <Input setValue={setName} value={name} id={v4()} type={"text"} holder={"Enter First Name"}  />
                                <Input setValue={setLastname} value={lastname} id={v4()} type={"text"} holder={"Enter Last Name"}  />
                                <Input setValue={setEmail} value={email} id={v4()} type={"email"} holder={"Enter your Email"}  />
                                <Input setValue={setPassword} value={password} id={v4()} type={"text"} holder={"Enter your Password"}  />
                            </div>
                            <div className="form-login__buttons">
                                <RightButton cb={() => {
                                    onSign(email, password, name, lastname)
                                        .catch(() => {
                                            setEmail("")
                                            setPassword("")
                                        })
                                    
                                }} text={"Sign Up"} type={"submit"} />
                            </div>
                        </form>
                        <div className="main-forms__items">
                            <div className="main-forms__buttons">
                                <RightButtonLink text={"Login"} to={"/login"}/>
                            </div>
                            <Images/>
                        </div>
                    </div>
                </div>
            </section> 
            {
                active && 
                    <ModalsParent closeB={true} cb={() => dispatch(changeActiveModal(false))}>
                        <ModalsThank></ModalsThank>
                    </ModalsParent>
            }
        </>
    )
}

export default Sign