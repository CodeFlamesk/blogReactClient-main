import authAction from "action/authAction"
import ButtonRight from "components/Buttons/buttonRight/ButtonRight"
import Input from "components/forms/Input/Input"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { v4 } from "uuid"


const ModalPassword = () => {

    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const {forgotEmail} = useSelector(store => store.forgot)

    const dispatch = useDispatch()

    const checkPassword = (pass, secondPass) => {
        if(pass === secondPass) {
            dispatch(authAction.forgotPassChange(forgotEmail, pass))
        }
    }

    return (
        <div className="forgot__body"> 
            <Input text={"Your password"} id={v4()} holder={"Enter your password"} type={"password"} value={password} setValue={setPassword}/>
            <Input text={"Confirm your password"} id={v4()} holder={"Confirm your email"} type={"password"} value={secondPassword} setValue={setSecondPassword}/>
            <ButtonRight cb={() => checkPassword(password, secondPassword)} text={"Восстановить пароль"}/>
        </div>
    )
}

export default ModalPassword