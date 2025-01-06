
import ButtonRight from "components/Buttons/buttonRight/ButtonRight"

import "./user-action.scss"

const UserAction = () => {
    return (
        <div className="item-action__block user-action">
            <div className="user-action__body">
                <p  className="user-action__text">Host</p>
                <p  className="user-action__label">Dr. Sarah Mitchell</p>
            </div>
            <div className="user-action__button">
                <ButtonRight text={"Listen Podcast"}/>
            </div>
        </div>
    )
}

export default UserAction