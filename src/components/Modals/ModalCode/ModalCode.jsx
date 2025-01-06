import ButtonRight from "components/Buttons/buttonRight/ButtonRight";
import Input from "components/forms/Input/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { changeForgotCode } from "store/forgotStore";
import { changeModalsPassword } from "store/modalsStore";
import { v4 } from "uuid";


const ModalCode = () => {

    const {forgotCode} = useSelector(store => store.forgot)
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const codeCheck = async (text, forgotCode) => {
        if(text) {
            if(+text === +forgotCode) {
                dispatch(changeModalsPassword(true))
                dispatch(changeForgotCode(false))
            } 
        }
    }

    return (
        <div className="forgot__body"> 
            <Input text={"Code"} id={v4()} holder={"Enter your code"} type={"text"} value={text} setValue={setText}/>
            <ButtonRight cb={() => codeCheck(text, forgotCode)} text={"Отправить код"}/>
        </div>
    )
}

export default ModalCode