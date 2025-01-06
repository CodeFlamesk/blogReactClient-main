
import { changeActiveModal, changeTextModal, changeTitleModal } from "store/modalsStore";
import $api from "../http/index"
import { logoutUser, registrationUser } from "store/userReducer";
import axios from "axios";
import { _API_URL } from "../../config";


class UserAction {
    static async fetchUsers (){
        const response = await $api.post("/user/users")
        return response.data;
    }

    changePassowrd(email, password, newPassword) {
        return async  dispatch => {
            try {
                const response = await $api.post("/user/password/change", {email, password, newPassword});
                if(response.status === 200) {
                    localStorage.setItem("token", response.data.accessToken);
                    dispatch(changeTextModal(""));
                    dispatch(changeTitleModal("Вы изменили свой пароль"));
                }
            } catch(e) {
                dispatch(changeTextModal(e.response.data.message));
                dispatch(changeTitleModal("Произошла ошибка"));
            } finally {
                dispatch( changeActiveModal(true));
            }
        }
    }

    uploadAvatar(file, id) {
        return async dispatch => {
            try {
                const formData = new FormData();
                formData.append("file", file)
                formData.append("id", id)
                const response = $api.post("/user/avatar", formData);

                if(response.status === 200) {
                    return dispatch(registrationUser(response.data));
                }
            } catch(e) {
                console.log(e)
            }
        }
    }

    deleteAvatar(id) {
        return async dispatch => {
            try {
                
                const response = $api.delete(`/user/avatar/${id}`);
                if(response.status === 200) {
                    return dispatch(registrationUser(response.data));
                }
            } catch(e) {
                console.log(e)
            }
        }
    }

    deleteUser(id) {
        return async dispatch => {
            try {
                const response = await axios.delete(`${_API_URL}/user/del/${id}`, { withCredentials: true });
                if(response.status === 200) {
                    localStorage.removeItem("token");  
                    return dispatch(logoutUser())
                }
            } catch(e) {
                console.log(e)
            }
        }
    }

}

export default new UserAction