import Input from "components/forms/Input/Input"
import { useState } from "react"
import { v4 } from "uuid"


import "./change-password.scss"
import { useDispatch, useSelector } from "react-redux"
import userAction from "action/userAction"
import ButtonRight from "components/Buttons/buttonRight/ButtonRight"
import ModalsParent from "components/Modals/ModalsParent/ModalsParent"
import { changeActiveModal } from "store/modalsStore"
import ModalsThankBack from "components/Modals/ModalsThankBack/ModalsThankBack"

const ChangePassword = () => {
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const {email} = useSelector(store => store.user.user);
    const {
        active, 
    } = useSelector(store => store.modals);
    const dispatch = useDispatch();

    const onChangePassword = async  (newPass, confirmPass, oldPass ) => {
        if(newPass === confirmPass) {
            dispatch(userAction.changePassowrd(email, oldPass, newPass))
        }   
    }

    return (
        <>
            <div className="password__user-body">
                <Input holder={"Enter old password"} value={oldPass} setValue={setOldPass} id={v4()} type={"password"} text={"Your old password"} />
                <Input holder={"Enter new password"} value={newPass} setValue={setNewPass} id={v4()} type={"password"} text={"New password"} />
                <Input holder={"Confirm new password"} value={confirmPass} setValue={setConfirmPass} id={v4()} type={"password"} text={"Confirm password"} />
                <ButtonRight cb={() => 
                    onChangePassword(newPass, confirmPass, oldPass)
                    .finally(() =>  {
                        setOldPass("")
                        setNewPass("")
                        setConfirmPass("")
                    })
                } 
                    text={"Send"}/>
            </div>
            {
                active && 
                    <ModalsParent closeB={true} cb={() => dispatch(changeActiveModal(false))}>
                        <ModalsThankBack/>
                    </ModalsParent>
            }
        </>
    )
}

export default ChangePassword