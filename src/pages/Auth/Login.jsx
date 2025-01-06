
import "./login.scss"


import Input from "components/forms/Input/Input"
import { v4 } from "uuid"
import { useState } from "react"
import RightButton from "components/RightButton/RightButton"
import RightButtonLink from "components/RightButton/RightButtonLink"
import Images from "./Images/Images"
import authAction from "action/authAction"
import { useDispatch, useSelector } from "react-redux"
import ModalsParent from "components/Modals/ModalsParent/ModalsParent"
import ModalsThank from "components/Modals/ModalsThank/ModalsThank"
import ModalForgot from "components/Modals/ModalForgot/ModalForgot"
import { changeActiveModal, changeForgotActive, offForgotModal } from "store/modalsStore";
import ModalCode from "components/Modals/ModalCode/ModalCode"
import ModalPassword from "components/Modals/ModalsPassword/ModalPassword"


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {
        active, 
        modalsActiveForgot, 
        modalsForgotCode,
        modalsChangePassword,
        thankError
    } = useSelector(store => store.modals);


    const isAuth = useSelector(store => store.user.isAuth);
    const dispatch = useDispatch()

    const onLogin = async (email, pass) => {
        dispatch(authAction.login(email, pass))
    }

    const onActiveForgot = (e) => {
        e.preventDefault()
        dispatch(changeForgotActive(true))
    }


    const changeOff = () => {
        changeForgotActive(false)
        dispatch(offForgotModal())
    }

    const onForgotPassword = () => {
        dispatch(changeForgotActive(true))
        dispatch(changeActiveModal(false))
    }

    return (
        <>
            {
                !isAuth && <section className="main-forms">
                <div className="main-forms__container">
                    <div className="main-forms__body-login">
                        <div className='main-forms__header-item header-item block-margin'>
                            <div className='header-item__title'>
                                <h2><span>Login</span></h2>
                            </div>
                            <div className='header-item__text text'>
                                <p>Welcome back! Please log in to access your account.</p>
                            </div>
                        </div>
                        <div className="main-forms__form-login form-login">
                            <div className="form-login__body">
                                <Input setValue={setEmail} value={email} id={v4()} type={"email"} holder={"Enter your Email"}  />
                                <Input setValue={setPassword} value={password} id={v4()} type={"text"} holder={"Enter your Password"}  />
                            </div>
                            <div className="form__content">
                                <div className="main-forms__title">
                                    <button type="button" className="main-forms__link" onClick={(e) => onActiveForgot(e)}>Forgot Password?</button>
                                </div>
                                <div className="form-login__buttons">
                                    <RightButton cb={() => {
                                        onLogin(email, password)
                                            .catch(setPassword(""))
                                            .finally(() => {
                                                setPassword(""), setEmail("")
                                            })
                                    }}  type={'submit'} text={"Login"}/>
                                    <RightButtonLink text={"Sign Up"} to={"/signup"}/>
                                </div>	
                            </div>
                        </div>
                        <div className="main-forms__items">
                            <Images/>
                        </div>
                    </div>
                </div>
            </section>
            }
            
            {
                active && 
                    <ModalsParent closeB={true} cb={() => dispatch(changeActiveModal(false))}>
                        <ModalsThank>
                            {
                                thankError &&  <RightButton cb={() => onForgotPassword()} text={"Восстановить пароль?"}/>
                            }
                        </ModalsThank>
                    </ModalsParent>
            }
            {
                modalsActiveForgot && 
                    <ModalsParent cb={() => changeOff()}>
                        { !modalsForgotCode &&  <ModalForgot/>}
                        { modalsForgotCode && !modalsChangePassword &&  <ModalCode/>}
                        { modalsChangePassword && <ModalPassword/>}
                    </ModalsParent>
                
            }
        </>
    )
}

export default Login