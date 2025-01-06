import Title40 from "components/Title40/Title40"
import FututreBlockParent from "../FutureBlockParent/FututreBlockParent"
import UnlockBlockParent from "../UnlockBlockParent/UnlockBlockParent"
import ai from "./img/al-revolution.png"
import aui from "./img/aui.png"
import UserAction from "./UserAction/UserAction"


import "./unlock-podcast.scss"

const UnlockPodcast = () => {
    return (
        <UnlockBlockParent>
            <FututreBlockParent 
                childrenLeft={<Left/> }
                childrenRight={<Right/>} />
            <FututreBlockParent 
                childrenLeft={<Left/> }
                childrenRight={<Right/>} />
        </UnlockBlockParent>
    )
}

const Left = () => {
    return (
        <>
            <div className="item-action__image">
                <img width="80" height="80" src={ai} alt="image"/>
            </div>
            <div className="item-action__title-block title-block">
                <div className="item-action__title ">
                    <Title40 title={"AI Revolution"}/>
                </div>
            </div>
            <UserAction/>
        </>
    )
}
const Right = () => {
    return (
        <>
            <div className="image-video__image">
                <img src={aui} alt="image"/>
            </div>
            <h3 className="image-bottom__title">Variety of Topics</h3>
            <p className="image-bottom__text">Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).</p>
            <div className="image-cart__content ">
                <div className="image-cart__list">
                    <ul className="list-item__ul">
                        <li data-splitting="chars" className="list-item__text"> Total Episodes</li>
                        <li data-splitting="chars" className="list-item__label">40 </li>
                    </ul>
                    <ul className="list-item__ul text-anim _anim-items">
                        <li data-splitting="chars" className="list-item__text"> Average Episode Length</li>
                        <li data-splitting="chars" className="list-item__label"> 40 min</li>
                    </ul>
                    <ul className="list-item__ul text-anim _anim-items">
                        <li data-splitting="chars" className="list-item__text"> Release Frequency</li>
                        <li data-splitting="chars" className="list-item__label">Monthly </li>
                    </ul>
                </div>
            </div>
        </>
                    
    )
}

export default UnlockPodcast