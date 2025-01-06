
import ContactForm from "pages/Contact/ContactForm/ContactForm";
import UnlockBlockParent from "../UnlockBlockParent/UnlockBlockParent";
import image from "assets/contacts/image1.png";
import image2 from "assets/contacts/image2.png"
import FututreBlockParent from "../FutureBlockParent/FututreBlockParent";
import SpollersItems from "components/Spollers/SpollersItems/SpollersItems";
import Title40 from "components/Title40/Title40";
import AskModal from "components/Modals/AskModal/AskModal";
import { useState } from "react";
import ButtonRight from "components/Buttons/buttonRight/ButtonRight";


const UnlockContact = () => {

    return (
        <UnlockBlockParent>
            <FututreBlockParent childrenLeft={<ContactFormLeft/>} childrenRight={<ContactForm/>}/>
            <FututreBlockParent childrenLeft={<TabsLeft/>} childrenRight={<SpollersItems/>}/>
        </UnlockBlockParent>
    )
}

const ContactFormLeft = () => {

    return (
        <>
            <div className="item-action__image">
                <img width="80" height="80"  src={image} alt="image"/>
            </div>
            <div className='main-block__header-item header-item'>
                <div className='header-item__title '>
                    <h2>Get in Touch with AI Podcasts</h2>
                </div>
            </div>
        </>
    )
}

const TabsLeft = () => {
    const [active, setActive] = useState(false);

    return (
        <>
            <div className="item-action__image ">
                <img width="80" height="80" src={image2} alt="image"/>
            </div>
            <div className="item-action__title ">
                <Title40 title={"Asked question"}/> 
            </div>
            <div className="item-action__text">
                <p>If the question is not available on our FAQ section, Feel free to contact us personally, we will resolve your respective doubts. </p>
            </div>

            <div className="item-action__button">
                <ButtonRight cb={() => setActive(true)} text={"Ask Qustion"}/>
                
            </div>
            {
                active && <AskModal cb={() => setActive(false)}/>
            }
        </>
    )
}

export default UnlockContact