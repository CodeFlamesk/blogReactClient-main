import ButtonRight from "components/Buttons/buttonRight/ButtonRight"
import Input from "components/forms/Input/Input"
import { useState } from "react"
import { v4 } from "uuid"

import "./modals-forgot.scss"
import { useDispatch } from "react-redux"
import authAction from "action/authAction"

const ModalForgot = () => {
    
    const [state, setState] = useState("")
    const dispatch = useDispatch();

    return (
        <div className="forgot__body"> 
            <Input text={"Your email"} id={v4()} holder={"Enter your email"} type={"email"} value={state} setValue={setState}/>
            <ButtonRight cb={() => dispatch(authAction.forgotPassword(state))} text={"Восстановить пароль"}/>
        </div>
    )
}

export default ModalForgot