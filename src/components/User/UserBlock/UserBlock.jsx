

import { useSelector } from "react-redux";
import "./user-block.scss";
import image from "../../header/img/Image.png"

const UserBlock = () => {
    const {name, surname} = useSelector(store => store.user.user);
    return (
        <div className="user-info">
            <img width={40} height={40} src={image} alt="user photo" />
            <div className="user-info__content">
                <p>{name}</p>
                <p>{surname}</p>
            </div>
        </div>
    )
}

export default UserBlock