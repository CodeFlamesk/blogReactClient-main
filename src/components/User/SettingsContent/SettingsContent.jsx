

import Title24 from "components/Title24/Title24"
import ChangePassword from "./ChangePassword/ChangePassword"
import "./settings-content.scss"
import { useSelector } from "react-redux"
import ChangeInfo from "./ChangeInfo/ChangeInfo"
import DeleteAccount from "./DeleteAccount/DeleteAccount"
import ChangeAvatar from "./ChangeAvatar/ChangeAvatar"
import AddNewPost from "../AddNewPost/AddNewPost"



const data = {
    changePassword: "Сhange your password",
    changeInfo: "Change User Info",
    deleteAcc: "Log out or delete account",
    changeAvatar: "Change User Avatar",
    addPost: "Add Post to Web-Site",
}

const SettingsContent = () => {

    const {paramSettings} = useSelector(store => store.user);

    return (
        <div className='settings-content'>
            <div className="settings-content__title">
                <Title24 text={data[paramSettings]}/>
            </div>
            <div className="settings-content__body">
                {
                    paramSettings === "changePassword" && <ChangePassword/>
                }
                {
                    paramSettings === "changeInfo" && <ChangeInfo/>
                }
                {
                    paramSettings === "deleteAcc" && <DeleteAccount/>
                }
                {
                    paramSettings === "changeAvatar" && <ChangeAvatar/>
                }
                {
                    paramSettings === "addPost" && <AddNewPost/>
                }
            </div>
        </div>
    )
}

export default SettingsContent