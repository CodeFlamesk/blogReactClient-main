import authAction from 'action/authAction';
import userAction from 'action/userAction'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import "./delete-account.scss";

import ButtonRight from 'components/Buttons/buttonRight/ButtonRight';

const DeleteAccount = () => {

    const {id} = useSelector(store => store.user.user);

    const dispatch = useDispatch();

    const deleteAccount =  (id) => {
        dispatch(userAction.deleteUser(id))
    }


    return (
        <div className='delete__body-user'>
            <ButtonRight  cb={() => deleteAccount(id)} text={"Delete account"}/>
            <ButtonRight  cb={() => dispatch(authAction.logout())} text={"Logout"}/>
        </div>
    )
}

export default DeleteAccount