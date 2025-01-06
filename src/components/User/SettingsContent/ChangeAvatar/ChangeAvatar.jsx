

import Title24 from "components/Title24/Title24";
import "./change-avatar.scss";
import { useState } from "react";
import InputFile from "components/forms/InputFile/InputFile";
import { useDispatch, useSelector } from "react-redux";
import userAction from "action/userAction";
import ButtonRight from "components/Buttons/buttonRight/ButtonRight";


const ChangeAvatar = () => {

    const [file, setFile] = useState([]);
    const {id} = useSelector(store => store.user.user);
    const dispatch = useDispatch();
    
    const uploadAvatar = (e) => setFile(e.target.files[0]);
    
    const onClickAddAvatar = () => {
        if(file) {
            dispatch(userAction.uploadAvatar(file, id));
        }
    }

    const onDeleteAvatar = (id) => {
        dispatch(userAction.deleteAvatar(id))
    }


    return (
        <div className="avatar-dowload">
            <Title24 text={"Add avatar"}/>
            <p> если аватар уже есть, то нужно сделать удаление на сервере из папки статик и замена его на новый</p>
            <InputFile  setValue={uploadAvatar} text={"Upload your avatar"} type={"file"} />
            <ButtonRight cb={() => onClickAddAvatar()} text={"Add avatar"} type={"button"}/>


            <ButtonRight cb={() => onDeleteAvatar(id)} text={"Delete avatar"} type={"button"}/>
        </div>
        
    )
}

export default ChangeAvatar