import newsLetterAction from 'action/newsLetterAction'
import ButtonRight from 'components/Buttons/buttonRight/ButtonRight'
import Input from 'components/forms/Input/Input'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'


const ModalsNewsletter = () => {

    const [email, setEmail] = useState("")
    const dispatch = useDispatch();

    const subscribe = (email) => {
        if(email) {
            dispatch(newsLetterAction.subscribe(email));
        }
    }

    return (

        <div className="forgot__body"> 
            <Input text={"Your email"} id={v4()} holder={"Enter your email"} type={"email"} value={email} setValue={setEmail}/>
            <ButtonRight cb={() => subscribe(email)} text={"Подписаться"}/>
        </div>
    )
}

export default ModalsNewsletter