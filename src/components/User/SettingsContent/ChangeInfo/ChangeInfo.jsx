

import { useSelector } from "react-redux"
import ChangeLabelRequired from "./ChangeLabelRequired/ChangeLabelRequired"
import "./change-info.scss"

const ChangeInfo = () => {
    const {isActivated} = useSelector(store => store.user.user)

    return (

        <div className="settings-info__body">
            { !isActivated  && <ChangeLabelRequired/>}
            

        </div>
    )
}

export default ChangeInfo