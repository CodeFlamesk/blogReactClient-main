


import ButtonRight from "components/Buttons/buttonRight/ButtonRight";
import chevron from "../img/chevron.png";
import image from "../img/Image.png"
import close from "../img/close.png"


import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";

import "./user-header-block.scss";
import { useDispatch, useSelector } from "react-redux";
import authAction from "action/authAction";
import RightButtonLink from "components/RightButton/RightButtonLink";
import UserBlock from "components/User/UserBlock/UserBlock";

const UserHeaderBlock = () => {
    const [block] = useAutoAnimate()
    const [show, setShow] = useState()
    const dispatch = useDispatch();

    return (
        <div ref={block} className="user-header__body">
            <button  onClick={() => setShow(true)} className="button-user">
                <img width={40} height={40} src={image} alt="user photo" />
                <img src={chevron} alt="chevron right" />
            </button>
            {
                show && 
                <div className="user-header__content">
                    <div className="user-info__header">
                        <UserBlock/>
                        <button className="data__item" onClick={() => setShow(false)}>
                            <img src={close} alt="Close" />
                        </button>
                    </div>
                    
                        <RightButtonLink to={"/settings"} text={"User settings"}/>
                        <ButtonRight cb={() => dispatch(authAction.logout())} text={"Logout"}/>
                        
                </div>  
            }
            
        </div>
    )
}

export default UserHeaderBlock