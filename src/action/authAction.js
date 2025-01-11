

import { _API_URL } from "../../config";
import $api from "../http/index";
import axios from "axios";
import {
    loginUser,
    registrationUser,
    logoutUser,
    changeLoadingAuth
} from "store/userReducer"

import {
    changeActiveModal,
    changeForgotActive,
    changeModalsForgotCode,
    changeModalsPassword,
    changeTextModal,
    changeThankError,
    changeTitleModal
} from "store/modalsStore";

import {
    changeForgotCode,
    changeForgotEmail
} from "store/forgotStore";


class AuthAction {

    login(email, password) {
        return async dispatch => {
            try {
                const response = await $api.post("/user/login", { email, password });
                localStorage.setItem("token", response.data.accessToken);

                if (response.status === 200) {
                    dispatch(changeTextModal("Вы можете перейти в особистий кабінет"))
                    dispatch(changeTitleModal("Ви війшли в аккаунт"))
                    return dispatch(loginUser(response.data.user));
                }

            } catch (e) {
                dispatch(changeTitleModal("Сталась помилка"))
                dispatch(changeTextModal(e.response.data.message))
                dispatch(changeThankError(true));
            } finally {
                dispatch(changeActiveModal(true))
            }
        }
    }

    registration(email, password, name, surname) {
        return async dispatch => {
            try {
                const response = await $api.post(`/user/registration`, { email, password, name, surname });

                localStorage.setItem("token", response.data.accessToken);
                if (response.status === 200) {
                    dispatch(changeTextModal("Перейдіть в особистий кабінет, щоб змінити інформацію"))
                    dispatch(changeTitleModal("Ви створили аккаунт"))
                    return dispatch(registrationUser(response.data.user));
                }
            } catch (e) {
                dispatch(changeTextModal(e.response.data.message))
                dispatch(changeTitleModal("Сталась помилка"))
            } finally {
                dispatch(changeActiveModal(true))
            }
        }
    }

    logout() {
        return async dispatch => {
            const response = await $api.post("/user/logout");
            localStorage.removeItem("token");
            if (response.status === 200) {
                return dispatch(logoutUser());
            }
        }
    }


    checkAuth() {

        return async dispatch => {

            try {
                dispatch(changeLoadingAuth(true))
                const response = await axios.get(`${_API_URL}/user/refresh`, { withCredentials: true })

                if (response.status === 200) {
                    localStorage.setItem("token", response.data.accessToken);
                    return dispatch(loginUser(response.data.user));
                }

            } catch (e) {

            } finally {
                dispatch(changeLoadingAuth(false))
            }
        }
    }

    forgotPassword(email) {
        return async dispatch => {
            try {
                const response = await $api.post(`/user/forgot`, { email });
                dispatch(changeForgotEmail(email))

                if (response.status === 200) {
                    return dispatch(changeForgotCode(response.data)), dispatch(changeModalsForgotCode(true))
                };
            } catch (e) {
                console.log(e)
            }
        }
    }

    forgotPassChange(email, password) {
        return async dispatch => {
            try {
                const response = await $api.post(`/user/password`, { email, password });
                if (response.status === 200) {
                    dispatch(changeTextModal("Вы можете вернутись назад і зайти в ваш аккаунт"))
                    dispatch(changeTitleModal("Ви змінили пароль."))
                    dispatch(changeActiveModal(true))
                    return dispatch(changeForgotActive(false))
                }
            } catch (e) {

            } finally {
                dispatch(changeModalsForgotCode(false))
                dispatch(changeModalsPassword(false))
            }
        }
    }

}

export default new AuthAction