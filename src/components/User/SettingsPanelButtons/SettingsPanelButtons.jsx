import React from 'react'

import "./settings-panel-buttons.scss"
import ButtonRight from 'components/Buttons/buttonRight/ButtonRight'
import { useDispatch } from 'react-redux'
import { changeParamSettings } from 'store/userReducer'

const data = [
    {
        text: "Сhange Password",
        params:"changePassword"
    },
    {
        text: "Сhange User Info",
        params:"changeInfo"
    },
    {
        text: "Delete",
        params:"deleteAcc"
    },
    {
        text: "Change Avatar",
        params:"changeAvatar"
    },
    {
        text: "Add Post",
        params:"addPost"
    },
]

const SettingsPanelButtons = () => {

    const dispatch = useDispatch()

    return (
        <div className='buttons-list-user'>
            {
                data.map(({text, params}) => {
                    return (
                        <ButtonRight cb={() => dispatch(changeParamSettings(params))} text={text}/>
                    )
                })
            }
        </div>
    )
}

export default SettingsPanelButtons